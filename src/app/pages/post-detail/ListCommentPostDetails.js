import React, {Component} from "react"
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

class ListCommentPostDetails extends Component {
    render() {
        return (
            <li className="item">
                <Link to="/profile" className="user-name">OppaGou</Link>
                <span className="text">
                    <span>{this.props.comment}</span>
                </span>
            </li>
        );
    }
}

ListCommentPostDetails.propsTypes = {
    comment: PropTypes.string,
};

export default ListCommentPostDetails;