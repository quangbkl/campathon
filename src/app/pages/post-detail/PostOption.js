import React, {Component} from "react";
import PropTypes from "prop-types";

class PostOption extends Component {
    render() {
        return (
            <div className="three_dots">
                <button className="dis_play" id={this.props.existed ? "existed" : "exist"}>
                    <span onClick={this.props.toggleExist}/>
                </button>
            </div>
        );
    }
}

PostOption.propTypes = {
    existed: PropTypes.bool,
    toggleExist: PropTypes.func.isRequired,
};

export default PostOption;