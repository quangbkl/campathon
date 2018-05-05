import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import UploadPage from "./pages/upload/UploadPage";
import Header from "./shared-components/header/Header";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import Footer from "./shared-components/footer/Footer";
import FacebookGoogle from "./pages/login/FacebookGoogle";

class App extends Component {
    render() {
        return (
            <div id="app">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/upload" component={UploadPage}/>
                    <Route path="/login" component={LoginPage}/>
                    <Route path="/FacebookGoogle" component={FacebookGoogle}/>
                    <Route path="/register" component={RegisterPage}/>
                    <Route component={PageNotFound}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
