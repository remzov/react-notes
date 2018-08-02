import React, { Component } from 'react';
import Note from '../note/note'

class FavoritePool extends Component {
    render() {
        return (
            <div className="notes__favorite-pool favorite-pool" hidden={this.props.favoriteList.length === 0}>
                <h2 className="favorite-pool__heading">Favorite Notes</h2>
                <div className="favorite-pool__grid">
                    {this.props.favoriteList.map((note) => {
                        return <Note key={note.id} class="note note_favorite" id={note.id} title={note.title} date={note.date} />
                    })}
                </div>
            </div>
        );
    }
}

export default FavoritePool;