import React, {Component} from "react";
import PropTypes from "prop-types";
import RedirectToLogin from "../shared-components/RedirectToLogin";
import withAuth from "./withAuth";

class EnsureLoggedIn extends Component {
    render() {
        const {auth, redirect} = this.props;

        if (!auth) {
            if (redirect) {
                return <RedirectToLogin/>;
            }

            return null;
        }

        return this.props.children;
    }
}

EnsureLoggedIn.defaultProps = {
    redirect: true
};

EnsureLoggedIn.propTypes = {
    auth: PropTypes.bool.isRequired,
    children: PropTypes.any.isRequired,
    redirect: PropTypes.bool.isRequired
};


export default withAuth(EnsureLoggedIn);