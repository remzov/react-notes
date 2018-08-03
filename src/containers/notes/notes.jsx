import React, {Component} from 'react';
import $ from "jquery";
import FavoritePool from '../../components/favoritePool/favoritePool';
import NotesPool from '../../components/notesPool/notesPool';
import Confirm from '../../components/confirm/confirm';
import Content from '../../components/content/content';
import Notification from '../../components/notification/notification';
import NoteListData from '../../notes.json';
const FavoriteListData = [];

class Notes extends Component {
    state = {
        noteList: NoteListData,
        favoriteList: FavoriteListData,
        content: {
            title: '',
            date: '',
            text: '',
            group: ''
        },
        notification: {
            text: '',
            visibility: false
        }
    }

    render() {
        return (
            <div className="notes" onClick={ event => this.noteClickHandler(event.target) }>
                <FavoritePool favoriteList={ this.state.favoriteList } removing={ event => this.confirmRemoving(event.target) } showContent={ event => this.showContent(event.target) } />
                <NotesPool noteList={ this.state.noteList } removing={ event => this.confirmRemoving(event.target) } showContent={ event => this.showContent(event.target) }/>
                <Confirm confirm={ event => this.removeNote(event.target.getAttribute('data-confirm-id'), event.target.getAttribute('data-confirm-title')) }/>
                <Content content={ this.state.content }/>
                <Notification notification={ this.state.notification.text } visibility={ this.state.notification.visibility }/>
            </div>
        );
    }

    noteClickHandler(target) {
        if (target.classList.contains('js-favorite-note') && target.parentNode.parentNode.parentNode.classList.contains('notes-pool')) {
            this.pickFavorite(target);
        }
        if (target.classList.contains('js-favorite-note') && target.parentNode.parentNode.parentNode.classList.contains('favorite-pool')) {
            this.unpickFavorite(target);
        }
    }

    confirmRemoving(target) {
        return new Promise((resolve) => {
            document.querySelector('.js-confirm-btn').setAttribute('data-confirm-id', target.parentNode.getAttribute('data-id'));
            document.querySelector('.js-confirm-btn').setAttribute('data-confirm-title', target.parentNode.getAttribute('data-title'));
        }).then($('.confirm').modal('show'));
    }

    pickFavorite(target) {
        return new Promise((resolve) => {
            this.setState({
                ...this.state,
                favoriteList: this.state.favoriteList.concat(this.state.noteList.find(note => note.id === target.parentNode.getAttribute('data-id'))),
                noteList: this.state.noteList.filter(note => note.id !== target.parentNode.getAttribute('data-id'))
            })
            resolve(target.parentNode.getAttribute('data-title'));
        }).then((noteTitle) => this.showNotification(noteTitle, 'was added to favorites!'))
    }

    unpickFavorite(target) {
        return new Promise((resolve) => {
            this.setState({
                ...this.state,
                favoriteList: this.state.favoriteList.filter(note => note.id !== target.parentNode.getAttribute('data-id')),
                noteList: this.state.noteList.concat(this.state.favoriteList.filter(note => note.id === target.parentNode.getAttribute('data-id')))
            })
            resolve(target.parentNode.getAttribute('data-title'));
        }).then((noteTitle) => this.showNotification(noteTitle, 'was removed from favorites!'))
    }

    removeNote(id, title) {
        return new Promise((resolve) => {
            this.setState({
                ...this.state,
                noteList: this.state.noteList.filter(note => note.id !== id ),
                favoriteList: this.state.favoriteList.filter(note => note.id !== id)
            })
            $('.confirm').modal('hide');
            resolve(title);
        }).then((title) => this.showNotification(title, 'was removed!'))
    }

    showNotification(object, action) {
        return new Promise(() => {
            this.setState({
                ...this.state,
                notification: {
                    text: `"${object}" ${action}`,
                    visibility: true
                } 
            });
        }).then(this.removeNotification(3000))
       
    }
    
    removeNotification(timer) {
        setTimeout(() => {
                this.setState({
                    ...this.state,
                    notification: {
                        ...this.state.notification,
                        visibility: false
                    } 
                })
            }, timer
        )
    }

    showContent(target) {
        return new Promise(() => {
            let noteContent = this.state.noteList.find(note => note.id === target.parentNode.getAttribute('data-id'));
            if (!noteContent) {
                noteContent = this.state.favoriteList.find(note => note.id === target.parentNode.getAttribute('data-id'));
            }
            if (!noteContent) throw new Error('There is no such note!');
            this.setState({
                ...this.state,
                content : {
                    title: noteContent.title,
                    date: noteContent.date,
                    text: noteContent.text
                }
            })
        }).then($('.content').modal('show'));
    }
}

export default Notes;