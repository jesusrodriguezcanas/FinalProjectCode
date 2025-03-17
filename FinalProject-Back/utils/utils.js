const jwt = require('jsonwebtoken');

const generateToken = (payload, isRefreshToken) => {
    if(isRefreshToken) {
        return jwt.sign(payload, process.env.REFRESH_TOKEN, {
            expiresIn: '30min',
        });
    }

    return jwt.sign(payload, process.env.ACCESS_TOKEN, {
        expiresIn: '1min',
    });
};

module.exports = { generateToken }