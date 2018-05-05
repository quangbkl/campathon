import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./PageNotFound.css";

class PageNotFound extends Component {
    render() {

        return (
            <div className="page-not-found">
                <h1 className="text-404">404</h1>

                <div className="help">
                    Oops! Có vẻ như trang web này không tồn tại.<br/>
                    Bạn có thể về  <Link to="/">trang chủ</Link> hoặc báo lỗi cho chúng tôi.
                </div>
            </div>
        );
    }
}

export default PageNotFound;