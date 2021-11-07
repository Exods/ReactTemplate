import React, {Component} from 'react';
import classes from './Header.module.css'
import logo from './app-store.png';



export default class Header extends Component {
    render() {
        return (
            <>
                <div className={classes.header}>
                    <img src={logo} alt="logo"/>
                </div>
            </>
        )
    }
}