import React, {Component} from 'react';
import classes from './Menu.module.css'

export default class Menu extends Component {
    render() {
        return (
            <>
                <div className={classes.menu}>
                    <ul>
                        <li><a href="">Profile</a></li>
                        <li><a href="">Message</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Music</a></li>
                        <li><a href="">Settings</a></li>
                    </ul>
                </div>
            </>
        )
    }
}