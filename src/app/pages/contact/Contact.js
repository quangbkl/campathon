import React, {Component} from 'react';
import "./Contact.css";

class Contact extends Component {
    state = {
        success: false,
        email: '',
        name: '',
        type: '',
        content: ''
    };

    _handleChangeInput(field, e) {
        const {value} = e.target;
        this.setState({
            [field]: value
        });
    }

    render(){
        const {}=this.state;
        return(
            <div className="Contact">
                <div className="Title">
                    <span className="ContactTitle">Liên hệ</span>
                </div>
                <div className="Form">
                    <form className="FormContact">
                        <input className="Name" type="text" name="username" placeholder="Tên"
                               onChange={this._handleChangeInput.bind(this, "name")}/>
                        <input className="Email" type="text" name="email" placeholder="Email"
                                   onChange={this._handleChangeInput.bind(this, "email")}/>
                        <label className="Type">Loại</label>
                        <select className="Select">
                            <option value="0">Liên hệ</option>
                            <option value="1">Góp ý</option>
                            <option value="2">Câu hỏi</option>
                            <option value="3">Lỗi nội dung</option>
                            <option value="4">Lỗi hệ thống</option>
                            <option value="5">Khác</option>
                        </select>
                        <input className="Content" type="text" name="content" placeholder="Nội dung"
                                   onChange={this._handleChangeInput.bind(this, "content")}/>
                        <button className="Button" type="text" value="Send">Gửi</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;