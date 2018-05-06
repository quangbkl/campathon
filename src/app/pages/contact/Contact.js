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

    handleSubmit(e) {
        e.preventDefault();
    }

    render(){
        const {email,name,content}=this.state;
        return(
            <div className="Contact">
                <div className="Title">
                    <span className="ContactTitle">Liên hệ</span>
                </div>
                <div className="Form">
                    <form className="FormContact">
                        <input className="Name" type="text" name="username" placeholder="Tên" value={name}
                               onChange={this._handleChangeInput.bind(this, "name")}/>
                        <input className="Email" type="text" name="email" placeholder="Email" value={email}
                                   onChange={this._handleChangeInput.bind(this, "email")}/>
                        <select className="Select" >
                            <option selected disabled>Chọn một liên hệ</option>
                            <option value="0">Liên hệ</option>
                            <option value="1">Góp ý</option>
                            <option value="2">Câu hỏi</option>
                            <option value="3">Lỗi nội dung</option>
                            <option value="4">Lỗi hệ thống</option>
                            <option value="5">Khác</option>
                        </select>
                        <textarea className="Content" placeholder="Nhập nội dung" value={content}
                                  onChange={this._handleChangeInput.bind(this, "content")}/>
                        <button className="Button" type="text" value="Send"
                                onClick={this.handleSubmit.bind(this)}>Gửi</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;