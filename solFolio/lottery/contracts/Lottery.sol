// specifies version of Solidity that our code is written with
// which the compiler detects to compile properly
pragma solidity ^0.4.17;

// defines a new contract (remember classes!) that has some number of methods and variables
// contract is  KEYWORD
// deployed versions are INSTANCES

contract Lottery {
    address public manager;
    // by default, whenever we mark an array as public we can only access one 
    // element at a time
    address[] public players;
    
    function Lottery() public {
        // We need to pick up the address of the person creating the lottery and
        // set it to the manager variables
        // There's a global variable that is included any time we create a 
        // new instance of a contract
        
        // 'msg' object has properties about who just sent in a transaction to
        // the network and some info about the transaction itself
        // This 'msg' object is available with any function invocation 
        manager = msg.sender;
        
    }
    // payable: when someone calls this func and sends some amount of ether
    function enter() public payable {
        // if require fails, you get kicked out of the function
        // that failure does not clearly get communicated back to you
        require(msg.value > .01 ether); // .01 ether gets converted to wei
        // we want to add this player's address to players
        players.push(msg.sender);
    }
    // helper function 
    // view type because we are not modifying anything in the contract
    // returns some uint
    // not truly random but yah
    function random() private view returns (uint) {
        // sha3 is a global function
        // keccak256() and sha3 are the same thing --> returns a hash
        // block is another global variable
        return uint(keccak256(block.difficulty, now, players));
    }
    
    function pickWinner() public restricted {
        // // nobody can call pickWinner except for the manager
        // require(msg.sender == manager);
        
        uint index = random() % players.length;
        // .transfer() is available on every address
        // this is a reference to the current contract
        // balance is the amount of money that the curr contract has available to it
        players[index].transfer(this.balance); // returns an address (but it's an obj w certain props)
        // this line creates a new empty dynamic array
        players = new address[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    // view means contract is not changing
    function getPlayers() public view returns (address[]) {
        return players;
    }
}