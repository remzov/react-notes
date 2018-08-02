import React, { Component } from 'react';
// import './nav.scss';

class Nav extends Component {
    render() {
        return (
            <ul className="nav">
                <li>
                    <a className="active" href="">Notes</a>
                </li>
                <li>
                    <a href="">Lists</a>
                </li>
                <li>
                    <a href="">Plans</a>
                </li>
            </ul>
        );
    }
}

export default Nav;