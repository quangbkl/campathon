import React, {Component} from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import './FacebookGoogle.css';

class FacebookGoogle extends Component {
    responseFacebook(response) {
        console.log(response)
    }
    responseGoogle = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div className="FacebookGoogle">
                <div className="Facebook">
                    <FacebookLogin
                        appId="203137053747486"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                    />
                </div>

                <div className="Google">
                    <GoogleLogin
                        clientId="494130616382-tpmcarnuvth5am5sdopg25lgan2vhaee.apps.googleusercontent.com"
                        buttonText="LOGIN GOOGLE"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                    />
                </div>

            </div>
        );
    }
}

FacebookGoogle.propTypes = {
    history: PropTypes.object
};

export default FacebookGoogle;