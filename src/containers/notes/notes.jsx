import React, {Component} from 'react';
import $ from "jquery";
import FavoritePool from '../../components/favoritePool/favoritePool';
import NotesPool from '../../components/notesPool/notesPool';
import Confirm from '../../components/confirm/confirm';
import Content from '../../components/content/content';
import NoteListData from '../../notes.json';
const FavoriteListData = [];

class Notes extends Component {
    state = {
        noteList: NoteListData,
        favoriteList: FavoriteListData,
        content: {
            title: 'Note title',
            date: 'Note date',
            text: 'Note text'
        }
    }

    render() {
        return (
            <div className="notes" onClick={event => this.noteClickHandler(event.target)}>
                <FavoritePool favoriteList={this.state.favoriteList}/>
                <NotesPool noteList={this.state.noteList}/>
                <Confirm confirm={event => this.removeNote(event.target.getAttribute('data-confirm-id'), event.target.getAttribute('data-confirm-title'))}/>
                <Content content={this.state.content}/>
            </div>
        );
    }

    noteClickHandler(target) {
        if (target.classList.contains('js-remove-note')) {
            this.confirmRemoving(target);
        }
        if (target.classList.contains('js-favorite-note') && target.parentNode.parentNode.parentNode.classList.contains('notes-pool')) {
            this.pickFavorite(target);
        }
        if (target.classList.contains('js-favorite-note') && target.parentNode.parentNode.parentNode.classList.contains('favorite-pool')) {
            this.unpickFavorite(target);
        }
        if (target.classList.contains('js-note')) {
            this.fillContent(target);
        }
    }

    confirmRemoving(target) {
        document.querySelector('.js-confirm-btn').setAttribute('data-confirm-id', target.parentNode.getAttribute('data-id'))
        document.querySelector('.js-confirm-btn').setAttribute('data-confirm-title', target.parentNode.querySelector('.note__title').textContent);
        $('.confirm').modal('show');
    }

    pickFavorite(target) {
        return new Promise((resolve) => {
            let noteTitle = target.parentNode.querySelector('.note__title').textContent;
            this.setState({
                ...this.state,
                favoriteList: this.state.favoriteList.concat(this.state.noteList.find(note => note.id === target.parentNode.getAttribute('data-id'))),
                noteList: this.state.noteList.filter(note => note.id !== target.parentNode.getAttribute('data-id'))
            })
            resolve(noteTitle);
        }).then((noteTitle) => this.showNotification(noteTitle, 'ADDED_TO_FAVORITE'))
    }

    unpickFavorite(target) {
        return new Promise((resolve) => {
            let noteTitle = target.parentNode.querySelector('.note__title').textContent;
            this.setState({
                ...this.state,
                favoriteList: this.state.favoriteList.filter(note => note.id !== target.parentNode.getAttribute('data-id')),
                noteList: this.state.noteList.concat(this.state.favoriteList.filter(note => note.id === target.parentNode.getAttribute('data-id')))
            })
            resolve(noteTitle);
        }).then((noteTitle) => this.showNotification(noteTitle, 'REMOVED_FROM_FAVORITE'))
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
        }).then((title) => this.showNotification(title, 'REMOVED'))
    }

    showNotification(title, type) {
        let alert = document.createElement('div');
        let alertText = '';
        alert.classList.add('alert', 'alert-info');
        switch (type) {
            case 'REMOVED': 
                alertText = 'was removed!';
                break;
            case 'ADDED_TO_FAVORITE':
                alertText = 'was added to favorites!';
                break;
            case 'REMOVED_FROM_FAVORITE':
                alertText = 'was removed from favorites!';
                break;
            default: break;
        }
        alert.textContent = `"${title}" ${alertText}`;
        document.body.appendChild(alert) 
        setTimeout(() => {
            document.body.removeChild(alert) 
        }, 3000)
    }
    
    fillContent(target) {
        let noteContent = this.state.noteList.find(note => note.id === target.getAttribute('data-id'));
        if (!noteContent) {
            noteContent = this.state.favoriteList.find(note => note.id === target.getAttribute('data-id'));
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
        $('.content').modal('show');
    }
}

export default Notes;