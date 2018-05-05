import React, {Component} from "react";
import {Link} from "react-router-dom";
import {addAuthListener, isAuthenticated, removeAuthListener, setAuthState} from "../../../services/AuthServices";
import "./Header.css";

class Header extends Component {
    state = {
        auth: isAuthenticated(),
    };

    componentDidMount() {
        addAuthListener(this._handleOnAuthChange);
    }

    componentWillUnmount() {
        removeAuthListener(this._handleOnAuthChange);
    }

    _handleOnAuthChange = () => {
        this.setState({
            auth: isAuthenticated(),
        })
    };

    render() {
        const {auth} = this.state;

        return (
            <div className="Header">
                <nav className="navbar navbar-expand-sm navbar-light bg-light">
                    <div className="container d-flex justify-content-between align-items-center">
                        <Link className="Logo" to="/">
                            <span>Crush Hunt</span>
                        </Link>

                        <form className="SearchForm">
                            <span className="icon"/>
                            <input type="text" placeholder="Search"/>
                        </form>

                        <div className="RightActions">
                            <ul className="navbar-nav ml-auto">
                                {
                                    !auth &&
                                    <li className="nav-item">
                                        <Link to="/login" className="btn btn-outline my-2 my-sm-0">Login</Link>
                                    </li>
                                }
                                {
                                    auth &&
                                    <li onClick={this._handleClickLogout} className="nav-item">
                                        <a className="btn btn-outline-success my-2 my-sm-0">Logout</a>
                                    </li>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

    _handleClickLogout = () => {
        setAuthState({
            accessToken: null
        });
    }
}

export default Header;