const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../client/public/index.html')));

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
