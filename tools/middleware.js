var api = require('./common')
var jwt = require('jsonwebtoken');
var config = require('../config/config');
var salt = config.security.salt;

function authorization(req, res, next) {
    var token = req.headers['authorization'];
    var flag = true;
    if (token == null || token == '') {
        flag = false;
    }
    if (flag) {
        // 
        jwt.verify(token, salt, function (err, decoded) {
            if (err) {
                api.error(res, "Token consistency error", "401");
            } else {
                return next();
            }
        });
    } else {
        api.error(res, "Token not provided", "401");
    }
}

module.exports = {
    authorization
}