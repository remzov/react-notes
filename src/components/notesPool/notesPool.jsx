import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './notes-pool.scss';
import Note from '../note/note'

class NotesPool extends Component {
    render() {
        return (
            <div className="notes-pool" onClick={this.props.removing}>
                {this.props.noteList.map((note) => {
                    return <Note key={note.id} id={note.id} title={note.title} date={note.date} />
                })}
            </div>
        );
    }
}

NotesPool.propTypes = {
    removing: PropTypes.func,
    noteList:  PropTypes.array
};

export default NotesPool;