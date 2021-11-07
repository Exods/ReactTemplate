import React, {Component} from 'react';
import classes from './Content.module.css'

export default class Content extends Component {
    render() {
        return (
            <>
                <div className={classes.content}>
                    <img src="https://klike.net/uploads/posts/2019-05/1556707966_3.jpg" alt=""/>
                </div>
            </>
        )
    }
}