import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {
    render() {
        return (
            <div className="notification alert alert-info" hidden={!this.props.visibility}>
                {this.props.notification}
            </div>
        );
    }
}

Notification.propTypes = {
    visibility:  PropTypes.bool,
    notification:  PropTypes.string
};

export default Notification;