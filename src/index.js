import './index.css';
import ReactDOM from "react-dom";
import React from "react";
import store from "./redux/redux-store";
import App from './App';
import reportWebVitals from "./reportWebVitals";


 let renderEntireTree = ()=>{
     ReactDOM.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)}
                 appstate={store.getState()}
                 store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
     window.store = store.getState();
}
renderEntireTree(store.getState());

store.subscribe(renderEntireTree)
 reportWebVitals();
