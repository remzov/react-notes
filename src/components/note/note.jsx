import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
    render() {
        return (
            <div className="note" data-id={this.props.id}>
                <h3 className="note__title">{this.props.title}</h3>
                <time className="note__date">{this.props.date}</time>
                <button className="note__remove close js-remove-note" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
}

Note.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string

};

export default Note;