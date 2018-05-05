import React, {Component} from "react";
import PropTypes from "prop-types";
import {Link, Redirect} from "react-router-dom";
import "./RegisterPage.css";
import Footer from "../../shared-components/footer/Footer";
import {_register} from "../../../services/UserServices";


class RegisterPage extends Component {
    state = {
        success: false,
        email: '',
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

    _handleSubmit = (e) => {
        e.preventDefault();
        const {email, name, password} = this.state;
        if (this.checkForm()) {
            _register(email, name, password).then(response => {
                if (response.success) {
                    this.setState({
                        success: true
                    })
                }
                else {
                    this.setState({
                        errorMessage: response.message //Display error if server return success false
                    })
                }


            }).catch();
        }
    }

    checkForm() {
        const {email, name, password, confirmPassword} = this.state;
        let errorMessage = '';
        if (email === '') {
            errorMessage = 'Email must not be empty';
        } else if (name === '') {
            errorMessage = 'Name must not be empty';
        } else if (password === '') {
            errorMessage = 'Password must not be empty';
        } else if (password !== confirmPassword) {
            errorMessage = 'Password and Confirm password must match';
        }

        this.setState({
            errorMessage: errorMessage
        });

        return !errorMessage;
    }


    render() {
        if (this.state.success) {
            return <Redirect to="/login"/>
        }

        const errorMessage = this.state.errorMessage ? <p className="ErrorMessage">{this.state.errorMessage}</p> : '';

        return (
            <div className="LoginPage">
                <div className="limiter">
                    <div className="container-register">
                        <div className="wrap-register">
                            <form className="register-form">
                                <span className="register-form-title">	Register</span>
                                <div className="wrap-register-input " data-validate="Type user name">
                                    <input id="first-name" className="input" type="text" name="username"
                                           placeholder="User name"
                                           onChange={this._handleChangeInput.bind(this, "userName")}/>
                                    <span className="focus-register-input"></span>
                                </div>
                                <div className="wrap-register-input" data-validate="Type password">
                                    <input className="input" type="password" placeholder="Password"
                                           onChange={this._handleChangeInput.bind(this, "password")}/>
                                    <span className="focus-register-input"></span>
                                </div>

                                <div className="wrap-register-input" data-validate="Type password">
                                    <input className="input" type="password" placeholder="Confirm password"
                                           onChange={this._handleChangeInput.bind(this, "confirmPassword")}/>
                                    <span className="focus-register-input"></span>
                                </div>

                                <div className="container-register-form-btn">
                                    <button className="login100-form-btn">
                                        Sign up
                                    </button>
                                </div>

                                <div className="sign-in-text">
                                    Already have account? <Link to="/login"> Sign in</Link>
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