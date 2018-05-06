import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import "./RegisterPage.css";
import {_register} from "../../../services/UserServices";
import {setToken} from "../../../services/StorageServices";


class RegisterPage extends Component {
    state = {
        success: false,
        email: '',
        username: '',
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
        const {email, password} = this.state;
        _register({email, password})
            .then(response => {
                const {success, data} = response;
                if (success) {
                    const {accessToken} = data;
                    this.props.onAuth(true);
                    setToken(accessToken);
                }
                else {
                    alert("Tài khoản hoặc mật khẩu sai !");
                }
            });

    }


    render() {
        if (this.state.success) {
            return <Redirect to="/login"/>
        }

        return (
            <div className="LoginPage">
                <div className="limiter">
                    <div className="container-register">
                        <div className="wrap-register">
                            <form className="register-form">
                                <span className="register-form-title">Đăng ký</span>
                                <div className="wrap-register-input " data-validate="Type user name">
                                    <input id="first-name" className="input" type="text" name="username"
                                           placeholder="Tên người dùng"
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
                                    <button className="login100-form-btn">
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