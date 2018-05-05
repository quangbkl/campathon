const _prefix = 'com.crush-hunt.';

const _getRealKey = (key, noPrefix = false) => {
    if (noPrefix) {
        return key;
    }

    return _prefix + key;
};

export const removeLocalData = (key, noPrefix = false) => {
    const realKey = _getRealKey(key, noPrefix);

    return localStorage.removeItem(realKey);
};

export const getLocalData = (key, defaultValue = null, noPrefix = false) => {
    const realKey = _getRealKey(key, noPrefix);

    const value = localStorage.getItem(realKey) || defaultValue;

    try {
        return JSON.parse(value);
    } catch (e) {
        return value;
    }
};

export const setLocalData = (key, value, noPrefix = false) => {
    const realKey = _getRealKey(key, noPrefix);

    const type = typeof(value);
    if (type === 'object') {
        value = JSON.stringify(value);
    }

    localStorage.setItem(realKey, value);

    return value;
};

export const setToken = (token) => {
    return localStorage.setItem('token', token);
};