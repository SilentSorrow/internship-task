const crypto = require("crypto");

const generateToken = () => {
    return crypto.randomBytes(64).toString('hex').slice(0, 61);
}

module.exports = generateToken;