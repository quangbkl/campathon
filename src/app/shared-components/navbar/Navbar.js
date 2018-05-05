import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return(
            <div className="Navbar">
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