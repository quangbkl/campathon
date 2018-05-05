import React, {PureComponent} from "react";
import {Redirect, withRouter} from "react-router-dom";
import {logout} from "../../services/AuthServices";
import {setLocalData} from "../../services/StorageServices";

class RedirectToLogin extends PureComponent {
    render() {
        this._storeCurrentURL();
        logout();

        return <Redirect push to="/login"/>
    }

    _storeCurrentURL() {
        const {history} = this.props;
        const {pathname, search, hash} = history.location;
        const redirectTo = pathname + search + hash;

        setLocalData('redirectTo', redirectTo);
    }
}

export default withRouter(RedirectToLogin);