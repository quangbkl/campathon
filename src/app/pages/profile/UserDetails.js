import React, {Component} from 'react';

class UserDetails extends Component {
    render() {
        return (
            <div className="UserDetails">
                <div className="Name">
                    <span><b>{this.props._name}</b></span>
                </div>
            </div>
        );
    }
}

export default UserDetails;