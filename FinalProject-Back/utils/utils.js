const jwt = require('jsonwebtoken');

const generateToken = (payload, isRefreshToken) => {
    if(isRefreshToken) {
        return jwt.sign(payload, process.env.REFRESH_TOKEN, {
            expiresIn: '50min',
        });
    }

    return jwt.sign(payload, process.env.ACCESS_TOKEN, {
        expiresIn: '25min',
    });
};

module.exports = { generateToken }