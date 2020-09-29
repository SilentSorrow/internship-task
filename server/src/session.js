const session = require("express-session");
const redis = require("redis");
const RedisStore = require('connect-redis')(session)
const redisClient = redis.createClient()

module.exports = session({
    name: "SESS_ID",
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, 
      maxAge: 1000 * 60 * 60 * 24 * 30, 
    },
    store: new RedisStore({ client: redisClient }),
});