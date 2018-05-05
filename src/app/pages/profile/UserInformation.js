import React, {Component} from 'react';



class UserInformation extends Component {
    render() {
        return (
            <div className="UserInformation">
                <div className="NickName">
                    <h1>{this.props._id}</h1>
                </div>
                <div className="EditProfile">
                    <button>Chỉnh sửa trang cá nhân</button>
                </div>
                <div className="IconEdit">
                    <img src="https://cdn4.iconfinder.com/data/icons/app-custom-ui-1/48/Settings-128.png" alt="Edit"/>
                </div>
            </div>
        );
    }
}

export default UserInformation;