const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

<<<<<<< HEAD
app.get('/', (req, res) => res.send('Successfully connected to the homepage'));

                                
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
=======
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.post('/getContractFunctions', contractController.getContractFunctions);
app.post('/getAllContractInfo', contractController.inputContractInfo,
                                transactionController.sendTransactionsToDB,
                                contractController.getStateVariables,
                                transactionController.getAllTransactions);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
>>>>>>> 05764ee64db310dd41e13e42c81e28bdf477bad4
