import React, {Component} from 'react';
import FavoritePool from '../../components/favoritePool/favoritePool';
import NotesPool from '../../components/notesPool/notesPool';
import NoteList from '../../notes.json';

class Notes extends Component {
    state = {
        noteList : NoteList
    }
    render() {
        return (
            <div className="notes">
                <FavoritePool/>
                <NotesPool noteList={this.state.noteList} removing={(event) => this.removeNote(event.target)}/>
            </div>
        );
    }
    removeNote(target) {
        return new Promise((resolve) => {
            if (target.classList.contains('js-remove-note')) {
                let noteTitle = target.parentNode.querySelector('.note__title').textContent;
                this.setState({
                    noteList: this.state.noteList.filter(note => note.id !== target.parentNode.getAttribute('data-id'))
                })
                resolve(noteTitle)
            }
        }).then((noteTitle) => this.showNotification(noteTitle))
    }
    showNotification(noteTitle) {
        let alert = document.createElement('div');
        alert.classList.add('alert', 'alert-info');
        alert.textContent = `"${noteTitle}" была удалена!`;
        document.body.appendChild(alert) 
        setTimeout(() => {
            document.body.removeChild(alert) 
        }, 2000)
    }
}

export default Notes;