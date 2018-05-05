import React, {Component} from "react";
import {Link} from "react-router-dom";

class PageNotFound extends Component {
    render() {

        return (
            <div className="PageNotFound text-center">
                <h1>Page not found</h1>

                <div className="Help">
                    Oops! Looks like this page doesn't exits.<br/>
                    You could return <Link to="/">to the homepage</Link> or or feel free to report this issue.
                </div>
            </div>
        );
    }
}

export default PageNotFound;