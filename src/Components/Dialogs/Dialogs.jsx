import React, {Component} from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogElements = (props) => {

    let items =
        props.posts.map(function (el,key) {
            return  <Dialog key={key}  name={el.name} id={el.id}/>
        })

    return (
        <>
            {items}
        </>

    );
}
const Dialog = (props) => {

    return (
        <li className={classes.NameItem}>
            <NavLink name={props.id} to={'/message/' + props.id}>{props.name}</NavLink>
        </li>
    )
}
const Message = (props) => {
    let messagse= [
        "Hisdf",
        "ddYo",
        "Ledsfsdds",
    ]
    return (
        <>
            {messagse.map(function (message,key) {
                    return  <li key={key} className={classes.item}>{message}</li>
            })}
        </>
    );
}


export default class Dialogs extends Component {

    render() {
        let dialogList = this.props.arrDialogs;

        return (
            <>
                <div className={classes.wrap}>
                    <div className={classes.dialogs}>
                        <ul>
                            <h3>Dialogs</h3>
                            <DialogElements posts={dialogList}/>
                        </ul>
                    </div>
                    <div className={classes.messageItems}>
                        <ul>
                            <h3>Message</h3>
                            <Message />
                        </ul>
                        <div className={classes.Input}>
                            <input type="text"/>
                            <input type="submit"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}