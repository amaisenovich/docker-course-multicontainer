module.exports = {
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    },
    pg: {
        user: process.env.PGUSER,
        host: process.env.PGHOST,
        database: process.env.PGDATABASE,
        password: process.env.PGPASSWORD,
        port: process.env.PGPORT,
    }
};
