import React, {Component} from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import "./Navbar.css"

class Navbar extends Component {

    render() {

        return(
            <div className="Navbar">
                <img className="Logo" src="./img/logo-u.png" />

                <ul>
                    <li>
                        <Link className="active" to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/news">Bản tin</Link>
                        <span className="selected">  </span>
                    </li>
                    <li>
                        <Link to="/upload">Tài liệu</Link>
                    </li>
                    <li>
                        <Link to="/contact">Liên hệ</Link>
                    </li>

                    <li className="RightButton">
                        <Link to="/login">Đăng nhập</Link>
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