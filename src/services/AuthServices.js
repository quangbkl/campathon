import {setLocalData, getLocalData} from "./StorageServices";

const _keyStore = '_auth';
const _initState = {
    accessToken: '',
    user: {}
};

let _state = getLocalData(_keyStore, _initState);
let _listeners = [];

const _broadcast = () => {
    _listeners.forEach(listener => {
        typeof listener === 'function' && listener();
    });
};

export const addAuthListener = (listener) => {
    if (typeof listener !== 'function') {
        return;
    }

    if (_listeners.indexOf(listener) !== -1) {
        return;
    }

    _listeners = [].concat(_listeners, listener);
};

export const removeAuthListener = (listener) => {
    _listeners = _listeners.filter(_listener => listener !== _listener);
};

export const getAuthState = () => {
    return {
        ..._state
    };
};

export const isAuthenticated = () => {
    const {accessToken} = _state;

    return !!accessToken;
};

export const logout = () => {
    setAuthState(_initState);
};

export const setAuthState = (state) => {
    _state = {
        ..._state,
        ...state
    };

    setLocalData(_keyStore, _state);
    _broadcast();

    return _state;
};