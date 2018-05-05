import React, {Component} from 'react';
import "./Contact.css";

class Contact extends Component {
    render(){
        return(
            <div className="Contact">
                <div className="Title">
                    <span className="icon"></span>
                    <p>Contact me</p>
                </div>
                <div className="Form">
                    <form className="FormContact">
                        <input className="name" type="text" name="username" placeholder="Tên"/>
                        <input className="email" type="text" name="email" placeholder="Email" />
                        <input className="type" type="text" name="type" placeholder="Loại"/>
                        <select className="type">
                            <option value="volvo">Liên hệ</option>
                            <option value="saab">Góp ý</option>
                            <option value="opel">Câu hỏi</option>
                            <option value="audi">Lỗi nội dung</option>
                            <option value="audi">Lỗi hệ thống</option>
                            <option value="audi">Khác</option>
                        </select>
                        <input className="content" type="text" name="content" placeholder="Nội dung"/>
                        <button className="btn" type="text" value="Send">Gửi</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;