import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ProfilePage.css"
import ProfileHeader from "./ProfileHeader";
import NavSavePost from "./NavSavePost";
import ProfileMain from "./ProfileMain";
import Footer from "../../shared-components/footer/Footer";
import { _getMyPost, _getMyFavorite } from "../../../services/ProfileSerivces";

class ProfilePage extends Component {
    state = {
        goToSaved: false,
        arrContents: [],
        arrSaves: []
    };

    componentDidMount() {
        _getMyPost().then(object => {
            const { success } = object;
            if (success) {
                const { data } = object;
                let listUrl = [];
                for(let i =0; i < data.length; i++){
                    listUrl.push(data[i].url);
                }
                this.setState({arrContents: listUrl});
            }
        });
        _getMyFavorite().then(object => {
            const { success } = object;
            if (success) {
                const { data } = object;
                let listUrl = [];
                for(let i =0; i < data.length; i++){
                    listUrl.push(data[i].url);
                }
                this.setState({arrSaves: listUrl});
            }
        });
    }

    render() {
        const { goToSaved, arrContents, arrSaves } = this.state;

        return (
            <div className="ProfilePage">
                <div className="Wrapper">
                    <ProfileHeader />
                    <NavSavePost goToSaved={goToSaved} changeGoToSaved={this._changeGoToSaved} />
                    <ProfileMain goToSaved={goToSaved} arrContents={arrContents} arrSaves={arrSaves} />
                    <Footer />
                </div>
            </div>
        );
    }

    _changeGoToSaved = (event, goToSavedTemp) => {
        this.setState({ goToSaved: goToSavedTemp })
    };
}

ProfilePage.propTypes = {
    history: PropTypes.object,
};

export default ProfilePage;
