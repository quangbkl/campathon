import React, {Component} from "react";
import "./Header.css";
import Navbar from "../navbar/Navbar";
class Header extends Component {

    render() {
        return (
            <div className="Header">
                <Navbar/>
            </div>
        );
    }

}

export default Header;