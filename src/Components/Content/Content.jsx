import React, {Component} from 'react';
import classes from './Content.module.css'
import DialogsConteiner from "../Dialogs/DialogsConteiner";
import Profile from "../Profile/Profile";
import { Route} from "react-router-dom";
import NewsContainer from "../News/NewsConteiner";

export default class Content extends Component {

    render() {
        // let dialogList =this.props.contentObj;

        return (
                <div className={classes.wrapper}>
                    <Route path="/message" render={()=>
                        <DialogsConteiner
                        store={this.props.store}
                        />}/>
                    <Route path="/profile" render={()=><Profile dataProfile={this.props.dataProfile}
                    />}/>
                    <Route path="/news" render={()=>
                        <NewsContainer
                            store={this.props.store}
                            dispatch={this.props.dispatch}
                    />  }/>
                </div>
        )
    }
}