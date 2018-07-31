import React, { Component } from 'react';
import User from '../user/user';
import Nav from '../nav/nav';

class Control extends Component {
    render() {
        return (
            <div className="control">
                <User/>
                <Nav/>
            </div>
        );
    }
}

export default Control;