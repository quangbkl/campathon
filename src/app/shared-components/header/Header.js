import React, {Component} from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
import HomePage from "../../pages/home/HomePage";
import News from "../../pages/news/News";
import UploadPage from "../../pages/upload/UploadPage";
import About from "../../pages/about/About";
import {Route, Switch} from "react-router-dom";
import "./Header.css"

class Header extends Component {

    render() {


        return (
            <div className="Header">
                <div className="Logo">
                    <img src="./logo-u.png" />
                </div>

                <Navbar/>

                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/news" component={News} />
                    <Route path="/upload" component={UploadPage} />
                    <Route path="/" component={About} />
                    <Route exact path="/" component={HomePage} />

                </Switch>
            </div>
        );
    }

}

export default Header;