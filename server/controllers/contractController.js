module.exports = {
  /**
   * @name: inputContractInfo
   * @description: User inputs contract information, and we send it to
   * database
   * @param:
   *   req.body (will be picked up from contractController.inputContractInfo) 
   *   needs
   *   1. VARCHAR 'network_name'
   *   2. VARCHAR 'contract_name'
   *   3. VARCHAR 'contract_address'
   *   4. VARCHAR 'contract_abi'
   */
  inputContractInfo: (req, res, next) => {
    res.json('Successfully input data');
    next();
  },

    /**
   * @name: getContractFunctions
   * @description: User inputs contract information, and we send it to
   * database
   * @param:
   *   req.body (will be picked up from contractController.inputContractInfo) 
   *   needs
   *   1. VARCHAR 'network_name'
   *   2. VARCHAR 'contract_name'
   *   3. VARCHAR 'contract_address'
   *   4. VARCHAR 'contract_abi'
   */
  getContractFunctions: (req, res) => {
    res.send('Successfully received function ');
  },

    /**
   * @name: inputContract Info
   * @description: User inputs contract information, and we send it to
   * database
   * @param:
   *   req.body (will be picked up from contractController.inputContractInfo) 
   *   needs
   *   1. VARCHAR 'network_name'
   *   2. VARCHAR 'contract_name'
   *   3. VARCHAR 'contract_address'
   *   4. VARCHAR 'contract_abi'
   */
  getStateVariables: (req, res) => {
    res.send('Successfully received state variables');
  }
};
