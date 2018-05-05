import React, {Component} from 'react';
import PropTypes from "prop-types";
import NoContent from "./NoContent";
import ListPosts from "./ListPosts";
import SavedPosts from "./SavedPosts";
import NoSave from "./NoSave";

class ProfileMain extends Component {
    render() {
        const {arrContents} = this.props;
        const {arrSaves} = this.props;
        const {goToSaved} = this.props;

        if (!goToSaved) {
            if (!arrContents.length) {
                return <NoContent/>;
            }

            return <ListPosts arrContents={this.props.arrContents}/>;
        }

        if (arrSaves.length === 0) {
            return <NoSave/>;
        }

        return <SavedPosts arrSaves={this.props.arrSaves}/>;
    }
}

ProfileMain.propTypes = {
    goToSaved: PropTypes.bool,
};

export default ProfileMain;