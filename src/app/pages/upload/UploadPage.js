import React, {Component} from "react";
import PropTypes from "prop-types";
import "./UploadPage.css"

class UploadPage extends Component {
    state = {
        file: ''
    }

    handleOnChangeFile(e) {
        this.setState({file: e.target.value});
        // console.log("On Change File");
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="UploadPage">
                <div className="Main">
                    <form className="FUpload">
                        <span>Tên tài liệu</span>
                        <input type="text" name="name" className="title" placeholder="Nhập tên tài liệu"/>

                        <span>Mô tả</span>
                        <textarea className="message" placeholder="Nhập mô tả"></textarea>

                        <span>Tài liệu</span>
                        <input className="File" type="file" onChange={this.handleOnChangeFile}/>

                        <button onClick={this.handleSubmit.bind(this)}
                        >Đăng
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

UploadPage.propTypes = {
    history: PropTypes.object,
};

export default UploadPage;