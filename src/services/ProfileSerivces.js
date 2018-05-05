import APIServices from "./APIServices";

export const _getProfile = () => {
    return APIServices.makeAuthRequest({
        url: '/users/profile',
        method: 'GET'
    });
};
export const _getMyPost = () => {
    return APIServices.makeAuthRequest({
        url: '/users/my-posts',
        method: 'GET'
    });
};
export const _getMyFavorite = () => {
    return APIServices.makeAuthRequest({
        url: '/users/my-favorites',
        method: 'GET'
    });
};