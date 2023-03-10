const Redis = require('redis');
const redisClient = Redis.createClient();

// "redis-commander": "^0.8.0",    in  package.json

exports.getCacheData = async (_id) => {
    try {
        await redisClient.connect();
        const cacheData = await redisClient.GET(`cacheData.${_id}`);
        console.log("Cache Hit");
        return cacheData;
    } catch (error) {
        return error;
    } finally {
        redisClient.quit();
    }
};

exports.setCacheData = async (_id, newCacheData) => {
    try {
        await redisClient.connect();
        const cacheData = await redisClient.SET(`cacheData.${_id}`, JSON.stringify(newCacheData));
        await redisClient.expire(`cacheData.${_id}`, CACHE_EXPIRE_TIME);
        console.log("Cache Miss And Set");
        return cacheData;
    } catch (error) {
        return error;
    } finally {
        redisClient.quit();
    }
};

exports.deleteCacheData = async (_id) => {
    try {
        await redisClient.connect();
        await redisClient.DEL(`cacheData.${_id}`);
        console.log("Delete Cache");
    } catch (error) {
        return error;
    }finally{
        redisClient.quit();
    }
};