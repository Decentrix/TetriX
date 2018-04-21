const express = require('express');
const path = require('path');


const app = express();
const PORT = 8080;

app.use(express.static('build'));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));


app.listen(PORT, () => {
  console.log('Listening on PORT', PORT );
})