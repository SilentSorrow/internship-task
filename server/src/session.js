const generateToken = require("./utils/tokenGenerator");
const bluebird = require("bluebird");
const redis = require("redis");

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient({ host: "redis" });

const createSession = ( userId ) => {
  const expireTime = 60 * 60;
  const token = generateToken();

  client.set(token, userId, "EX", expireTime);

  return token;
}

const getSession = async ( token ) => {
  const value = await client.getAsync(token);

  return value;
}

const deleteSession = ( token ) => {
  client.del(token);
}

module.exports = { createSession, getSession, deleteSession }
