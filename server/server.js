const express = require('express');
const bodyParser = require('body-parser');
const contractController = require('./controllers/contractController');
const transactionController = require('./controllers/transactionController');

const PORT = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Successfully connected to the homepage'));
app.post('/getContractFunctions', contractController.getContractFunctions);
app.post('/getAllContractInfo', contractController.inputContractInfo, 
                                transactionController.sendTransactionsToDB,
                                contractController.getStateVariables,
                                transactionController.getAllTransactions);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
