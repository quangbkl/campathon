import React, {Component} from "react";
import PropTypes from "prop-types";
import {addAuthListener, isAuthenticated} from "../../../services/AuthServices";
import {Redirect} from "react-router-dom";
import "./LoginPage.css";
import {_login} from "../../../services/UserServices";
import {Link} from "react-router-dom/umd/react-router-dom";
import FacebookGoogle from "./FacebookGoogle";
import {setToken} from "../../../services/StorageServices";


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

    _handleOnSubmit(e) {
        e.preventDefault();
        const {email, password} = this.state;
        _login({email, password})
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
        const {auth} = this.state;
        if (auth) {
            return <Redirect to="/"/>;
        }

        const {email, password} = this.state;

        return (
            <div className="LoginPage">
                <div className="limiter">
                    <div className="container-login">
                        <div className="wrap-login">
                            <form className="login-form">

                                <span className="login-form-title">ĐĂNG NHẬP</span>
                                <div className="wrap-input"
                                     data-validate="Type user name">
                                    <input id="first-name" className="input" type="text" name="username" value={email}
                                           placeholder="Tên người dùng"
                                           onChange={this._handleChangeInput.bind(this, "username")}/>
                                    <span className="focus-input100"></span>
                                </div>
                                <div className="wrap-input"
                                     data-validate="Type password">
                                    <input className="input" type="password" name="pass" placeholder="Mật khẩu" value={password}
                                           onChange={this._handleChangeInput.bind(this, "password")}/>
                                    <span className="focus-input"></span>
                                </div>

                                <div className="container-login-form-btn">
                                    <button className="login-form-btn">
                                        Đăng nhập
                                    </button>
                                    <FacebookGoogle/>
                                </div>

                                <div className="sign-up-text">Chưa có tài khoản
                                    <Link to="/register"> Đăng ký </Link>
                                </div>

                            </form>

                            <div className="login-more"><img className="background"
                                                                src="https://nces.ed.gov/programs/coe/images/nav/coe_hp_new.png"
                                                                alt=""/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    history: PropTypes.object
};

export default LoginPage;