import React, {Component} from "react";
import {addAuthListener, isAuthenticated, removeAuthListener} from "../../services/AuthServices";

export default (ComposedComponent) => class WithAuthentication extends Component {
    static displayName = 'withAuthentication(' + (ComposedComponent.displayName || ComposedComponent.name) + ')';

    state = {
        auth: isAuthenticated()
    };

    _mounted = false;

    componentDidMount() {
        this._mounted = true;
        addAuthListener(this._handleOnAuthChange);
    }

    componentWillUnmount() {
        this._mounted = false;
        removeAuthListener(this._handleOnAuthChange);
    }

    _handleOnAuthChange = () => {
        if (!this._mounted) {
            return;
        }

        this.setState({
            auth: isAuthenticated()
        });
    };

    render() {
        const {auth} = this.state;
        const {props} = this;

        return <ComposedComponent {...props} auth={auth}/>
    }
}