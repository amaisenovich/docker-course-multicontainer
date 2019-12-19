const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = {
    create: () => {
        const app = express();
        app.use(cors());
        app.use(bodyParser.json());

        return app;
    }
} 