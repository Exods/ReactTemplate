import React, {Component} from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {


    return (
        <li className={classes.NameItem}>
            <NavLink to={'/message/' + props.id}>{props.name}</NavLink>
        </li>
    )
}
const Message = (props) => {
    let messageItems = [
        {mess:"Hi"},
        {mess:"Yo"},
        {mess:"Les"},
    ]
    return (
        <>
            {messageItems.map(function (el) {
             return  <li className={classes.item}>{el.mess}</li>
            })}
        </>
    );
}
const DialogElements = (props) => {
    let s =[
        {id:1,name:'Sasha'},
        {id:2,name:'Piter'},
        {id:3,name:'Sveta'},
        {id:4,name:'Sam'},
    ]
    let items =
        s.map(function (el) {
          return  <Dialog name={el.name} id={el.id}/>
        })

    return (
        <>
            {items}
        </>

    );
}

export default class Dialogs extends Component {
    render() {
        return (
            <>
                <div className={classes.wrap}>
                    <div className={classes.dialogs}>
                        <ul>
                            <h3>Dialogs</h3>
                            <DialogElements/>
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