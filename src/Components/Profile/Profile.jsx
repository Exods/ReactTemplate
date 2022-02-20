import React, {Component} from 'react';
import classes from './Profile.module.css'


export default class Profile extends Component {

    render() {
        let profile = {
            dataProfile: {
                name: 'Piter',
                lastName: 'Last name',
                age: '18'
            }

        }
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
                            <li >{profile.dataProfile.name}</li>
                            <li >{profile.dataProfile.lastName}</li>
                            <li >{profile.dataProfile.age}</li>
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}