import './index.css';
import App from './App';
import state, {subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {addMessage, changeMessage} from "./redux/state";


 let renderEntireTree = (state)=>{
    ReactDOM.render(
        <React.StrictMode>
            <App changeMessage={changeMessage} addMessage={addMessage} appstate={state}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
renderEntireTree(state);

subscribe(renderEntireTree)
// reportWebVitals();
