import axios from "axios";
import {getLocalData} from "./StorageServices";
import getEnv from "../helpers/getEnv";
import {getAuthState} from "./AuthServices";

const _getAppVersion = () => {
    const app = getLocalData('app');

    return app ? app.version : '1.0.0';
};

class APIServices {
    constructor(baseURL) {
        const _baseURL = baseURL || getEnv('baseAPIUrl');

        this.api = axios.create({
            baseURL: _baseURL,
            timeout: 15000,
        });
    }

    makeAuthRequest(args) {
        const {accessToken} = getAuthState();
        const _headers = args.headers ? args.headers : {};
        const defaultHeaders = {
            'Authorization': accessToken,
        };

        const argsUpdated = {
            ...args,
            headers: {
                ...defaultHeaders,
                ..._headers
            }
        };

        return this.makeRequest(argsUpdated);
    }

    makeRequest(args) {
        const _headers = args.headers ? args.headers : {};

        const defaultHeaders = {
            'X-App-Version': _getAppVersion(),
        };

        args = {
            ...args,
            headers: {
                ...defaultHeaders,
                ..._headers
            }
        };

        return this.api(args)
            .then(({data}) => {
                return Promise.resolve(data);
            });
    }
}

export const extendsAPIServices = (baseURL) => {
    return new APIServices(baseURL);
};

export default new APIServices();