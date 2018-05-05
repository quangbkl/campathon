import React, {Component} from "react";
import PropTypes from "prop-types";
import {addAuthListener, isAuthenticated, removeAuthListener, setAuthState} from "../../../services/AuthServices";
import {Redirect} from "react-router-dom";
import "./LoginPage.css";
import Footer from "../../shared-components/footer/Footer";
import {_login} from "../../../services/UserServices";


class LoginPage extends Component {
    state = {
        auth: isAuthenticated(),
        loading: false,
        email: '',
        password: ''
    };

    componentDidMount() {
        addAuthListener(this._handleOnChangeAuth);
    }

    componentWillUnmount() {
        removeAuthListener(this._handleOnChangeAuth);
    }

    _handleOnChangeAuth = () => {
        const {auth} = this.state;

        const authUpdated = isAuthenticated();
        if (authUpdated !== auth) {
            this.setState({
                auth: authUpdated
            });
        }
    };

    _handleChangeInput(field, e) {
        const {value} = e.target;

        this.setState({
            [field]: value
        });
    }

    _handleSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state;

        if (this._checkForm())
            _login(email, password).then(response => {
                if (response.success) {
                    const {data} = response;
                    const {accessToken, user} = data;
                    setAuthState({accessToken, user});
                } else {
                    this.setState({
                        errorMessage: response.message //Display error if server return success false
                    })
                }
            }).catch();

    }

    _checkForm() {
        const {email, password} = this.state;
        let errorMessage = '';
        if (email === '') {
            errorMessage = 'Email must not be empty';
        } else if (password === '') {
            errorMessage = 'Password must not be empty';
        }

        this.setState({
            errorMessage: errorMessage
        });

        return !errorMessage;
    }

    render() {
        const {auth} = this.state;
        const errorMessage = this.state.errorMessage ? <p className="ErrorMessage">{this.state.errorMessage}</p> : '';
        if (auth) {
            return <Redirect to="/"/>;
        }

        const {email, password} = this.state;

        return (
            <div className="LoginPage">
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="login100-form">
					<span className="login100-form-title">
						Account Login
					</span>

                                <div className="wrap-input100 rs1-wrap-input100"
                                     data-validate="Type user name">
                                    <input id="first-name" className="input100" type="text" name="username"
                                           placeholder="User name"/>
                                        <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20"
                                     data-validate="Type password">
                                    <input className="input100" type="password" name="pass" placeholder="Password"/>
                                        <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button className="login100-form-btn">
                                        Sign in
                                    </button>
                                </div>

                                <div className="sign-up">
                                    <a href="#" >
                                        Sign Up
                                    </a>
                                </div>
                            </form>

                            <div className="login100-more"></div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.object
};

export default LoginPage;