import React, {Component} from 'react';
import classes from './Content.module.css'
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";
import { Route} from "react-router-dom";
import News from "../News/News";

export default class Content extends Component {
    render() {
        return (
                <div className={classes.wrapper}>
                        {/*<img src="https://klike.net/uploads/posts/2019-05/1556707966_3.jpg" alt=""/>*/}
                        <Route path="/message" component={Dialogs}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/news" component={News}/>
                </div>
        )
    }
}