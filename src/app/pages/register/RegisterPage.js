import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import "./RegisterPage.css";

class RegisterPage extends Component {
    state = {
        success: false,
        name: '',
        userName: '',
        password: '',
        confirmPassword: '',
        errorMessage: ''
    };

    _handleChangeInput(field, e) {
        const {value} = e.target;
        this.setState({
            [field]: value
        });
    }

    _handleOnSubmit(e) {
        e.preventDefault();
        const {userName, name, password, confirmPassword} = this.state;


        this.register().then(response=>{
            console.log(response);
        })

    };

    register() {
        const url = 'https://hien-mau-team.herokuapp.com/account/create.php';
        const request = new Request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify({
                username: "12345",
                name: "0989890",
                password: "098765431"
            })

        });

        return fetch(request).then(response => {
            return response.json();
        });
    }

    render() {
        if (this.state.success) {
            return <Redirect to="/login"/>
        }

        return (
            <div className="RegisterPage">
                <div className="limiter">
                    <div className="container-register">
                        <div className="wrap-register">
                            <form className="register-form">
                                <span className="register-form-title">Đăng ký</span>
                                <div className="wrap-register-input " data-validate="Type user name">
                                    <input id="first-name" className="input" type="text" name="name"
                                           placeholder="Tên người dùng"
                                           onChange={this._handleChangeInput.bind(this, "name")}/>
                                    <span className="focus-register-input"></span>
                                </div>
                                <div className="wrap-register-input " data-validate="Type user name">
                                    <input id="first-name" className="input" type="text" name="username"
                                           placeholder="Tên đăng nhập"
                                           onChange={this._handleChangeInput.bind(this, "userName")}/>
                                    <span className="focus-register-input"></span>
                                </div>

                                <div className="wrap-register-input" data-validate="Type password">
                                    <input className="input" type="password" placeholder="Mật khẩu"
                                           onChange={this._handleChangeInput.bind(this, "password")}/>
                                    <span className="focus-register-input"></span>
                                </div>

                                <div className="wrap-register-input" data-validate="Type password">
                                    <input className="input" type="password" placeholder="Xác nhận mật khẩu"
                                           onChange={this._handleChangeInput.bind(this, "confirmPassword")}/>
                                    <span className="focus-register-input"></span>
                                </div>

                                <div className="container-register-form-btn">
                                    <button className="login100-form-btn" onClick={this._handleOnSubmit.bind(this)}>
                                        Đăng ký
                                    </button>
                                </div>

                                <div className="sign-in-text">
                                    Đã có tài khoản? <Link to="/login"> Đăng nhập</Link>
                                </div>
                            </form>

                            <div className="register-more"><img className="background"
                                                                src="https://nces.ed.gov/programs/coe/images/nav/coe_hp_new.png"
                                                                alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

RegisterPage.propTypes = {
    history: PropTypes.object
};

export default RegisterPage;