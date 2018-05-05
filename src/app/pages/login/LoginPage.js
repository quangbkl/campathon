import React, {Component} from "react";
import PropTypes from "prop-types";
import {isAuthenticated, setAuthState, addAuthListener, removeAuthListener} from "../../../services/AuthServices";
import {Link, Redirect} from "react-router-dom";
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
                <div className="Main">
                    <div className="MainForm">
                        <h1 className="Title">Crush Hunt</h1>
                        <form className="Form">
                            <h2>Sign up to see photos and videos from your friends.</h2>
                            <input type="text" placeholder="Email"
                                   onChange={this._handleChangeInput.bind(this, 'email')} value={email} name="email"/>
                            <input type="password" placeholder="Password"
                                   onChange={this._handleChangeInput.bind(this, 'password')} value={password}
                                   name="password"/>
                            <button onClick={this._handleSubmit.bind(this)}>Log in</button>
                            <p><Link to="/reset-password">Forgot Password?</Link></p>
                            {errorMessage}
                        </form>
                    </div>

                    <div className="RedirectLoginPage">
                        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
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