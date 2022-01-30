import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dataProfile ={
    name:'Piter',
    lastName: 'Last name',
    age:'18'
}

let dialogList =[
    {id:1,name:'Sasha',
        messages: [
             "Hi ok!",
             "YoHo",
             "Letes",
        ]
    },
    {id:2,name:'Piter',
        messages: [
            "Hisdf",
            "ddYo",
            "Ledsfsdds",
        ]
    },
    {id:3,name:'Sveta',
        messages: [
            "Hi",
            "Yo",
            "Les",
        ]
    },
    {id:5,name:'Sam5',
        messages: [
            "sdfsdgsHi",
            "Ydfgdo",
            "Ldfes",
        ]
    },
    {id:6,name:'Sam6',
        messages: [
            "Hsdfsdfi",
            "Yfsdfso",
            "Lfsdfses",
        ]
    },
    {id:7,name:'Sam7',
        messages: [
            "Hsdfi",
            "Yfdsffo",
            "Lsdfes",
        ]
    },
    {id:8,name:'Sam8',
        messages: [
            "Hdsafsdi",
            "sdfsYo",
            "Lfsdsdfes",
        ]
    },
]
ReactDOM.render(
  <React.StrictMode>
    <App contentObj={dialogList} dataProfile={dataProfile}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
