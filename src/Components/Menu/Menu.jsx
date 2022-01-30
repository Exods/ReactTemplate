import React, {Component} from 'react';
import classes from './Menu.module.css'
import {NavLink} from "react-router-dom";

export default class Menu extends Component {
    render() {
        return (<>
                <div className={classes.menu}>
                    <ul>
                        <li className={classes.menuItem}>
                            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                        </li>
                        <li className={classes.menuItem}>
                            <NavLink to="/message" activeClassName={classes.active}>Message</NavLink>
                        </li>
                        <li className={classes.menuItem}>
                            <NavLink to="/news" activeClassName={classes.active}>News</NavLink></li>
                    </ul>
                </div>
            </>)
    }
}