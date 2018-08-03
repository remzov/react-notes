import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Note extends Component {
    render() {
        return (
            <div className="confirm modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="confirm__body modal-content">
                        <button type="button" className="confirm__close close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="confirm__text">Do you really want to remove that note?</div>
                        <div className="confirm__control">
                            <button type="button" className="confirm__accept-btn btn btn-primary js-confirm-btn" onClick={this.props.confirm}>Yes, i am sure</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">No, wait</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Note.propTypes = {
    confirm: PropTypes.func
};

export default Note;