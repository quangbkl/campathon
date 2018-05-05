import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./PageNotFound.css";

class PageNotFound extends Component {
    render() {

        return (
            <div className="page-not-found">
                <h1 className="text-404">404</h1>

                <div className="help">
                    Oops! Looks like this page doesn't exits.<br/>
                    You could return <Link to="/">to the homepage</Link> or or feel free to report this issue.
                </div>
            </div>
        );
    }
}

export default PageNotFound;