import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Neylanio',
        'Fulano'
    ]);
});

app.listen(3333);