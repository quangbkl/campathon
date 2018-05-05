import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

class HeaderPostDetail extends Component {
    render() {
        const follow = (this.props.follow) ?
            <div className="following">
                <a href="/" onClick={this.props.toggleFollow}>Following</a>
            </div>
            :
            <div className="follow">
                <a href="/" onClick={this.props.toggleFollow}>Follow</a>
            </div>;

        return (
            <header>
                <div className="profile-img">
                    <Link to="/profile"><img
                        src="https://instagram.fhan2-1.fna.fbcdn.net/vp/4ed5634701aa7964a2710d69d8451c9c/5B5302B8/t51.2885-19/s150x150/24254205_911344325707048_4014047830359408640_n.jpg"
                        alt="unable to load"/></Link>
                </div>
                <div className="profile">
                    <Link to="/profile" className="user-name">OppaGou</Link>
                </div>
                <div className="dot">
                    <span>•</span>
                </div>
                {follow}
            </header>
        );
    }
}

HeaderPostDetail.propsTypes = {
    follow: PropTypes.bool.isRequired,
    toggleFollow: PropTypes.func.isRequired,
};

export default HeaderPostDetail;