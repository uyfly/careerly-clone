const redis = require("redis");

const redisClient = redis.createClient({
  host: "localhost",
  port: process.env.REACT_APP_REDIS_PORT,
});
redisClient.on("connect", () => {
  console.info("Redis connected!");
});

redisClient.on("error", (err) => {
  console.error("Redis Client Error", err);
});

redisClient.connect();

module.exports = redisClient;
