const keys = require('./keys');
const redis = require('redis');

const client = redis.createClient({
    ...keys.redis,
    retry_strategy: () => 1000
});

const subscription = client.duplicate();

function fib(index) {
    return index < 2 ? 1 : fib(index - 1) + fib(index - 2);
}

subscription.on('message', (channel, message) => {
    client.hset('values', message, fib(parseInt(message)));
})

subscription.subscribe('insert');
