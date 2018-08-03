import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Note from '../note/note'

class FavoritePool extends Component {
    render() {
        return (
            <div className="notes__favorite-pool favorite-pool">
                <h2 className="favorite-pool__heading">Favorite Notes</h2>
                <div className="favorite-pool__grid">
                    {this.props.favoriteList.length === 0 ? 'There is nothing here yet :(' : false}
                    {this.props.favoriteList.map((note) => {
                        return <Note key={note.id} class="note note_favorite" noteData={note} removing={this.props.removing} showContent={this.props.showContent} toggleFavor={this.props.toggleFavor}/>
                    })}
                </div>
            </div>
        );
    }
}

Notification.propTypes = {
    removing:  PropTypes.func,
    showContent: PropTypes.func,
    toggleFavor: PropTypes.func
};

export default FavoritePool;