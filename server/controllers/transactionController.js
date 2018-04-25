module.exports = {
  /**
   * @name: getAllTransactions
   * @description: Lists out all transactions
   */
  getAllTransactions: (req, res) => {
    res.send('Successfully received all transactions from Etherscan API');
  },
  
  /**
   * @name: sendTransactionsToDB // FIXME if we need DB
   * @description: After user inputs contract information, we send it to
   * database
   * @param:
   *   req.body (picked up from contractController.inputContractInfo) needs '
   *   1. VARCHAR 'network_name'
   *   2. VARCHAR 'contract_name'
   *   3. VARCHAR 'contract_address'
   *   4. VARCHAR 'contract_abi'
   */
  sendTransactionsToDB: (req, res, next) => {
    next();
    },
};
