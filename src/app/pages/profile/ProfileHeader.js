import React, { Component } from 'react';
import StatusFollow from "./StatusFollow";
import UserInformation from "./UserInformation";
import UserDetails from "./UserDetails";
import UserAvatar from "./UserAvatar";
import { _getProfile } from "../../../services/ProfileSerivces";

class ProfileHeader extends Component {
    state = {
        _id: "",
        name: ""
    }

    componentDidMount() {
        _getProfile().then(object => {
            const { success } = object;
            if (success) {
                const { data } = object;
                this.setState({
                    _id: data._id,
                    _name: data._name
                })
            }
        })
    }

    render() {
        return (
            <div className="ProfileHeader">
                <UserAvatar />
                <div className="Info">
                    <UserInformation _id={this.state._id} />
                    <StatusFollow />
                    <UserDetails _name={this.state._name} />
                </div>
            </div>
        );
    }
}

export default ProfileHeader;