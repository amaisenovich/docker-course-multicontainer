const db = require('./db');
const express = require('./express');
const store = require('./store');
const routes = require('./routes');

const app = express.create();
const pg = db.create();
const redis = store.create();

routes.register(app, pg, redis);

app.listen(5000, err => {
    console.log('Listening for incoming connection on port 5000');
});
