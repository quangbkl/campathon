const config = {
    baseUrl: {
        $default: 'http://localhost:3000',
        staging: 'https://crushunt.netlify.com',
        production: 'https://crushunt.netlify.com',
    },
    baseAPIUrl: {
        $default: 'https://crush.blogk.xyz',
        staging: 'https://crush.blogk.xyz',
        production: 'https://crush.blogk.xyz',
    },
};

const _getEnvironment = () => {
    return process.env.REACT_APP_ENV || 'development';
};

export default (key, defaultValue = null) => {
    if (!config.hasOwnProperty(key)) {
        return defaultValue;
    }

    const env = _getEnvironment();
    const _dataConfig = config[key];

    return _dataConfig[env] ? _dataConfig[env] : _dataConfig['$default'] || defaultValue;
};