const redis = require('redis')
const keys = require('./keys');

module.exports = {
    create: () => {
        const client = redis.createClient({
            ...keys.redis,
            retry_strategy: () => 1000
        })

        const publisher = client.duplicate();

        return {
            client,
            publisher
        };
    }
}