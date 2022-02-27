import React, {Component} from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogElements = (props) => {

    let items =
        props.posts.map(function (el, key) {
            return <Dialog key={key} name={el.name} id={el.id}/>
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
    return (
        <>
            {
                props.message.map(function (message, key) {
                    return <li key={key} className={classes.item}>{message}</li>
                })}
        </>
    );
}


export default class Dialogs extends Component {
    render() {

        let refl = React.createRef();
        let addMessage = () => {

            if (refl.current.value.length < 4) {
                return false;
            }
            this.props.addMessage(refl);


        }
        let changeInput = () => {
            let text = refl.current.value;
            this.props.changeInput(text);

        }
        let dialogList = this.props.message.dialogList;
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
                            <Message message={this.props.message.message}/>
                        </ul>
                        <div className={classes.Input}>
                            <input onChange={changeInput} ref={refl} type="text" value={this.props.message.messageClean}/>
                            <input onClick={addMessage} type="submit"/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}