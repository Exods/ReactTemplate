import React, {Component} from 'react';
import classes from './Profile.module.css'


export default class Profile extends Component {
    render() {
        return (
            <>
                <div className={classes.wrap}>
                    <div className={classes.wrapContent}>
                        <ul>
                            <h3>Profile</h3>
                            <li>Name</li>
                            <li>Last Name</li>
                            <li>Age</li>
                        </ul>
                        <ul>
                            <li>Piter</li>
                            <li>Piter</li>
                            <li>18</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}