import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Navbar.css"
import {addAuthListener, isAuthenticated, removeAuthListener, setAuthState} from "../../../services/AuthServices";

class Navbar extends Component {

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

        return(
            <div className="Navbar">
                <img className="Logo" src="./img/logo-u.png" />

                <ul>
                    <li>
                        <Link className="active" to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/upload">Upload</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li className="RightButton">
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

Navbar.propTypes = {
    auth: PropTypes.bool,
    onAuth: PropTypes.func.isRequired
};
export default Navbar;