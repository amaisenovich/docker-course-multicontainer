const { Pool } = require('pg');
const keys = require('./keys');

module.exports = {
    create: () => {
        const client = new Pool({
            ...keys.pg
        });

        client
            .on('error', err => console.error(`Can't create database connection. Error: ${JSON.stringify(err)}`));

        client
            .query('CREATE TABLE IF NOT EXISTS values(number INT)')
            .catch(err => console.error(`Can't create database table. Error: ${JSON.stringify(err)}`));

        return client;
    }
}
