import React, {Component} from "react";
import PropTypes from "prop-types";

class LikePostDetails extends Component {
    render() {
        return (
            <section className="like_number">
                <div>
                    <a>
                        <span>{this.props.numberOfLike} </span>
                        {this.props.numberOfLike === 1 || this.props.numberOfLike === 0 ? "like" : "likes"}
                    </a>
                </div>
            </section>
        );
    }
}

LikePostDetails.propTypes = {
    numberOfLike: PropTypes.number,
};

export default LikePostDetails;