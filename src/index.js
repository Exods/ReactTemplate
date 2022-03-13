import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import store from "./redux/redux-store";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";


 let renderEntireTree = ()=>{
     ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
            <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
     window.store = store.getState();
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree)
 reportWebVitals();
