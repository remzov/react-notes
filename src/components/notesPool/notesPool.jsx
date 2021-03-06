import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from '../note/note'

class NotesPool extends Component {
    render() {
        return (
            <div className="notes-pool" onClick={this.props.clickHandler}>
                <h2 className="notes-pool__title">All Notes</h2>
                <div className="notes-pool__grid">
                    {this.props.noteList.map((note) => {
                        return <Note key={note.id} class="note" noteData={note} removing={this.props.removing} showContent={this.props.showContent} toggleFavor={this.props.toggleFavor}/>
                    })}
                </div>
            </div>
        );
    }
}

NotesPool.propTypes = {
    removing: PropTypes.func,
    noteList:  PropTypes.array
};

export default NotesPool;