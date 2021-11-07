import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menu/Menu";
import Content from "./Components/Content/Content";
import './App.css'

function App() {
    return (
        <div className="wrap">
            <Header/>
            <div className="content_wrap">
                <Menu/>
                <Content/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
