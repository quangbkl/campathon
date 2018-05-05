import React, {Component} from 'react';
import PropTypes from "prop-types";

class NavSavePost extends Component {
    render() {
        const styleBox = {
            borderTop: 'solid',
            borderTopColor: 'black',
            borderTopWidth: 1
        };

        const {goToSaved} = this.props;

        return (
            <div className="SaveAndPost">
                <div className="Post" style={!goToSaved ? styleBox : {}} onClick={this.changePost}>
                    <span>BÀI VIẾT</span>
                </div>
                <div className="Save" style={goToSaved ? styleBox : {}} onClick={this.changeSave}>
                    <span>ĐÃ LƯU</span>
                </div>
            </div>
        );
    }

    changePost = (e) => {
        this.props.changeGoToSaved(e, false);
    };

    changeSave = (e) => {
        this.props.changeGoToSaved(e, true);
    };
}

NavSavePost.propTypes = {
    goToSaved: PropTypes.bool.isRequired,
    changeGoToSaved: PropTypes.func.isRequired,
};

export default NavSavePost;