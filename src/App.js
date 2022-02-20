import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Content from "./Components/Content/Content";
import './App.css'
import {BrowserRouter} from "react-router-dom";
import Menu from "./Components/Menu/Menu";
// import {changeMessage} from "./redux/state";

function App(props) {

    return (

    <BrowserRouter>
            <div className="wrap">
                <Header/>
                <div className="content_wrap">
                    <Menu/>
                    <Content dispatch={props.dispatch}
                             contentObj={props.appstate.dialogList}
                             dataProfile={props.appstate.profile.dataProfile}
                             message={props.appstate.message}
                             messageClean = {props.appstate.message.messageClean}
                             news = {props.appstate.news.newsList}
                             newsInputValue = {props.appstate.news.newsInputValue}
                    />
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    );
}

export default App;
