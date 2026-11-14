const express = require('express');
const app = express();
let names = ['Alice', 'Bob', 'Charlie'];

app.get('/names', (req, res) => {
    for (let name of names) {
        res.send(name);};
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
module.exports = app;


