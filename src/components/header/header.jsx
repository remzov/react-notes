import React, { Component } from 'react';
// import './header.scss';
import logo from './logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img className="header__logo" src={logo} alt=""/>
                <h1 className="header__title">{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;