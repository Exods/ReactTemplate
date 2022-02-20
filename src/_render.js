import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import {addMessage, changeMessage} from "./redux/store";


export let renderEntireTree = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App changeMessage={changeMessage} addMessage={addMessage} appstate={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}