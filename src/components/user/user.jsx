import React, { Component } from 'react';
// import './user.scss';
import userpic from './user.svg';

class User extends Component {
    render() {
        return (
            <a className="user control__user" href="">
                <img className="user__avatar w-50" src={userpic} alt=""/>
                <span className="user__name">
                    John Doe
                </span>
           </a>
        );
    }
}

export default User;