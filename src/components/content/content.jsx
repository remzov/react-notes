import React, { Component } from 'react';
class Content extends Component {
    render() {
        return (
            <div className="content modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="content__body modal-content">
                        <button type="button" className="confirm__close close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <h2 className="content__title">{this.props.content.title}</h2>
                        <time className="content__time">{this.props.content.date}</time>
                        <div className="content__text">{this.props.content.text}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;