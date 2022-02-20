import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import store from "./redux/state";
import App from './App';


 let renderEntireTree = ()=>{
    ReactDOM.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)}
                 appstate={store.getState()}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
    console.log(store.getState());
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree)
// reportWebVitals();
