const express = require('express');
const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3307',
    password: 'capasoftwaredevcourse',
    database: 'attendance'
})

connection.connect((err) => {
    console.log("Connected to the database");
})


const server = express();

server.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang=en>
            <head>
                <meta charset="UTF-8">
                <title>Testing Node - Express.js</title>
            </head>
            <body>
                <h1>Hello World!</h1>
            </body>
        </html>`);
});

server.get('/students', (req, res) => {
    connection.query('SELECT * FROM students', (err, result) => {
        if (err) {
            console.error('Error', err);
            res.status(500).send('Error');
        } else {
            res.json(result);
        }
    })
});


server.listen(3931, () => {
    console.log('Server is running on port 3931')
});
