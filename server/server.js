const express = require('express');
const bodyParser = require('body-parser');

const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Successfully connected to the homepage'));

                                
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
