import APIServices from "./APIServices";

export const _login = (email, password) => {
    return APIServices.makeRequest({
        url: '/login',
        method: 'POST',
        data: {
            email: email,
            password: password,
        }
    });
};

export const _register = (email, name, password) => {
    return APIServices.makeRequest({
        url: '/register',
        method: 'POST',
        data: {
            email: email,
            name: name,
            password: password,
        }
    });
};
