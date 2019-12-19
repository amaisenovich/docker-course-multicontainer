module.exports = {
    register: (app, db, redis) => {
        app.get('/', (req, res) => {
            res.send('Hi!')
        });

        app.get('/values/all', async (req, res) => {
            const values = await db.query('SELECT * FROM values');
            res.send(values.rows);
        });

        app.get('/values/current', async (req, res) => {
            redis.client.hgetall('values', (err, values) => {
                res.send(values)
            });
        });

        app.post('/values', async (req, res) => {
            const { index } = req.body;

            if (parseInt(index) > 40) {
                return res.status(422).send('Index value is to hight!');
            }

            redis.client.hset('values', index, 'NOT_CALCULATED');
            redis.publisher.publish('insert', index);

            db.query('INSERT INTO values(number) VALUES($1)', [index]);

            res.send({
                working: true
            });
        });
    }
}
