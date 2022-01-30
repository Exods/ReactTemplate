import React, {Component} from 'react';
import classes from './Content.module.css'
import Dialogs from "../Dialogs/Dialogs";
import Profile from "../Profile/Profile";
import { Route} from "react-router-dom";
import News from "../News/News";
import {changeMessage} from "../../redux/state";

export default class Content extends Component {

    render() {
        let dialogList =this.props.contentObj;
        return (
                <div className={classes.wrapper}>
                    <Route path="/message" render={()=><Dialogs changeMessage={this.props.changeMessage} messageClean={this.props.messageClean} addMessage={this.props.addMessage} message={this.props.message}  arrDialogs = {dialogList}/>}/>
                    <Route path="/profile" render={()=><Profile dataProfile={this.props.dataProfile}/>}/>
                    <Route path="/news" rrender={()=><News/>}/>
                </div>
        )
    }
}