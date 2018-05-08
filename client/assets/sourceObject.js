module.exports = {
  name: "myContract",
  oldContract: {
    info: {
<<<<<<< HEAD
      contractName: 'myContract',
      assembly: {
        '.code': [
          { begin: 26, end: 666, name: 'PUSH', value: '80' },
          { begin: 26, end: 666, name: 'PUSH', value: '40' },
          { begin: 26, end: 666, name: 'MSTORE' },
          { begin: 318, end: 615, name: 'CALLVALUE' },
          { begin: 8, end: 17, name: 'DUP1' },
          { begin: 5, end: 7, name: 'ISZERO' },
          { begin: 5, end: 7, name: 'PUSH [tag]', value: '1' },
          { begin: 5, end: 7, name: 'JUMPI' },
          { begin: 30, end: 31, name: 'PUSH', value: '0' },
          { begin: 27, end: 28, name: 'DUP1' },
          { begin: 20, end: 32, name: 'REVERT' },
          { begin: 5, end: 7, name: 'tag', value: '1' },
          { begin: 5, end: 7, name: 'JUMPDEST' },
          { begin: -1, end: -1, name: 'POP' },
          { begin: 493, end: 514, name: 'PUSH', value: '0' },
          { begin: 345, end: 356, name: 'DUP1' },
          { begin: 345, end: 356, name: 'SLOAD' },
          {
            begin: 345,
            end: 356,
            name: 'PUSH',
            value: '10000000000000000000000000000000000000000',
          },
          { begin: -1, end: -1, name: 'PUSH', value: 'A0' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'PUSH', value: 'FF' },
          { begin: -1, end: -1, name: 'MUL' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 345, end: 356, name: 'SWAP1' },
          { begin: 345, end: 356, name: 'SWAP2' },
          { begin: 345, end: 356, name: 'AND' },
          { begin: 345, end: 356, name: 'OR' },
          { begin: 345, end: 356, name: 'DUP2' },
          { begin: 345, end: 356, name: 'SSTORE' },
          { begin: 362, end: 363, name: 'PUSH', value: '2' },
          { begin: 362, end: 367, name: 'DUP1' },
          { begin: 362, end: 367, name: 'SLOAD' },
          { begin: -1, end: -1, name: 'PUSH', value: 'FF' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 362, end: 367, name: 'SWAP1' },
          { begin: 362, end: 367, name: 'DUP2' },
          { begin: 362, end: 367, name: 'AND' },
          { begin: -1, end: -1, name: 'PUSH', value: '1' },
          { begin: 362, end: 367, name: 'SWAP1' },
          { begin: 362, end: 367, name: 'DUP2' },
          { begin: 362, end: 367, name: 'OR' },
          { begin: 362, end: 367, name: 'DUP4' },
          { begin: 362, end: 367, name: 'SSTORE' },
          { begin: 373, end: 374, name: 'PUSH', value: '3' },
          { begin: 373, end: 378, name: 'SWAP3' },
          { begin: 373, end: 378, name: 'DUP4' },
          { begin: 373, end: 378, name: 'SSTORE' },
          { begin: 384, end: 385, name: 'PUSH', value: '5' },
          { begin: 384, end: 389, name: 'DUP1' },
          { begin: 384, end: 389, name: 'SLOAD' },
          { begin: 384, end: 389, name: 'DUP4' },
          { begin: 384, end: 389, name: 'AND' },
          { begin: 384, end: 389, name: 'SWAP1' },
          { begin: 384, end: 389, name: 'SWAP4' },
          { begin: 384, end: 389, name: 'OR' },
          { begin: 384, end: 389, name: 'SWAP1' },
          { begin: 384, end: 389, name: 'SWAP3' },
          { begin: 384, end: 389, name: 'SSTORE' },
          { begin: 395, end: 396, name: 'PUSH', value: '6' },
          { begin: 27, end: 37, name: 'DUP1' },
          { begin: 27, end: 37, name: 'SLOAD' },
          { begin: 23, end: 41, name: 'DUP1' },
          { begin: 23, end: 41, name: 'DUP5' },
          { begin: 23, end: 41, name: 'ADD' },
          { begin: 45, end: 68, name: 'DUP3' },
          { begin: 45, end: 68, name: 'SSTORE' },
          {
            begin: 395,
            end: 410,
            name: 'PUSH',
            value: '68656C6C6F000000000000000000000000000000000000000000000000000000',
          },
          {
            begin: 395,
            end: 410,
            name: 'PUSH',
            value: 'F652222313E28459528D920B65115C16C04F3EFC82AAEDC97BE59F3F377C0D3F',
          },
          { begin: 395, end: 410, name: 'SWAP1' },
          { begin: 395, end: 410, name: 'SWAP2' },
          { begin: 395, end: 410, name: 'ADD' },
          { begin: 395, end: 410, name: 'SSTORE' },
          {
            begin: 416,
            end: 430,
            name: 'PUSH',
            value: '6869000000000000000000000000000000000000000000000000000000000000',
          },
          { begin: 416, end: 430, name: 'DUP4' },
          { begin: 416, end: 430, name: 'SSTORE' },
          { begin: 436, end: 443, name: 'PUSH', value: '7' },
          { begin: 436, end: 449, name: 'DUP1' },
          { begin: 436, end: 449, name: 'SLOAD' },
          { begin: 436, end: 449, name: 'DUP4' },
          { begin: 436, end: 449, name: 'AND' },
          { begin: 436, end: 449, name: 'PUSH', value: '31' },
          { begin: 436, end: 449, name: 'OR' },
          { begin: -1, end: -1, name: 'PUSH', value: 'FFFFFFFFFFFFFFFF00' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 455, end: 472, name: 'AND' },
          { begin: 455, end: 472, name: 'PUSH', value: '686579000000000000' },
          { begin: 455, end: 472, name: 'OR' },
          { begin: -1, end: -1, name: 'PUSH', value: '48' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'PUSH', value: 'C8' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'SUB' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 478, end: 487, name: 'AND' },
          { begin: 478, end: 487, name: 'PUSH', value: '7B000000000000000000' },
          { begin: 478, end: 487, name: 'OR' },
          { begin: 478, end: 487, name: 'SWAP1' },
          { begin: 478, end: 487, name: 'SSTORE' },
          { begin: 525, end: 535, name: 'CALLER' },
          { begin: -1, end: -1, name: 'PUSH', value: '1' },
          { begin: -1, end: -1, name: 'PUSH', value: 'A0' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'SUB' },
          { begin: 517, end: 536, name: 'AND' },
          { begin: 517, end: 536, name: 'DUP5' },
          { begin: 517, end: 536, name: 'MSTORE' },
          { begin: 517, end: 524, name: 'PUSH', value: '4' },
          { begin: 395, end: 410, name: 'PUSH', value: '20' },
          { begin: 517, end: 536, name: 'SWAP1' },
          { begin: 517, end: 536, name: 'DUP2' },
          { begin: 517, end: 536, name: 'MSTORE' },
          { begin: 517, end: 536, name: 'PUSH', value: '40' },
          { begin: 517, end: 536, name: 'SWAP5' },
          { begin: 517, end: 536, name: 'DUP6' },
          { begin: 517, end: 536, name: 'SWAP1' },
          { begin: 517, end: 536, name: 'KECCAK256' },
          { begin: 542, end: 552, name: 'SWAP4' },
          { begin: 542, end: 552, name: 'DUP5' },
          { begin: 542, end: 552, name: 'ADD' },
          { begin: 542, end: 557, name: 'DUP1' },
          { begin: 542, end: 557, name: 'SLOAD' },
          { begin: -1, end: -1, name: 'PUSH', value: 'FF00' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 542, end: 557, name: 'AND' },
          { begin: 542, end: 557, name: 'PUSH', value: 'A00' },
          { begin: 542, end: 557, name: 'OR' },
          { begin: 563, end: 582, name: 'SWAP1' },
          { begin: 563, end: 582, name: 'SWAP4' },
          { begin: 563, end: 582, name: 'AND' },
          { begin: 563, end: 582, name: 'PUSH', value: '4D' },
          { begin: 563, end: 582, name: 'OR' },
          { begin: 563, end: 582, name: 'SWAP1' },
          { begin: 563, end: 582, name: 'SWAP3' },
          { begin: 563, end: 582, name: 'SSTORE' },
          { begin: 588, end: 610, name: 'DUP4' },
          { begin: 588, end: 610, name: 'MLOAD' },
          { begin: 588, end: 610, name: 'DUP1' },
          { begin: 588, end: 610, name: 'DUP6' },
          { begin: 588, end: 610, name: 'ADD' },
          { begin: 588, end: 610, name: 'SWAP1' },
          { begin: 588, end: 610, name: 'SWAP5' },
          { begin: 588, end: 610, name: 'MSTORE' },
          { begin: 588, end: 610, name: 'DUP1' },
          { begin: 588, end: 610, name: 'DUP5' },
          { begin: 588, end: 610, name: 'MSTORE' },
          {
            begin: 588,
            end: 610,
            name: 'PUSH',
            value: '6A6F736570680000000000000000000000000000000000000000000000000000',
          },
          { begin: 588, end: 610, name: 'SWAP4' },
          { begin: 588, end: 610, name: 'SWAP1' },
          { begin: 588, end: 610, name: 'SWAP2' },
          { begin: 588, end: 610, name: 'ADD' },
          { begin: 588, end: 610, name: 'SWAP3' },
          { begin: 588, end: 610, name: 'DUP4' },
          { begin: 588, end: 610, name: 'MSTORE' },
          { begin: 517, end: 536, name: 'SWAP1' },
          { begin: 517, end: 536, name: 'SWAP2' },
          { begin: 588, end: 610, name: 'PUSH [tag]', value: '5' },
          { begin: 588, end: 610, name: 'SWAP2' },
          { begin: 517, end: 536, name: 'DUP4' },
          { begin: 517, end: 536, name: 'SWAP2' },
          { begin: 588, end: 610, name: 'SWAP1' },
          { begin: 588, end: 610, name: 'PUSH [tag]', value: '6' },
          { begin: 588, end: 610, name: 'JUMP', value: '[in]' },
          { begin: 588, end: 610, name: 'tag', value: '5' },
          { begin: 588, end: 610, name: 'JUMPDEST' },
          { begin: 588, end: 610, name: 'POP' },
          { begin: 318, end: 615, name: 'POP' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '7' },
          { begin: 26, end: 666, name: 'JUMP' },
          { begin: 26, end: 666, name: 'tag', value: '6' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'DUP1' },
          { begin: 26, end: 666, name: 'SLOAD' },
          { begin: 26, end: 666, name: 'PUSH', value: '1' },
          { begin: 26, end: 666, name: 'DUP2' },
          { begin: 26, end: 666, name: 'PUSH', value: '1' },
          { begin: 26, end: 666, name: 'AND' },
          { begin: 26, end: 666, name: 'ISZERO' },
          { begin: 26, end: 666, name: 'PUSH', value: '100' },
          { begin: 26, end: 666, name: 'MUL' },
          { begin: 26, end: 666, name: 'SUB' },
          { begin: 26, end: 666, name: 'AND' },
          { begin: 26, end: 666, name: 'PUSH', value: '2' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'DIV' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'PUSH', value: '0' },
          { begin: 26, end: 666, name: 'MSTORE' },
          { begin: 26, end: 666, name: 'PUSH', value: '20' },
          { begin: 26, end: 666, name: 'PUSH', value: '0' },
          { begin: 26, end: 666, name: 'KECCAK256' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'PUSH', value: '1F' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'PUSH', value: '20' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'DIV' },
          { begin: 26, end: 666, name: 'DUP2' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'SWAP3' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'PUSH', value: '1F' },
          { begin: 26, end: 666, name: 'LT' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '9' },
          { begin: 26, end: 666, name: 'JUMPI' },
          { begin: 26, end: 666, name: 'DUP1' },
          { begin: 26, end: 666, name: 'MLOAD' },
          { begin: 26, end: 666, name: 'PUSH', value: 'FF' },
          { begin: 26, end: 666, name: 'NOT' },
          { begin: 26, end: 666, name: 'AND' },
          { begin: 26, end: 666, name: 'DUP4' },
          { begin: 26, end: 666, name: 'DUP1' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'OR' },
          { begin: 26, end: 666, name: 'DUP6' },
          { begin: 26, end: 666, name: 'SSTORE' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '11' },
          { begin: 26, end: 666, name: 'JUMP' },
          { begin: 26, end: 666, name: 'tag', value: '9' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'DUP1' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'PUSH', value: '1' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'DUP6' },
          { begin: 26, end: 666, name: 'SSTORE' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'ISZERO' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '11' },
          { begin: 26, end: 666, name: 'JUMPI' },
          { begin: 26, end: 666, name: 'SWAP2' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'tag', value: '10' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'DUP2' },
          { begin: 26, end: 666, name: 'GT' },
          { begin: 26, end: 666, name: 'ISZERO' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '11' },
          { begin: 26, end: 666, name: 'JUMPI' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'MLOAD' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'SSTORE' },
          { begin: 26, end: 666, name: 'SWAP2' },
          { begin: 26, end: 666, name: 'PUSH', value: '20' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'SWAP2' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'PUSH', value: '1' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '10' },
          { begin: 26, end: 666, name: 'JUMP' },
          { begin: 26, end: 666, name: 'tag', value: '11' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          { begin: -1, end: -1, name: 'POP' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '12' },
          { begin: 26, end: 666, name: 'SWAP3' },
          { begin: 26, end: 666, name: 'SWAP2' },
          { begin: -1, end: -1, name: 'POP' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '13' },
          { begin: 26, end: 666, name: 'JUMP', value: '[in]' },
          { begin: 26, end: 666, name: 'tag', value: '12' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          { begin: 26, end: 666, name: 'POP' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'JUMP', value: '[out]' },
          { begin: 26, end: 666, name: 'tag', value: '13' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '14' },
          { begin: 26, end: 666, name: 'SWAP2' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'tag', value: '15' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          { begin: 26, end: 666, name: 'DUP1' },
          { begin: 26, end: 666, name: 'DUP3' },
          { begin: 26, end: 666, name: 'GT' },
          { begin: 26, end: 666, name: 'ISZERO' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '12' },
          { begin: 26, end: 666, name: 'JUMPI' },
          { begin: 26, end: 666, name: 'PUSH', value: '0' },
          { begin: 26, end: 666, name: 'DUP2' },
          { begin: 26, end: 666, name: 'SSTORE' },
          { begin: 26, end: 666, name: 'PUSH', value: '1' },
          { begin: 26, end: 666, name: 'ADD' },
          { begin: 26, end: 666, name: 'PUSH [tag]', value: '15' },
          { begin: 26, end: 666, name: 'JUMP' },
          { begin: 26, end: 666, name: 'tag', value: '14' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          { begin: 26, end: 666, name: 'SWAP1' },
          { begin: 26, end: 666, name: 'JUMP', value: '[out]' },
          { begin: 26, end: 666, name: 'tag', value: '7' },
          { begin: 26, end: 666, name: 'JUMPDEST' },
          {
            begin: 26,
            end: 666,
            name: 'PUSH #[$]',
            value: '0000000000000000000000000000000000000000000000000000000000000000',
          },
          { begin: 26, end: 666, name: 'DUP1' },
          {
            begin: 26,
            end: 666,
            name: 'PUSH [$]',
            value: '0000000000000000000000000000000000000000000000000000000000000000',
          },
          { begin: 26, end: 666, name: 'PUSH', value: '0' },
          { begin: 26, end: 666, name: 'CODECOPY' },
          { begin: 26, end: 666, name: 'PUSH', value: '0' },
          { begin: 26, end: 666, name: 'RETURN' },
        ],
        '.data': {
          '0': {
            '.auxdata':
              'a165627a7a72305820ff49770f8c71bd2ec869f7c41d96a272e80e9ce85543b92a09e5b92410b3134d0029',
            '.code': [
              { begin: 26, end: 666, name: 'PUSH', value: '80' },
              { begin: 26, end: 666, name: 'PUSH', value: '40' },
              { begin: 26, end: 666, name: 'MSTORE' },
              { begin: 26, end: 666, name: 'PUSH', value: '4' },
              { begin: 26, end: 666, name: 'CALLDATASIZE' },
              { begin: 26, end: 666, name: 'LT' },
              { begin: 26, end: 666, name: 'PUSH [tag]', value: '1' },
              { begin: 26, end: 666, name: 'JUMPI' },
              { begin: 26, end: 666, name: 'PUSH', value: 'FFFFFFFF' },
              {
                begin: 26,
                end: 666,
                name: 'PUSH',
                value: '100000000000000000000000000000000000000000000000000000000',
              },
              { begin: 26, end: 666, name: 'PUSH', value: '0' },
              { begin: 26, end: 666, name: 'CALLDATALOAD' },
              { begin: 26, end: 666, name: 'DIV' },
              { begin: 26, end: 666, name: 'AND' },
              { begin: 26, end: 666, name: 'PUSH', value: 'A241C089' },
              { begin: 26, end: 666, name: 'DUP2' },
              { begin: 26, end: 666, name: 'EQ' },
              { begin: 26, end: 666, name: 'PUSH [tag]', value: '2' },
              { begin: 26, end: 666, name: 'JUMPI' },
              { begin: 26, end: 666, name: 'tag', value: '1' },
              { begin: 26, end: 666, name: 'JUMPDEST' },
              { begin: 26, end: 666, name: 'PUSH', value: '0' },
              { begin: 26, end: 666, name: 'DUP1' },
              { begin: 26, end: 666, name: 'REVERT' },
              { begin: 621, end: 663, name: 'tag', value: '2' },
              { begin: 621, end: 663, name: 'JUMPDEST' },
              { begin: 621, end: 663, name: 'CALLVALUE' },
              { begin: 8, end: 17, name: 'DUP1' },
              { begin: 5, end: 7, name: 'ISZERO' },
              { begin: 5, end: 7, name: 'PUSH [tag]', value: '3' },
              { begin: 5, end: 7, name: 'JUMPI' },
              { begin: 30, end: 31, name: 'PUSH', value: '0' },
              { begin: 27, end: 28, name: 'DUP1' },
              { begin: 20, end: 32, name: 'REVERT' },
              { begin: 5, end: 7, name: 'tag', value: '3' },
              { begin: 5, end: 7, name: 'JUMPDEST' },
              { begin: 621, end: 663, name: 'POP' },
              { begin: 621, end: 663, name: 'PUSH [tag]', value: '4' },
              { begin: 621, end: 663, name: 'PUSH [tag]', value: '5' },
              { begin: 621, end: 663, name: 'JUMP' },
              { begin: 621, end: 663, name: 'tag', value: '4' },
              { begin: 621, end: 663, name: 'JUMPDEST' },
              { begin: 621, end: 663, name: 'STOP' },
              { begin: 621, end: 663, name: 'tag', value: '5' },
              { begin: 621, end: 663, name: 'JUMPDEST' },
              { begin: 657, end: 658, name: 'PUSH', value: '2' },
              { begin: 653, end: 658, name: 'DUP1' },
              { begin: 653, end: 658, name: 'SLOAD' },
              { begin: -1, end: -1, name: 'PUSH', value: 'FF' },
              { begin: -1, end: -1, name: 'NOT' },
              { begin: 653, end: 658, name: 'AND' },
              { begin: 653, end: 658, name: 'DUP2' },
              { begin: 653, end: 658, name: 'OR' },
              { begin: 653, end: 658, name: 'SWAP1' },
              { begin: 653, end: 658, name: 'SSTORE' },
              { begin: 621, end: 663, name: 'JUMP', value: '[out]' },
            ],
          },
        },
      },
      bytecode:
        '608060405234801561001057600080fd5b50600080547401000000000000000000000000000000000000000060a060020a60ff02199091161781556002805460ff199081166001908117835560039283556005805483169093179092556006805480840182557f68656c6c6f0000000000000000000000000000000000000000000000000000007ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f909101557f6869000000000000000000000000000000000000000000000000000000000000835560078054831660311768ffffffffffffffff0019166868657900000000000017604860020a60c860020a031916697b00000000000000000017905533600160a060020a0316845260046020908152604094859020938401805461ff001916610a0017909316604d1790925583518085019094528084527f6a6f73657068000000000000000000000000000000000000000000000000000093909101928352909161017a91839190610181565b505061021c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101c257805160ff19168380011785556101ef565b828001600101855582156101ef579182015b828111156101ef5782518255916020019190600101906101d4565b506101fb9291506101ff565b5090565b61021991905b808211156101fb5760008155600101610205565b90565b60918061022a6000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a241c08981146043575b600080fd5b348015604e57600080fd5b5060556057565b005b6002805460ff1916811790555600a165627a7a72305820ff49770f8c71bd2ec869f7c41d96a272e80e9ce85543b92a09e5b92410b3134d0029',
      functionHashes: { 'updateContract()': 'a241c089' },
      gasEstimates: {
        creation: [null, 29000],
        external: { 'updateContract()': 20354 },
        internal: {},
      },
      interface:
        '[{"constant":false,"inputs":[],"name":"updateContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
      metadata:
        '{"compiler":{"version":"0.4.23+commit.124ca40d"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[],"name":"updateContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"myContract"},"evmVersion":"byzantium","libraries":{},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0x633731872fa47c4e5c513c0cf34599e97d245d4eea6100dc0bfb0695ffa288a7","urls":["bzzr://6fe799cb1e61722d6155305783c01f0789ca684c39fd9721c1e6b0255c0a2aa9"]}},"version":1}',
      opcodes:
        'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH21 0x10000000000000000000000000000000000000000 PUSH1 0xA0 PUSH1 0x2 EXP PUSH1 0xFF MUL NOT SWAP1 SWAP2 AND OR DUP2 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0xFF NOT SWAP1 DUP2 AND PUSH1 0x1 SWAP1 DUP2 OR DUP4 SSTORE PUSH1 0x3 SWAP3 DUP4 SSTORE PUSH1 0x5 DUP1 SLOAD DUP4 AND SWAP1 SWAP4 OR SWAP1 SWAP3 SSTORE PUSH1 0x6 DUP1 SLOAD DUP1 DUP5 ADD DUP3 SSTORE PUSH32 0x68656C6C6F000000000000000000000000000000000000000000000000000000 PUSH32 0xF652222313E28459528D920B65115C16C04F3EFC82AAEDC97BE59F3F377C0D3F SWAP1 SWAP2 ADD SSTORE PUSH32 0x6869000000000000000000000000000000000000000000000000000000000000 DUP4 SSTORE PUSH1 0x7 DUP1 SLOAD DUP4 AND PUSH1 0x31 OR PUSH9 0xFFFFFFFFFFFFFFFF00 NOT AND PUSH9 0x686579000000000000 OR PUSH1 0x48 PUSH1 0x2 EXP PUSH1 0xC8 PUSH1 0x2 EXP SUB NOT AND PUSH10 0x7B000000000000000000 OR SWAP1 SSTORE CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP5 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP5 DUP6 SWAP1 KECCAK256 SWAP4 DUP5 ADD DUP1 SLOAD PUSH2 0xFF00 NOT AND PUSH2 0xA00 OR SWAP1 SWAP4 AND PUSH1 0x4D OR SWAP1 SWAP3 SSTORE DUP4 MLOAD DUP1 DUP6 ADD SWAP1 SWAP5 MSTORE DUP1 DUP5 MSTORE PUSH32 0x6A6F736570680000000000000000000000000000000000000000000000000000 SWAP4 SWAP1 SWAP2 ADD SWAP3 DUP4 MSTORE SWAP1 SWAP2 PUSH2 0x17A SWAP2 DUP4 SWAP2 SWAP1 PUSH2 0x181 JUMP JUMPDEST POP POP PUSH2 0x21C JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x1C2 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x1EF JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x1EF JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x1EF JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x1D4 JUMP JUMPDEST POP PUSH2 0x1FB SWAP3 SWAP2 POP PUSH2 0x1FF JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x219 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x1FB JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x205 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x91 DUP1 PUSH2 0x22A PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH1 0x3E JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0xA241C089 DUP2 EQ PUSH1 0x43 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x4E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x55 PUSH1 0x57 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x2 DUP1 SLOAD PUSH1 0xFF NOT AND DUP2 OR SWAP1 SSTORE JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 SELFDESTRUCT 0x49 PUSH24 0xF8C71BD2EC869F7C41D96A272E80E9CE85543B92A09E5B9 0x24 LT 0xb3 SGT 0x4d STOP 0x29 ',
      runtimeBytecode:
        '608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a241c08981146043575b600080fd5b348015604e57600080fd5b5060556057565b005b6002805460ff1916811790555600a165627a7a72305820ff49770f8c71bd2ec869f7c41d96a272e80e9ce85543b92a09e5b92410b3134d0029',
      srcmap:
        '26:640:0:-;;;318:297;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;493:21:0;345:11;;;-1:-1:-1;;;;;;345:11:0;;;;;;362:1;:5;;-1:-1:-1;;362:5:0;;;-1:-1:-1;362:5:0;;;;;373:1;:5;;;384:1;:5;;;;;;;;;;395:1;27:10:-1;;23:18;;;45:23;;395:15:0;;;;;;416:14;;;436:7;:13;;;;;;-1:-1:-1;;455:17:0;;;-1:-1:-1;;;;;;;;478:9:0;;;;;525:10;-1:-1:-1;;;;;517:19:0;;;:7;395:15;517:19;;;;;;;;542:10;;;:15;;-1:-1:-1;;542:15:0;;;563:19;;;;;;;;588:22;;;;;;;;;;;;;;;;;;;517:19;;588:22;;517:19;;588:22;;:::i;:::-;;318:297;26:640;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26:640:0;;;-1:-1:-1;26:640:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
      srcmapRuntime:
        '26:640:0:-;;;;;;;;;;;;;;;;;;;;;;;621:42;;8:9:-1;5:2;;;30:1;27;20:12;5:2;621:42:0;;;;;;;657:1;653:5;;-1:-1:-1;;653:5:0;;;;;621:42::o',
    },
    source: [
      'pragma solidity ^0.4.21;',
      '',
      'contract myContract {',
      '  struct Player {',
      '    string name; ',
      '    bytes1 gender;',
      '    uint8 age;',
      '  }',
      '',
      '  address tester;',
      '  bool test;  ',
      '  bytes32 teststr;',
      '  uint8 a;',
      '  uint256 b;',
      '  mapping(address => Player) players;',
      '  uint8 c;',
      '  bytes32[] d;',
      '  bytes1 oneByte;',
      '  bytes8 eightByte;',
      '  int128 hey;',
      '',
      '  constructor() public {',
      '    test = true;',
      '    a = 1;',
      '    b = 2;',
      '    c = 3;',
      '    d.push("hello");',
      '    teststr = "hi";',
      '    oneByte = "1";',
      '    eightByte = "hey";',
      '    hey = 123;',
      '    Player storage sender = players[msg.sender];',
      '    sender.age = 10;',
      '    sender.gender = "M";',
      '    sender.name = "joseph";',
      '  }',
      '  ',
      '  function updateContract() {',
      '    a = 2;',
      '  }',
      '',
      '}',
    ],
=======
      "assembly": {
        ".code": [{
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "80"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "40"
        }, {
          "begin": 26,
          "end": 666,
          "name": "MSTORE"
        }, {
          "begin": 318,
          "end": 615,
          "name": "CALLVALUE"
        }, {
          "begin": 8,
          "end": 17,
          "name": "DUP1"
        }, {
          "begin": 5,
          "end": 7,
          "name": "ISZERO"
        }, {
          "begin": 5,
          "end": 7,
          "name": "PUSH [tag]",
          "value": "1"
        }, {
          "begin": 5,
          "end": 7,
          "name": "JUMPI"
        }, {
          "begin": 30,
          "end": 31,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 27,
          "end": 28,
          "name": "DUP1"
        }, {
          "begin": 20,
          "end": 32,
          "name": "REVERT"
        }, {
          "begin": 5,
          "end": 7,
          "name": "tag",
          "value": "1"
        }, {
          "begin": 5,
          "end": 7,
          "name": "JUMPDEST"
        }, {
          "begin": -1,
          "end": -1,
          "name": "POP"
        }, {
          "begin": 493,
          "end": 514,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 345,
          "end": 356,
          "name": "DUP1"
        }, {
          "begin": 345,
          "end": 356,
          "name": "SLOAD"
        }, {
          "begin": 345,
          "end": 356,
          "name": "PUSH",
          "value": "10000000000000000000000000000000000000000"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "A0"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "FF"
        }, {
          "begin": -1,
          "end": -1,
          "name": "MUL"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 345,
          "end": 356,
          "name": "SWAP1"
        }, {
          "begin": 345,
          "end": 356,
          "name": "SWAP2"
        }, {
          "begin": 345,
          "end": 356,
          "name": "AND"
        }, {
          "begin": 345,
          "end": 356,
          "name": "OR"
        }, {
          "begin": 345,
          "end": 356,
          "name": "DUP2"
        }, {
          "begin": 345,
          "end": 356,
          "name": "SSTORE"
        }, {
          "begin": 362,
          "end": 363,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": 362,
          "end": 367,
          "name": "DUP1"
        }, {
          "begin": 362,
          "end": 367,
          "name": "SLOAD"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "FF"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 362,
          "end": 367,
          "name": "SWAP1"
        }, {
          "begin": 362,
          "end": 367,
          "name": "DUP2"
        }, {
          "begin": 362,
          "end": 367,
          "name": "AND"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 362,
          "end": 367,
          "name": "SWAP1"
        }, {
          "begin": 362,
          "end": 367,
          "name": "DUP2"
        }, {
          "begin": 362,
          "end": 367,
          "name": "OR"
        }, {
          "begin": 362,
          "end": 367,
          "name": "DUP4"
        }, {
          "begin": 362,
          "end": 367,
          "name": "SSTORE"
        }, {
          "begin": 373,
          "end": 374,
          "name": "PUSH",
          "value": "3"
        }, {
          "begin": 373,
          "end": 378,
          "name": "SWAP3"
        }, {
          "begin": 373,
          "end": 378,
          "name": "DUP4"
        }, {
          "begin": 373,
          "end": 378,
          "name": "SSTORE"
        }, {
          "begin": 384,
          "end": 385,
          "name": "PUSH",
          "value": "5"
        }, {
          "begin": 384,
          "end": 389,
          "name": "DUP1"
        }, {
          "begin": 384,
          "end": 389,
          "name": "SLOAD"
        }, {
          "begin": 384,
          "end": 389,
          "name": "DUP4"
        }, {
          "begin": 384,
          "end": 389,
          "name": "AND"
        }, {
          "begin": 384,
          "end": 389,
          "name": "SWAP1"
        }, {
          "begin": 384,
          "end": 389,
          "name": "SWAP4"
        }, {
          "begin": 384,
          "end": 389,
          "name": "OR"
        }, {
          "begin": 384,
          "end": 389,
          "name": "SWAP1"
        }, {
          "begin": 384,
          "end": 389,
          "name": "SWAP3"
        }, {
          "begin": 384,
          "end": 389,
          "name": "SSTORE"
        }, {
          "begin": 395,
          "end": 396,
          "name": "PUSH",
          "value": "6"
        }, {
          "begin": 27,
          "end": 37,
          "name": "DUP1"
        }, {
          "begin": 27,
          "end": 37,
          "name": "SLOAD"
        }, {
          "begin": 23,
          "end": 41,
          "name": "DUP1"
        }, {
          "begin": 23,
          "end": 41,
          "name": "DUP5"
        }, {
          "begin": 23,
          "end": 41,
          "name": "ADD"
        }, {
          "begin": 45,
          "end": 68,
          "name": "DUP3"
        }, {
          "begin": 45,
          "end": 68,
          "name": "SSTORE"
        }, {
          "begin": 395,
          "end": 410,
          "name": "PUSH",
          "value": "68656C6C6F000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 395,
          "end": 410,
          "name": "PUSH",
          "value": "F652222313E28459528D920B65115C16C04F3EFC82AAEDC97BE59F3F377C0D3F"
        }, {
          "begin": 395,
          "end": 410,
          "name": "SWAP1"
        }, {
          "begin": 395,
          "end": 410,
          "name": "SWAP2"
        }, {
          "begin": 395,
          "end": 410,
          "name": "ADD"
        }, {
          "begin": 395,
          "end": 410,
          "name": "SSTORE"
        }, {
          "begin": 416,
          "end": 430,
          "name": "PUSH",
          "value": "6869000000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 416,
          "end": 430,
          "name": "DUP4"
        }, {
          "begin": 416,
          "end": 430,
          "name": "SSTORE"
        }, {
          "begin": 436,
          "end": 443,
          "name": "PUSH",
          "value": "7"
        }, {
          "begin": 436,
          "end": 449,
          "name": "DUP1"
        }, {
          "begin": 436,
          "end": 449,
          "name": "SLOAD"
        }, {
          "begin": 436,
          "end": 449,
          "name": "DUP4"
        }, {
          "begin": 436,
          "end": 449,
          "name": "AND"
        }, {
          "begin": 436,
          "end": 449,
          "name": "PUSH",
          "value": "31"
        }, {
          "begin": 436,
          "end": 449,
          "name": "OR"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "FFFFFFFFFFFFFFFF00"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 455,
          "end": 472,
          "name": "AND"
        }, {
          "begin": 455,
          "end": 472,
          "name": "PUSH",
          "value": "686579000000000000"
        }, {
          "begin": 455,
          "end": 472,
          "name": "OR"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "48"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "C8"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "SUB"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 478,
          "end": 487,
          "name": "AND"
        }, {
          "begin": 478,
          "end": 487,
          "name": "PUSH",
          "value": "7B000000000000000000"
        }, {
          "begin": 478,
          "end": 487,
          "name": "OR"
        }, {
          "begin": 478,
          "end": 487,
          "name": "SWAP1"
        }, {
          "begin": 478,
          "end": 487,
          "name": "SSTORE"
        }, {
          "begin": 525,
          "end": 535,
          "name": "CALLER"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "A0"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "SUB"
        }, {
          "begin": 517,
          "end": 536,
          "name": "AND"
        }, {
          "begin": 517,
          "end": 536,
          "name": "DUP5"
        }, {
          "begin": 517,
          "end": 536,
          "name": "MSTORE"
        }, {
          "begin": 517,
          "end": 524,
          "name": "PUSH",
          "value": "4"
        }, {
          "begin": 395,
          "end": 410,
          "name": "PUSH",
          "value": "20"
        }, {
          "begin": 517,
          "end": 536,
          "name": "SWAP1"
        }, {
          "begin": 517,
          "end": 536,
          "name": "DUP2"
        }, {
          "begin": 517,
          "end": 536,
          "name": "MSTORE"
        }, {
          "begin": 517,
          "end": 536,
          "name": "PUSH",
          "value": "40"
        }, {
          "begin": 517,
          "end": 536,
          "name": "SWAP5"
        }, {
          "begin": 517,
          "end": 536,
          "name": "DUP6"
        }, {
          "begin": 517,
          "end": 536,
          "name": "SWAP1"
        }, {
          "begin": 517,
          "end": 536,
          "name": "KECCAK256"
        }, {
          "begin": 542,
          "end": 552,
          "name": "SWAP4"
        }, {
          "begin": 542,
          "end": 552,
          "name": "DUP5"
        }, {
          "begin": 542,
          "end": 552,
          "name": "ADD"
        }, {
          "begin": 542,
          "end": 557,
          "name": "DUP1"
        }, {
          "begin": 542,
          "end": 557,
          "name": "SLOAD"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "FF00"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 542,
          "end": 557,
          "name": "AND"
        }, {
          "begin": 542,
          "end": 557,
          "name": "PUSH",
          "value": "A00"
        }, {
          "begin": 542,
          "end": 557,
          "name": "OR"
        }, {
          "begin": 563,
          "end": 582,
          "name": "SWAP1"
        }, {
          "begin": 563,
          "end": 582,
          "name": "SWAP4"
        }, {
          "begin": 563,
          "end": 582,
          "name": "AND"
        }, {
          "begin": 563,
          "end": 582,
          "name": "PUSH",
          "value": "4D"
        }, {
          "begin": 563,
          "end": 582,
          "name": "OR"
        }, {
          "begin": 563,
          "end": 582,
          "name": "SWAP1"
        }, {
          "begin": 563,
          "end": 582,
          "name": "SWAP3"
        }, {
          "begin": 563,
          "end": 582,
          "name": "SSTORE"
        }, {
          "begin": 588,
          "end": 610,
          "name": "DUP4"
        }, {
          "begin": 588,
          "end": 610,
          "name": "MLOAD"
        }, {
          "begin": 588,
          "end": 610,
          "name": "DUP1"
        }, {
          "begin": 588,
          "end": 610,
          "name": "DUP6"
        }, {
          "begin": 588,
          "end": 610,
          "name": "ADD"
        }, {
          "begin": 588,
          "end": 610,
          "name": "SWAP1"
        }, {
          "begin": 588,
          "end": 610,
          "name": "SWAP5"
        }, {
          "begin": 588,
          "end": 610,
          "name": "MSTORE"
        }, {
          "begin": 588,
          "end": 610,
          "name": "DUP1"
        }, {
          "begin": 588,
          "end": 610,
          "name": "DUP5"
        }, {
          "begin": 588,
          "end": 610,
          "name": "MSTORE"
        }, {
          "begin": 588,
          "end": 610,
          "name": "PUSH",
          "value": "6A6F736570680000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 588,
          "end": 610,
          "name": "SWAP4"
        }, {
          "begin": 588,
          "end": 610,
          "name": "SWAP1"
        }, {
          "begin": 588,
          "end": 610,
          "name": "SWAP2"
        }, {
          "begin": 588,
          "end": 610,
          "name": "ADD"
        }, {
          "begin": 588,
          "end": 610,
          "name": "SWAP3"
        }, {
          "begin": 588,
          "end": 610,
          "name": "DUP4"
        }, {
          "begin": 588,
          "end": 610,
          "name": "MSTORE"
        }, {
          "begin": 517,
          "end": 536,
          "name": "SWAP1"
        }, {
          "begin": 517,
          "end": 536,
          "name": "SWAP2"
        }, {
          "begin": 588,
          "end": 610,
          "name": "PUSH [tag]",
          "value": "5"
        }, {
          "begin": 588,
          "end": 610,
          "name": "SWAP2"
        }, {
          "begin": 517,
          "end": 536,
          "name": "DUP4"
        }, {
          "begin": 517,
          "end": 536,
          "name": "SWAP2"
        }, {
          "begin": 588,
          "end": 610,
          "name": "SWAP1"
        }, {
          "begin": 588,
          "end": 610,
          "name": "PUSH [tag]",
          "value": "6"
        }, {
          "begin": 588,
          "end": 610,
          "name": "JUMP",
          "value": "[in]"
        }, {
          "begin": 588,
          "end": 610,
          "name": "tag",
          "value": "5"
        }, {
          "begin": 588,
          "end": 610,
          "name": "JUMPDEST"
        }, {
          "begin": 588,
          "end": 610,
          "name": "POP"
        }, {
          "begin": 318,
          "end": 615,
          "name": "POP"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "7"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMP"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "6"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SLOAD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "AND"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ISZERO"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "100"
        }, {
          "begin": 26,
          "end": 666,
          "name": "MUL"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SUB"
        }, {
          "begin": 26,
          "end": 666,
          "name": "AND"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DIV"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 666,
          "name": "MSTORE"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "20"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 666,
          "name": "KECCAK256"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "1F"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "20"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DIV"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "1F"
        }, {
          "begin": 26,
          "end": 666,
          "name": "LT"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "9"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPI"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "MLOAD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "FF"
        }, {
          "begin": 26,
          "end": 666,
          "name": "NOT"
        }, {
          "begin": 26,
          "end": 666,
          "name": "AND"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP4"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "OR"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP6"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SSTORE"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "11"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMP"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "9"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP6"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SSTORE"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ISZERO"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "11"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPI"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "10"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "GT"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ISZERO"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "11"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPI"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "MLOAD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SSTORE"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "20"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "10"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMP"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "11"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": -1,
          "end": -1,
          "name": "POP"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "12"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "POP"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "13"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMP",
          "value": "[in]"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "12"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 666,
          "name": "POP"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMP",
          "value": "[out]"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "13"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "14"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "15"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 666,
          "name": "GT"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ISZERO"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "12"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPI"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP2"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SSTORE"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [tag]",
          "value": "15"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMP"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "14"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 666,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMP",
          "value": "[out]"
        }, {
          "begin": 26,
          "end": 666,
          "name": "tag",
          "value": "7"
        }, {
          "begin": 26,
          "end": 666,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH #[$]",
          "value": "0000000000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 26,
          "end": 666,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH [$]",
          "value": "0000000000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 666,
          "name": "CODECOPY"
        }, {
          "begin": 26,
          "end": 666,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 666,
          "name": "RETURN"
        }],
        ".data": {
          "0": {
            ".auxdata": "a165627a7a72305820ff49770f8c71bd2ec869f7c41d96a272e80e9ce85543b92a09e5b92410b3134d0029",
            ".code": [{
              "begin": 26,
              "end": 666,
              "name": "PUSH",
              "value": "80"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH",
              "value": "40"
            }, {
              "begin": 26,
              "end": 666,
              "name": "MSTORE"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH",
              "value": "4"
            }, {
              "begin": 26,
              "end": 666,
              "name": "CALLDATASIZE"
            }, {
              "begin": 26,
              "end": 666,
              "name": "LT"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH [tag]",
              "value": "1"
            }, {
              "begin": 26,
              "end": 666,
              "name": "JUMPI"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH",
              "value": "FFFFFFFF"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH",
              "value": "100000000000000000000000000000000000000000000000000000000"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH",
              "value": "0"
            }, {
              "begin": 26,
              "end": 666,
              "name": "CALLDATALOAD"
            }, {
              "begin": 26,
              "end": 666,
              "name": "DIV"
            }, {
              "begin": 26,
              "end": 666,
              "name": "AND"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH",
              "value": "A241C089"
            }, {
              "begin": 26,
              "end": 666,
              "name": "DUP2"
            }, {
              "begin": 26,
              "end": 666,
              "name": "EQ"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH [tag]",
              "value": "2"
            }, {
              "begin": 26,
              "end": 666,
              "name": "JUMPI"
            }, {
              "begin": 26,
              "end": 666,
              "name": "tag",
              "value": "1"
            }, {
              "begin": 26,
              "end": 666,
              "name": "JUMPDEST"
            }, {
              "begin": 26,
              "end": 666,
              "name": "PUSH",
              "value": "0"
            }, {
              "begin": 26,
              "end": 666,
              "name": "DUP1"
            }, {
              "begin": 26,
              "end": 666,
              "name": "REVERT"
            }, {
              "begin": 621,
              "end": 663,
              "name": "tag",
              "value": "2"
            }, {
              "begin": 621,
              "end": 663,
              "name": "JUMPDEST"
            }, {
              "begin": 621,
              "end": 663,
              "name": "CALLVALUE"
            }, {
              "begin": 8,
              "end": 17,
              "name": "DUP1"
            }, {
              "begin": 5,
              "end": 7,
              "name": "ISZERO"
            }, {
              "begin": 5,
              "end": 7,
              "name": "PUSH [tag]",
              "value": "3"
            }, {
              "begin": 5,
              "end": 7,
              "name": "JUMPI"
            }, {
              "begin": 30,
              "end": 31,
              "name": "PUSH",
              "value": "0"
            }, {
              "begin": 27,
              "end": 28,
              "name": "DUP1"
            }, {
              "begin": 20,
              "end": 32,
              "name": "REVERT"
            }, {
              "begin": 5,
              "end": 7,
              "name": "tag",
              "value": "3"
            }, {
              "begin": 5,
              "end": 7,
              "name": "JUMPDEST"
            }, {
              "begin": 621,
              "end": 663,
              "name": "POP"
            }, {
              "begin": 621,
              "end": 663,
              "name": "PUSH [tag]",
              "value": "4"
            }, {
              "begin": 621,
              "end": 663,
              "name": "PUSH [tag]",
              "value": "5"
            }, {
              "begin": 621,
              "end": 663,
              "name": "JUMP"
            }, {
              "begin": 621,
              "end": 663,
              "name": "tag",
              "value": "4"
            }, {
              "begin": 621,
              "end": 663,
              "name": "JUMPDEST"
            }, {
              "begin": 621,
              "end": 663,
              "name": "STOP"
            }, {
              "begin": 621,
              "end": 663,
              "name": "tag",
              "value": "5"
            }, {
              "begin": 621,
              "end": 663,
              "name": "JUMPDEST"
            }, {
              "begin": 657,
              "end": 658,
              "name": "PUSH",
              "value": "2"
            }, {
              "begin": 653,
              "end": 658,
              "name": "DUP1"
            }, {
              "begin": 653,
              "end": 658,
              "name": "SLOAD"
            }, {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "value": "FF"
            }, {
              "begin": -1,
              "end": -1,
              "name": "NOT"
            }, {
              "begin": 653,
              "end": 658,
              "name": "AND"
            }, {
              "begin": 653,
              "end": 658,
              "name": "DUP2"
            }, {
              "begin": 653,
              "end": 658,
              "name": "OR"
            }, {
              "begin": 653,
              "end": 658,
              "name": "SWAP1"
            }, {
              "begin": 653,
              "end": 658,
              "name": "SSTORE"
            }, {
              "begin": 621,
              "end": 663,
              "name": "JUMP",
              "value": "[out]"
            }]
          }
        }
      },
      "bytecode": "608060405234801561001057600080fd5b50600080547401000000000000000000000000000000000000000060a060020a60ff02199091161781556002805460ff199081166001908117835560039283556005805483169093179092556006805480840182557f68656c6c6f0000000000000000000000000000000000000000000000000000007ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f909101557f6869000000000000000000000000000000000000000000000000000000000000835560078054831660311768ffffffffffffffff0019166868657900000000000017604860020a60c860020a031916697b00000000000000000017905533600160a060020a0316845260046020908152604094859020938401805461ff001916610a0017909316604d1790925583518085019094528084527f6a6f73657068000000000000000000000000000000000000000000000000000093909101928352909161017a91839190610181565b505061021c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101c257805160ff19168380011785556101ef565b828001600101855582156101ef579182015b828111156101ef5782518255916020019190600101906101d4565b506101fb9291506101ff565b5090565b61021991905b808211156101fb5760008155600101610205565b90565b60918061022a6000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a241c08981146043575b600080fd5b348015604e57600080fd5b5060556057565b005b6002805460ff1916811790555600a165627a7a72305820ff49770f8c71bd2ec869f7c41d96a272e80e9ce85543b92a09e5b92410b3134d0029",
      "functionHashes": {
        "updateContract()": "a241c089"
      },
      "gasEstimates": {
        "creation": [null, 29000],
        "external": {
          "updateContract()": 20354
        },
        "internal": {}
      },
      "interface": "[{\"constant\":false,\"inputs\":[],\"name\":\"updateContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]",
      "metadata": "{\"compiler\":{\"version\":\"0.4.23+commit.124ca40d\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"updateContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"myContract\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x633731872fa47c4e5c513c0cf34599e97d245d4eea6100dc0bfb0695ffa288a7\",\"urls\":[\"bzzr://6fe799cb1e61722d6155305783c01f0789ca684c39fd9721c1e6b0255c0a2aa9\"]}},\"version\":1}",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH21 0x10000000000000000000000000000000000000000 PUSH1 0xA0 PUSH1 0x2 EXP PUSH1 0xFF MUL NOT SWAP1 SWAP2 AND OR DUP2 SSTORE PUSH1 0x2 DUP1 SLOAD PUSH1 0xFF NOT SWAP1 DUP2 AND PUSH1 0x1 SWAP1 DUP2 OR DUP4 SSTORE PUSH1 0x3 SWAP3 DUP4 SSTORE PUSH1 0x5 DUP1 SLOAD DUP4 AND SWAP1 SWAP4 OR SWAP1 SWAP3 SSTORE PUSH1 0x6 DUP1 SLOAD DUP1 DUP5 ADD DUP3 SSTORE PUSH32 0x68656C6C6F000000000000000000000000000000000000000000000000000000 PUSH32 0xF652222313E28459528D920B65115C16C04F3EFC82AAEDC97BE59F3F377C0D3F SWAP1 SWAP2 ADD SSTORE PUSH32 0x6869000000000000000000000000000000000000000000000000000000000000 DUP4 SSTORE PUSH1 0x7 DUP1 SLOAD DUP4 AND PUSH1 0x31 OR PUSH9 0xFFFFFFFFFFFFFFFF00 NOT AND PUSH9 0x686579000000000000 OR PUSH1 0x48 PUSH1 0x2 EXP PUSH1 0xC8 PUSH1 0x2 EXP SUB NOT AND PUSH10 0x7B000000000000000000 OR SWAP1 SSTORE CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP5 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP5 DUP6 SWAP1 KECCAK256 SWAP4 DUP5 ADD DUP1 SLOAD PUSH2 0xFF00 NOT AND PUSH2 0xA00 OR SWAP1 SWAP4 AND PUSH1 0x4D OR SWAP1 SWAP3 SSTORE DUP4 MLOAD DUP1 DUP6 ADD SWAP1 SWAP5 MSTORE DUP1 DUP5 MSTORE PUSH32 0x6A6F736570680000000000000000000000000000000000000000000000000000 SWAP4 SWAP1 SWAP2 ADD SWAP3 DUP4 MSTORE SWAP1 SWAP2 PUSH2 0x17A SWAP2 DUP4 SWAP2 SWAP1 PUSH2 0x181 JUMP JUMPDEST POP POP PUSH2 0x21C JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x1C2 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x1EF JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x1EF JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x1EF JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x1D4 JUMP JUMPDEST POP PUSH2 0x1FB SWAP3 SWAP2 POP PUSH2 0x1FF JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x219 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x1FB JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x205 JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x91 DUP1 PUSH2 0x22A PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH1 0x3E JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0xA241C089 DUP2 EQ PUSH1 0x43 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x4E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x55 PUSH1 0x57 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x2 DUP1 SLOAD PUSH1 0xFF NOT AND DUP2 OR SWAP1 SSTORE JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 SELFDESTRUCT 0x49 PUSH24 0xF8C71BD2EC869F7C41D96A272E80E9CE85543B92A09E5B9 0x24 LT 0xb3 SGT 0x4d STOP 0x29 ",
      "runtimeBytecode": "608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a241c08981146043575b600080fd5b348015604e57600080fd5b5060556057565b005b6002805460ff1916811790555600a165627a7a72305820ff49770f8c71bd2ec869f7c41d96a272e80e9ce85543b92a09e5b92410b3134d0029",
      "srcmap": "26:640:0:-;;;318:297;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;493:21:0;345:11;;;-1:-1:-1;;;;;;345:11:0;;;;;;362:1;:5;;-1:-1:-1;;362:5:0;;;-1:-1:-1;362:5:0;;;;;373:1;:5;;;384:1;:5;;;;;;;;;;395:1;27:10:-1;;23:18;;;45:23;;395:15:0;;;;;;416:14;;;436:7;:13;;;;;;-1:-1:-1;;455:17:0;;;-1:-1:-1;;;;;;;;478:9:0;;;;;525:10;-1:-1:-1;;;;;517:19:0;;;:7;395:15;517:19;;;;;;;;542:10;;;:15;;-1:-1:-1;;542:15:0;;;563:19;;;;;;;;588:22;;;;;;;;;;;;;;;;;;;517:19;;588:22;;517:19;;588:22;;:::i;:::-;;318:297;26:640;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26:640:0;;;-1:-1:-1;26:640:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
      "srcmapRuntime": "26:640:0:-;;;;;;;;;;;;;;;;;;;;;;;621:42;;8:9:-1;5:2;;;30:1;27;20:12;5:2;621:42:0;;;;;;;657:1;653:5;;-1:-1:-1;;653:5:0;;;;;621:42::o"
    },
    source: ["pragma solidity ^0.4.21;", "", "contract myContract {", "  struct Player {", "    string name; ", "    bytes1 gender;", "    uint8 age;", "  }", "", "  address tester;", "  bool test;  ", "  bytes32 teststr;", "  uint8 a;", "  uint256 b;", "  mapping(address => Player) players;", "  uint8 c;", "  bytes32[] d;", "  bytes1 oneByte;", "  bytes8 eightByte;", "  int128 hey;", "", "  constructor() public {", "    test = true;", "    a = 1;", "    b = 2;", "    c = 3;", "    d.push(\"hello\");", "    teststr = \"hi\";", "    oneByte = \"1\";", "    eightByte = \"hey\";", "    hey = 123;", "    Player storage sender = players[msg.sender];", "    sender.age = 10;", "    sender.gender = \"M\";", "    sender.name = \"joseph\";", "  }", "  ", "  function updateContract() {", "    a = 2;", "  }", "", "}"],
>>>>>>> ebebb28e0c6d2745897217f28fa2591f3593eb65
    gasEst: 321448,
  },
  newContract: {
    info: {
<<<<<<< HEAD
      contractName: 'myContract',
      assembly: {
        '.code': [
          { begin: 26, end: 663, name: 'PUSH', value: '80' },
          { begin: 26, end: 663, name: 'PUSH', value: '40' },
          { begin: 26, end: 663, name: 'MSTORE' },
          { begin: 315, end: 612, name: 'CALLVALUE' },
          { begin: 8, end: 17, name: 'DUP1' },
          { begin: 5, end: 7, name: 'ISZERO' },
          { begin: 5, end: 7, name: 'PUSH [tag]', value: '1' },
          { begin: 5, end: 7, name: 'JUMPI' },
          { begin: 30, end: 31, name: 'PUSH', value: '0' },
          { begin: 27, end: 28, name: 'DUP1' },
          { begin: 20, end: 32, name: 'REVERT' },
          { begin: 5, end: 7, name: 'tag', value: '1' },
          { begin: 5, end: 7, name: 'JUMPDEST' },
          { begin: -1, end: -1, name: 'POP' },
          { begin: 490, end: 511, name: 'PUSH', value: '0' },
          { begin: 342, end: 353, name: 'DUP1' },
          { begin: 342, end: 353, name: 'SLOAD' },
          { begin: 374, end: 375, name: 'PUSH', value: '2' },
          { begin: 370, end: 375, name: 'DUP1' },
          { begin: 370, end: 375, name: 'SSTORE' },
          { begin: 349, end: 353, name: 'PUSH', value: '1' },
          {
            begin: 342,
            end: 353,
            name: 'PUSH',
            value: '100000000000000000000000000000000000000000000000000000000000000',
          },
          { begin: -1, end: -1, name: 'PUSH', value: '1' },
          { begin: -1, end: -1, name: 'PUSH', value: 'F8' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'SUB' },
          { begin: 342, end: 353, name: 'SWAP1' },
          { begin: 342, end: 353, name: 'SWAP3' },
          { begin: 342, end: 353, name: 'AND' },
          { begin: 342, end: 353, name: 'SWAP2' },
          { begin: 342, end: 353, name: 'SWAP1' },
          { begin: 342, end: 353, name: 'SWAP2' },
          { begin: 342, end: 353, name: 'OR' },
          { begin: -1, end: -1, name: 'PUSH', value: 'FF' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 359, end: 364, name: 'SWAP1' },
          { begin: 359, end: 364, name: 'DUP2' },
          { begin: 359, end: 364, name: 'AND' },
          { begin: 359, end: 364, name: 'DUP3' },
          { begin: 359, end: 364, name: 'OR' },
          { begin: -1, end: -1, name: 'PUSH', value: 'F0' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'PUSH', value: 'FF' },
          { begin: -1, end: -1, name: 'MUL' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 381, end: 386, name: 'AND' },
          {
            begin: 381,
            end: 386,
            name: 'PUSH',
            value: '3000000000000000000000000000000000000000000000000000000000000',
          },
          { begin: 381, end: 386, name: 'OR' },
          { begin: 381, end: 386, name: 'DUP4' },
          { begin: 381, end: 386, name: 'SSTORE' },
          { begin: 392, end: 393, name: 'PUSH', value: '5' },
          { begin: 27, end: 37, name: 'DUP1' },
          { begin: 27, end: 37, name: 'SLOAD' },
          { begin: 23, end: 41, name: 'DUP1' },
          { begin: 23, end: 41, name: 'DUP5' },
          { begin: 23, end: 41, name: 'ADD' },
          { begin: 45, end: 68, name: 'SWAP1' },
          { begin: 45, end: 68, name: 'SWAP2' },
          { begin: 45, end: 68, name: 'SSTORE' },
          {
            begin: 392,
            end: 407,
            name: 'PUSH',
            value: '68656C6C6F000000000000000000000000000000000000000000000000000000',
          },
          {
            begin: 392,
            end: 407,
            name: 'PUSH',
            value: '36B6384B5ECA791C62761152D0C79BB0604C104A5FB6F4EB0703F3154BB3DB0',
          },
          { begin: 392, end: 407, name: 'SWAP1' },
          { begin: 392, end: 407, name: 'SWAP2' },
          { begin: 392, end: 407, name: 'ADD' },
          { begin: 392, end: 407, name: 'SSTORE' },
          {
            begin: 413,
            end: 427,
            name: 'PUSH',
            value: '6869000000000000000000000000000000000000000000000000000000000000',
          },
          { begin: 385, end: 386, name: 'PUSH', value: '3' },
          { begin: 413, end: 427, name: 'SSTORE' },
          { begin: 433, end: 446, name: 'DUP3' },
          { begin: 433, end: 446, name: 'SLOAD' },
          { begin: -1, end: -1, name: 'PUSH', value: 'E8' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'PUSH', value: 'FF' },
          { begin: -1, end: -1, name: 'MUL' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 433, end: 446, name: 'AND' },
          {
            begin: 433,
            end: 446,
            name: 'PUSH',
            value: '310000000000000000000000000000000000000000000000000000000000',
          },
          { begin: 433, end: 446, name: 'OR' },
          { begin: -1, end: -1, name: 'PUSH', value: 'A8' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'PUSH', value: 'E8' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'SUB' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 452, end: 469, name: 'AND' },
          {
            begin: 452,
            end: 469,
            name: 'PUSH',
            value: '6865790000000000000000000000000000000000000000000000000000',
          },
          { begin: 452, end: 469, name: 'OR' },
          { begin: 452, end: 469, name: 'DUP4' },
          { begin: 452, end: 469, name: 'SSTORE' },
          { begin: 475, end: 484, name: 'DUP2' },
          { begin: 475, end: 484, name: 'SLOAD' },
          { begin: 481, end: 484, name: 'PUSH', value: '7B' },
          { begin: -1, end: -1, name: 'PUSH', value: '1' },
          { begin: -1, end: -1, name: 'PUSH', value: '80' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'SUB' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 475, end: 484, name: 'SWAP1' },
          { begin: 475, end: 484, name: 'SWAP2' },
          { begin: 475, end: 484, name: 'AND' },
          { begin: 475, end: 484, name: 'OR' },
          { begin: 475, end: 484, name: 'DUP3' },
          { begin: 475, end: 484, name: 'SSTORE' },
          { begin: 522, end: 532, name: 'CALLER' },
          { begin: -1, end: -1, name: 'PUSH', value: '1' },
          { begin: -1, end: -1, name: 'PUSH', value: 'A0' },
          { begin: -1, end: -1, name: 'PUSH', value: '2' },
          { begin: -1, end: -1, name: 'EXP' },
          { begin: -1, end: -1, name: 'SUB' },
          { begin: 514, end: 533, name: 'AND' },
          { begin: 514, end: 533, name: 'DUP4' },
          { begin: 514, end: 533, name: 'MSTORE' },
          { begin: 514, end: 521, name: 'PUSH', value: '4' },
          { begin: 392, end: 407, name: 'PUSH', value: '20' },
          { begin: 514, end: 533, name: 'SWAP1' },
          { begin: 514, end: 533, name: 'DUP2' },
          { begin: 514, end: 533, name: 'MSTORE' },
          { begin: 514, end: 533, name: 'PUSH', value: '40' },
          { begin: 514, end: 533, name: 'SWAP4' },
          { begin: 514, end: 533, name: 'DUP5' },
          { begin: 514, end: 533, name: 'SWAP1' },
          { begin: 514, end: 533, name: 'KECCAK256' },
          { begin: 539, end: 554, name: 'DUP1' },
          { begin: 539, end: 554, name: 'SLOAD' },
          { begin: 552, end: 554, name: 'PUSH', value: 'A' },
          { begin: 539, end: 554, name: 'SWAP4' },
          { begin: 539, end: 554, name: 'AND' },
          { begin: 539, end: 554, name: 'SWAP3' },
          { begin: 539, end: 554, name: 'SWAP1' },
          { begin: 539, end: 554, name: 'SWAP3' },
          { begin: 539, end: 554, name: 'OR' },
          { begin: -1, end: -1, name: 'PUSH', value: 'FF00' },
          { begin: -1, end: -1, name: 'NOT' },
          { begin: 560, end: 579, name: 'AND' },
          { begin: 560, end: 579, name: 'PUSH', value: '4D00' },
          { begin: 560, end: 579, name: 'OR' },
          { begin: 560, end: 579, name: 'DUP3' },
          { begin: 560, end: 579, name: 'SSTORE' },
          { begin: 585, end: 607, name: 'DUP4' },
          { begin: 585, end: 607, name: 'MLOAD' },
          { begin: 585, end: 607, name: 'DUP1' },
          { begin: 585, end: 607, name: 'DUP6' },
          { begin: 585, end: 607, name: 'ADD' },
          { begin: 585, end: 607, name: 'SWAP1' },
          { begin: 585, end: 607, name: 'SWAP5' },
          { begin: 585, end: 607, name: 'MSTORE' },
          { begin: 585, end: 607, name: 'PUSH', value: '6' },
          { begin: 585, end: 607, name: 'DUP1' },
          { begin: 585, end: 607, name: 'DUP6' },
          { begin: 585, end: 607, name: 'MSTORE' },
          {
            begin: 585,
            end: 607,
            name: 'PUSH',
            value: '6A6F736570680000000000000000000000000000000000000000000000000000',
          },
          { begin: 585, end: 607, name: 'SWAP5' },
          { begin: 585, end: 607, name: 'SWAP1' },
          { begin: 585, end: 607, name: 'SWAP2' },
          { begin: 585, end: 607, name: 'ADD' },
          { begin: 585, end: 607, name: 'SWAP4' },
          { begin: 585, end: 607, name: 'DUP5' },
          { begin: 585, end: 607, name: 'MSTORE' },
          { begin: 514, end: 533, name: 'SWAP1' },
          { begin: 514, end: 533, name: 'SWAP3' },
          { begin: 585, end: 607, name: 'PUSH [tag]', value: '5' },
          { begin: 585, end: 607, name: 'SWAP3' },
          { begin: 585, end: 596, name: 'DUP5' },
          { begin: 585, end: 596, name: 'ADD' },
          { begin: 585, end: 596, name: 'SWAP2' },
          { begin: 585, end: 607, name: 'PUSH [tag]', value: '6' },
          { begin: 585, end: 607, name: 'JUMP', value: '[in]' },
          { begin: 585, end: 607, name: 'tag', value: '5' },
          { begin: 585, end: 607, name: 'JUMPDEST' },
          { begin: 585, end: 607, name: 'POP' },
          { begin: 315, end: 612, name: 'POP' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '7' },
          { begin: 26, end: 663, name: 'JUMP' },
          { begin: 26, end: 663, name: 'tag', value: '6' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'DUP1' },
          { begin: 26, end: 663, name: 'SLOAD' },
          { begin: 26, end: 663, name: 'PUSH', value: '1' },
          { begin: 26, end: 663, name: 'DUP2' },
          { begin: 26, end: 663, name: 'PUSH', value: '1' },
          { begin: 26, end: 663, name: 'AND' },
          { begin: 26, end: 663, name: 'ISZERO' },
          { begin: 26, end: 663, name: 'PUSH', value: '100' },
          { begin: 26, end: 663, name: 'MUL' },
          { begin: 26, end: 663, name: 'SUB' },
          { begin: 26, end: 663, name: 'AND' },
          { begin: 26, end: 663, name: 'PUSH', value: '2' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'DIV' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'PUSH', value: '0' },
          { begin: 26, end: 663, name: 'MSTORE' },
          { begin: 26, end: 663, name: 'PUSH', value: '20' },
          { begin: 26, end: 663, name: 'PUSH', value: '0' },
          { begin: 26, end: 663, name: 'KECCAK256' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'PUSH', value: '1F' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'PUSH', value: '20' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'DIV' },
          { begin: 26, end: 663, name: 'DUP2' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'SWAP3' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'PUSH', value: '1F' },
          { begin: 26, end: 663, name: 'LT' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '9' },
          { begin: 26, end: 663, name: 'JUMPI' },
          { begin: 26, end: 663, name: 'DUP1' },
          { begin: 26, end: 663, name: 'MLOAD' },
          { begin: 26, end: 663, name: 'PUSH', value: 'FF' },
          { begin: 26, end: 663, name: 'NOT' },
          { begin: 26, end: 663, name: 'AND' },
          { begin: 26, end: 663, name: 'DUP4' },
          { begin: 26, end: 663, name: 'DUP1' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'OR' },
          { begin: 26, end: 663, name: 'DUP6' },
          { begin: 26, end: 663, name: 'SSTORE' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '11' },
          { begin: 26, end: 663, name: 'JUMP' },
          { begin: 26, end: 663, name: 'tag', value: '9' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'DUP1' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'PUSH', value: '1' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'DUP6' },
          { begin: 26, end: 663, name: 'SSTORE' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'ISZERO' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '11' },
          { begin: 26, end: 663, name: 'JUMPI' },
          { begin: 26, end: 663, name: 'SWAP2' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'tag', value: '10' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'DUP2' },
          { begin: 26, end: 663, name: 'GT' },
          { begin: 26, end: 663, name: 'ISZERO' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '11' },
          { begin: 26, end: 663, name: 'JUMPI' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'MLOAD' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'SSTORE' },
          { begin: 26, end: 663, name: 'SWAP2' },
          { begin: 26, end: 663, name: 'PUSH', value: '20' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'SWAP2' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'PUSH', value: '1' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '10' },
          { begin: 26, end: 663, name: 'JUMP' },
          { begin: 26, end: 663, name: 'tag', value: '11' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          { begin: -1, end: -1, name: 'POP' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '12' },
          { begin: 26, end: 663, name: 'SWAP3' },
          { begin: 26, end: 663, name: 'SWAP2' },
          { begin: -1, end: -1, name: 'POP' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '13' },
          { begin: 26, end: 663, name: 'JUMP', value: '[in]' },
          { begin: 26, end: 663, name: 'tag', value: '12' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          { begin: 26, end: 663, name: 'POP' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'JUMP', value: '[out]' },
          { begin: 26, end: 663, name: 'tag', value: '13' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '14' },
          { begin: 26, end: 663, name: 'SWAP2' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'tag', value: '15' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          { begin: 26, end: 663, name: 'DUP1' },
          { begin: 26, end: 663, name: 'DUP3' },
          { begin: 26, end: 663, name: 'GT' },
          { begin: 26, end: 663, name: 'ISZERO' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '12' },
          { begin: 26, end: 663, name: 'JUMPI' },
          { begin: 26, end: 663, name: 'PUSH', value: '0' },
          { begin: 26, end: 663, name: 'DUP2' },
          { begin: 26, end: 663, name: 'SSTORE' },
          { begin: 26, end: 663, name: 'PUSH', value: '1' },
          { begin: 26, end: 663, name: 'ADD' },
          { begin: 26, end: 663, name: 'PUSH [tag]', value: '15' },
          { begin: 26, end: 663, name: 'JUMP' },
          { begin: 26, end: 663, name: 'tag', value: '14' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          { begin: 26, end: 663, name: 'SWAP1' },
          { begin: 26, end: 663, name: 'JUMP', value: '[out]' },
          { begin: 26, end: 663, name: 'tag', value: '7' },
          { begin: 26, end: 663, name: 'JUMPDEST' },
          {
            begin: 26,
            end: 663,
            name: 'PUSH #[$]',
            value: '0000000000000000000000000000000000000000000000000000000000000000',
          },
          { begin: 26, end: 663, name: 'DUP1' },
          {
            begin: 26,
            end: 663,
            name: 'PUSH [$]',
            value: '0000000000000000000000000000000000000000000000000000000000000000',
          },
          { begin: 26, end: 663, name: 'PUSH', value: '0' },
          { begin: 26, end: 663, name: 'CODECOPY' },
          { begin: 26, end: 663, name: 'PUSH', value: '0' },
          { begin: 26, end: 663, name: 'RETURN' },
        ],
        '.data': {
          '0': {
            '.auxdata':
              'a165627a7a72305820ee4a35b9f75c5ee9c29b4de7a5f10857c39209c0f0c551ee5e84e5259ec08b960029',
            '.code': [
              { begin: 26, end: 663, name: 'PUSH', value: '80' },
              { begin: 26, end: 663, name: 'PUSH', value: '40' },
              { begin: 26, end: 663, name: 'MSTORE' },
              { begin: 26, end: 663, name: 'PUSH', value: '4' },
              { begin: 26, end: 663, name: 'CALLDATASIZE' },
              { begin: 26, end: 663, name: 'LT' },
              { begin: 26, end: 663, name: 'PUSH [tag]', value: '1' },
              { begin: 26, end: 663, name: 'JUMPI' },
              { begin: 26, end: 663, name: 'PUSH', value: 'FFFFFFFF' },
              {
                begin: 26,
                end: 663,
                name: 'PUSH',
                value: '100000000000000000000000000000000000000000000000000000000',
              },
              { begin: 26, end: 663, name: 'PUSH', value: '0' },
              { begin: 26, end: 663, name: 'CALLDATALOAD' },
              { begin: 26, end: 663, name: 'DIV' },
              { begin: 26, end: 663, name: 'AND' },
              { begin: 26, end: 663, name: 'PUSH', value: 'A241C089' },
              { begin: 26, end: 663, name: 'DUP2' },
              { begin: 26, end: 663, name: 'EQ' },
              { begin: 26, end: 663, name: 'PUSH [tag]', value: '2' },
              { begin: 26, end: 663, name: 'JUMPI' },
              { begin: 26, end: 663, name: 'tag', value: '1' },
              { begin: 26, end: 663, name: 'JUMPDEST' },
              { begin: 26, end: 663, name: 'PUSH', value: '0' },
              { begin: 26, end: 663, name: 'DUP1' },
              { begin: 26, end: 663, name: 'REVERT' },
              { begin: 618, end: 660, name: 'tag', value: '2' },
              { begin: 618, end: 660, name: 'JUMPDEST' },
              { begin: 618, end: 660, name: 'CALLVALUE' },
              { begin: 8, end: 17, name: 'DUP1' },
              { begin: 5, end: 7, name: 'ISZERO' },
              { begin: 5, end: 7, name: 'PUSH [tag]', value: '3' },
              { begin: 5, end: 7, name: 'JUMPI' },
              { begin: 30, end: 31, name: 'PUSH', value: '0' },
              { begin: 27, end: 28, name: 'DUP1' },
              { begin: 20, end: 32, name: 'REVERT' },
              { begin: 5, end: 7, name: 'tag', value: '3' },
              { begin: 5, end: 7, name: 'JUMPDEST' },
              { begin: 618, end: 660, name: 'POP' },
              { begin: 618, end: 660, name: 'PUSH [tag]', value: '4' },
              { begin: 618, end: 660, name: 'PUSH [tag]', value: '5' },
              { begin: 618, end: 660, name: 'JUMP' },
              { begin: 618, end: 660, name: 'tag', value: '4' },
              { begin: 618, end: 660, name: 'JUMPDEST' },
              { begin: 618, end: 660, name: 'STOP' },
              { begin: 618, end: 660, name: 'tag', value: '5' },
              { begin: 618, end: 660, name: 'JUMPDEST' },
              { begin: 650, end: 651, name: 'PUSH', value: '0' },
              { begin: 650, end: 655, name: 'DUP1' },
              { begin: 650, end: 655, name: 'SLOAD' },
              { begin: -1, end: -1, name: 'PUSH', value: 'FF' },
              { begin: -1, end: -1, name: 'NOT' },
              { begin: 650, end: 655, name: 'AND' },
              { begin: 654, end: 655, name: 'PUSH', value: '2' },
              { begin: 650, end: 655, name: 'OR' },
              { begin: 650, end: 655, name: 'SWAP1' },
              { begin: 650, end: 655, name: 'SSTORE' },
              { begin: 618, end: 660, name: 'JUMP', value: '[out]' },
            ],
          },
        },
      },
      bytecode:
        '608060405234801561001057600080fd5b50600080546002805560017f0100000000000000000000000000000000000000000000000000000000000000600160f860020a039092169190911760ff19908116821760f060020a60ff0219167e03000000000000000000000000000000000000000000000000000000000000178355600580548084019091557f68656c6c6f0000000000000000000000000000000000000000000000000000007f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101557f6869000000000000000000000000000000000000000000000000000000000000600355825460e860020a60ff0219167d3100000000000000000000000000000000000000000000000000000000001760a860020a60e860020a0319167c68657900000000000000000000000000000000000000000000000000001783558154607b6001608060020a031990911617825533600160a060020a03168352600460209081526040938490208054600a93169290921761ff001916614d00178255835180850190945260068085527f6a6f7365706800000000000000000000000000000000000000000000000000009490910193845290926101d2928401916101d9565b5050610274565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021a57805160ff1916838001178555610247565b82800160010185558215610247579182015b8281111561024757825182559160200191906001019061022c565b50610253929150610257565b5090565b61027191905b80821115610253576000815560010161025d565b90565b6092806102826000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a241c08981146043575b600080fd5b348015604e57600080fd5b5060556057565b005b6000805460ff191660021790555600a165627a7a72305820ee4a35b9f75c5ee9c29b4de7a5f10857c39209c0f0c551ee5e84e5259ec08b960029',
      functionHashes: { 'updateContract()': 'a241c089' },
      gasEstimates: {
        creation: [null, 29200],
        external: { 'updateContract()': 20354 },
        internal: {},
      },
      interface:
        '[{"constant":false,"inputs":[],"name":"updateContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]',
      metadata:
        '{"compiler":{"version":"0.4.23+commit.124ca40d"},"language":"Solidity","output":{"abi":[{"constant":false,"inputs":[],"name":"updateContract","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}],"devdoc":{"methods":{}},"userdoc":{"methods":{}}},"settings":{"compilationTarget":{"":"myContract"},"evmVersion":"byzantium","libraries":{},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"":{"keccak256":"0xb23c58379a117787cefeeba4a7b4e31d30bca3b5a052fba5cb1e1cd610b58699","urls":["bzzr://e5830c773ff4f142278c0c1b0bab9b3e4ee08ffe9cf67c681a762d714fce65a1"]}},"version":1}',
      opcodes:
        'PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x2 DUP1 SSTORE PUSH1 0x1 PUSH32 0x100000000000000000000000000000000000000000000000000000000000000 PUSH1 0x1 PUSH1 0xF8 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR PUSH1 0xFF NOT SWAP1 DUP2 AND DUP3 OR PUSH1 0xF0 PUSH1 0x2 EXP PUSH1 0xFF MUL NOT AND PUSH31 0x3000000000000000000000000000000000000000000000000000000000000 OR DUP4 SSTORE PUSH1 0x5 DUP1 SLOAD DUP1 DUP5 ADD SWAP1 SWAP2 SSTORE PUSH32 0x68656C6C6F000000000000000000000000000000000000000000000000000000 PUSH32 0x36B6384B5ECA791C62761152D0C79BB0604C104A5FB6F4EB0703F3154BB3DB0 SWAP1 SWAP2 ADD SSTORE PUSH32 0x6869000000000000000000000000000000000000000000000000000000000000 PUSH1 0x3 SSTORE DUP3 SLOAD PUSH1 0xE8 PUSH1 0x2 EXP PUSH1 0xFF MUL NOT AND PUSH30 0x310000000000000000000000000000000000000000000000000000000000 OR PUSH1 0xA8 PUSH1 0x2 EXP PUSH1 0xE8 PUSH1 0x2 EXP SUB NOT AND PUSH29 0x6865790000000000000000000000000000000000000000000000000000 OR DUP4 SSTORE DUP2 SLOAD PUSH1 0x7B PUSH1 0x1 PUSH1 0x80 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP2 AND OR DUP3 SSTORE CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP4 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP4 DUP5 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xA SWAP4 AND SWAP3 SWAP1 SWAP3 OR PUSH2 0xFF00 NOT AND PUSH2 0x4D00 OR DUP3 SSTORE DUP4 MLOAD DUP1 DUP6 ADD SWAP1 SWAP5 MSTORE PUSH1 0x6 DUP1 DUP6 MSTORE PUSH32 0x6A6F736570680000000000000000000000000000000000000000000000000000 SWAP5 SWAP1 SWAP2 ADD SWAP4 DUP5 MSTORE SWAP1 SWAP3 PUSH2 0x1D2 SWAP3 DUP5 ADD SWAP2 PUSH2 0x1D9 JUMP JUMPDEST POP POP PUSH2 0x274 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x21A JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x247 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x247 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x247 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x22C JUMP JUMPDEST POP PUSH2 0x253 SWAP3 SWAP2 POP PUSH2 0x257 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x271 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x253 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x25D JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x92 DUP1 PUSH2 0x282 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH1 0x3E JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0xA241C089 DUP2 EQ PUSH1 0x43 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x4E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x55 PUSH1 0x57 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x2 OR SWAP1 SSTORE JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xee 0x4a CALLDATALOAD 0xb9 0xf7 0x5c 0x5e 0xe9 0xc2 SWAP12 0x4d 0xe7 0xa5 CALL ADDMOD JUMPI 0xc3 SWAP3 MULMOD 0xc0 CREATE 0xc5 MLOAD 0xee 0x5e DUP5 0xe5 0x25 SWAP15 0xc0 DUP12 SWAP7 STOP 0x29 ',
      runtimeBytecode:
        '608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a241c08981146043575b600080fd5b348015604e57600080fd5b5060556057565b005b6000805460ff191660021790555600a165627a7a72305820ee4a35b9f75c5ee9c29b4de7a5f10857c39209c0f0c551ee5e84e5259ec08b960029',
      srcmap:
        '26:637:0:-;;;315:297;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;490:21:0;342:11;;374:1;370:5;;349:4;342:11;-1:-1:-1;;;;;342:11:0;;;;;;;-1:-1:-1;;359:5:0;;;;;-1:-1:-1;;;;;;381:5:0;;;;;392:1;27:10:-1;;23:18;;;45:23;;;392:15:0;;;;;;413:14;385:1;413:14;433:13;;-1:-1:-1;;;;;;433:13:0;;;-1:-1:-1;;;;;;;;452:17:0;;;;;475:9;;481:3;-1:-1:-1;;;;;;475:9:0;;;;;;522:10;-1:-1:-1;;;;;514:19:0;;;:7;392:15;514:19;;;;;;;;539:15;;552:2;539:15;;;;;;-1:-1:-1;;560:19:0;;;;;585:22;;;;;;;;;;;;;;;;;;;;514:19;;585:22;;:11;;;:22;:::i;:::-;;315:297;26:637;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26:637:0;;;-1:-1:-1;26:637:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;',
      srcmapRuntime:
        '26:637:0:-;;;;;;;;;;;;;;;;;;;;;;;618:42;;8:9:-1;5:2;;;30:1;27;20:12;5:2;618:42:0;;;;;;;650:1;:5;;-1:-1:-1;;650:5:0;654:1;650:5;;;618:42::o',
    },
    source: [
      'pragma solidity ^0.4.21;',
      '',
      'contract myContract {',
      '  struct Player {',
      '    uint8 age;',
      '    bytes1 gender;',
      '    string name;',
      '  }',
      '',
      '  uint8 a;',
      '  address tester;',
      '  bytes8 eightByte;',
      '  bytes1 oneByte;',
      '  uint8 c;',
      '  bool test;',
      '  int128 hey;',
      '  uint256 b;',
      '  bytes32 teststr;',
      '  mapping(address => Player) players;',
      '  bytes32[] d;',
      '',
      '  constructor() public {',
      '    test = true;',
      '    a = 1;',
      '    b = 2;',
      '    c = 3;',
      '    d.push("hello");',
      '    teststr = "hi";',
      '    oneByte = "1";',
      '    eightByte = "hey";',
      '    hey = 123;',
      '    Player storage sender = players[msg.sender];',
      '    sender.age = 10;',
      '    sender.gender = "M";',
      '    sender.name = "joseph";',
      '  }',
      '  ',
      '  function updateContract() {',
      '    a = 2;',
      '  }',
      '',
      '}',
    ],
    gasEst: 287516,
  },
  difference: 33932,
};
=======
      "assembly": {
        ".code": [{
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "80"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "40"
        }, {
          "begin": 26,
          "end": 663,
          "name": "MSTORE"
        }, {
          "begin": 315,
          "end": 612,
          "name": "CALLVALUE"
        }, {
          "begin": 8,
          "end": 17,
          "name": "DUP1"
        }, {
          "begin": 5,
          "end": 7,
          "name": "ISZERO"
        }, {
          "begin": 5,
          "end": 7,
          "name": "PUSH [tag]",
          "value": "1"
        }, {
          "begin": 5,
          "end": 7,
          "name": "JUMPI"
        }, {
          "begin": 30,
          "end": 31,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 27,
          "end": 28,
          "name": "DUP1"
        }, {
          "begin": 20,
          "end": 32,
          "name": "REVERT"
        }, {
          "begin": 5,
          "end": 7,
          "name": "tag",
          "value": "1"
        }, {
          "begin": 5,
          "end": 7,
          "name": "JUMPDEST"
        }, {
          "begin": -1,
          "end": -1,
          "name": "POP"
        }, {
          "begin": 490,
          "end": 511,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 342,
          "end": 353,
          "name": "DUP1"
        }, {
          "begin": 342,
          "end": 353,
          "name": "SLOAD"
        }, {
          "begin": 374,
          "end": 375,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": 370,
          "end": 375,
          "name": "DUP1"
        }, {
          "begin": 370,
          "end": 375,
          "name": "SSTORE"
        }, {
          "begin": 349,
          "end": 353,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 342,
          "end": 353,
          "name": "PUSH",
          "value": "100000000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "F8"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "SUB"
        }, {
          "begin": 342,
          "end": 353,
          "name": "SWAP1"
        }, {
          "begin": 342,
          "end": 353,
          "name": "SWAP3"
        }, {
          "begin": 342,
          "end": 353,
          "name": "AND"
        }, {
          "begin": 342,
          "end": 353,
          "name": "SWAP2"
        }, {
          "begin": 342,
          "end": 353,
          "name": "SWAP1"
        }, {
          "begin": 342,
          "end": 353,
          "name": "SWAP2"
        }, {
          "begin": 342,
          "end": 353,
          "name": "OR"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "FF"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 359,
          "end": 364,
          "name": "SWAP1"
        }, {
          "begin": 359,
          "end": 364,
          "name": "DUP2"
        }, {
          "begin": 359,
          "end": 364,
          "name": "AND"
        }, {
          "begin": 359,
          "end": 364,
          "name": "DUP3"
        }, {
          "begin": 359,
          "end": 364,
          "name": "OR"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "F0"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "FF"
        }, {
          "begin": -1,
          "end": -1,
          "name": "MUL"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 381,
          "end": 386,
          "name": "AND"
        }, {
          "begin": 381,
          "end": 386,
          "name": "PUSH",
          "value": "3000000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 381,
          "end": 386,
          "name": "OR"
        }, {
          "begin": 381,
          "end": 386,
          "name": "DUP4"
        }, {
          "begin": 381,
          "end": 386,
          "name": "SSTORE"
        }, {
          "begin": 392,
          "end": 393,
          "name": "PUSH",
          "value": "5"
        }, {
          "begin": 27,
          "end": 37,
          "name": "DUP1"
        }, {
          "begin": 27,
          "end": 37,
          "name": "SLOAD"
        }, {
          "begin": 23,
          "end": 41,
          "name": "DUP1"
        }, {
          "begin": 23,
          "end": 41,
          "name": "DUP5"
        }, {
          "begin": 23,
          "end": 41,
          "name": "ADD"
        }, {
          "begin": 45,
          "end": 68,
          "name": "SWAP1"
        }, {
          "begin": 45,
          "end": 68,
          "name": "SWAP2"
        }, {
          "begin": 45,
          "end": 68,
          "name": "SSTORE"
        }, {
          "begin": 392,
          "end": 407,
          "name": "PUSH",
          "value": "68656C6C6F000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 392,
          "end": 407,
          "name": "PUSH",
          "value": "36B6384B5ECA791C62761152D0C79BB0604C104A5FB6F4EB0703F3154BB3DB0"
        }, {
          "begin": 392,
          "end": 407,
          "name": "SWAP1"
        }, {
          "begin": 392,
          "end": 407,
          "name": "SWAP2"
        }, {
          "begin": 392,
          "end": 407,
          "name": "ADD"
        }, {
          "begin": 392,
          "end": 407,
          "name": "SSTORE"
        }, {
          "begin": 413,
          "end": 427,
          "name": "PUSH",
          "value": "6869000000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 385,
          "end": 386,
          "name": "PUSH",
          "value": "3"
        }, {
          "begin": 413,
          "end": 427,
          "name": "SSTORE"
        }, {
          "begin": 433,
          "end": 446,
          "name": "DUP3"
        }, {
          "begin": 433,
          "end": 446,
          "name": "SLOAD"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "E8"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "FF"
        }, {
          "begin": -1,
          "end": -1,
          "name": "MUL"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 433,
          "end": 446,
          "name": "AND"
        }, {
          "begin": 433,
          "end": 446,
          "name": "PUSH",
          "value": "310000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 433,
          "end": 446,
          "name": "OR"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "A8"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "E8"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "SUB"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 452,
          "end": 469,
          "name": "AND"
        }, {
          "begin": 452,
          "end": 469,
          "name": "PUSH",
          "value": "6865790000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 452,
          "end": 469,
          "name": "OR"
        }, {
          "begin": 452,
          "end": 469,
          "name": "DUP4"
        }, {
          "begin": 452,
          "end": 469,
          "name": "SSTORE"
        }, {
          "begin": 475,
          "end": 484,
          "name": "DUP2"
        }, {
          "begin": 475,
          "end": 484,
          "name": "SLOAD"
        }, {
          "begin": 481,
          "end": 484,
          "name": "PUSH",
          "value": "7B"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "80"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "SUB"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 475,
          "end": 484,
          "name": "SWAP1"
        }, {
          "begin": 475,
          "end": 484,
          "name": "SWAP2"
        }, {
          "begin": 475,
          "end": 484,
          "name": "AND"
        }, {
          "begin": 475,
          "end": 484,
          "name": "OR"
        }, {
          "begin": 475,
          "end": 484,
          "name": "DUP3"
        }, {
          "begin": 475,
          "end": 484,
          "name": "SSTORE"
        }, {
          "begin": 522,
          "end": 532,
          "name": "CALLER"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "A0"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "EXP"
        }, {
          "begin": -1,
          "end": -1,
          "name": "SUB"
        }, {
          "begin": 514,
          "end": 533,
          "name": "AND"
        }, {
          "begin": 514,
          "end": 533,
          "name": "DUP4"
        }, {
          "begin": 514,
          "end": 533,
          "name": "MSTORE"
        }, {
          "begin": 514,
          "end": 521,
          "name": "PUSH",
          "value": "4"
        }, {
          "begin": 392,
          "end": 407,
          "name": "PUSH",
          "value": "20"
        }, {
          "begin": 514,
          "end": 533,
          "name": "SWAP1"
        }, {
          "begin": 514,
          "end": 533,
          "name": "DUP2"
        }, {
          "begin": 514,
          "end": 533,
          "name": "MSTORE"
        }, {
          "begin": 514,
          "end": 533,
          "name": "PUSH",
          "value": "40"
        }, {
          "begin": 514,
          "end": 533,
          "name": "SWAP4"
        }, {
          "begin": 514,
          "end": 533,
          "name": "DUP5"
        }, {
          "begin": 514,
          "end": 533,
          "name": "SWAP1"
        }, {
          "begin": 514,
          "end": 533,
          "name": "KECCAK256"
        }, {
          "begin": 539,
          "end": 554,
          "name": "DUP1"
        }, {
          "begin": 539,
          "end": 554,
          "name": "SLOAD"
        }, {
          "begin": 552,
          "end": 554,
          "name": "PUSH",
          "value": "A"
        }, {
          "begin": 539,
          "end": 554,
          "name": "SWAP4"
        }, {
          "begin": 539,
          "end": 554,
          "name": "AND"
        }, {
          "begin": 539,
          "end": 554,
          "name": "SWAP3"
        }, {
          "begin": 539,
          "end": 554,
          "name": "SWAP1"
        }, {
          "begin": 539,
          "end": 554,
          "name": "SWAP3"
        }, {
          "begin": 539,
          "end": 554,
          "name": "OR"
        }, {
          "begin": -1,
          "end": -1,
          "name": "PUSH",
          "value": "FF00"
        }, {
          "begin": -1,
          "end": -1,
          "name": "NOT"
        }, {
          "begin": 560,
          "end": 579,
          "name": "AND"
        }, {
          "begin": 560,
          "end": 579,
          "name": "PUSH",
          "value": "4D00"
        }, {
          "begin": 560,
          "end": 579,
          "name": "OR"
        }, {
          "begin": 560,
          "end": 579,
          "name": "DUP3"
        }, {
          "begin": 560,
          "end": 579,
          "name": "SSTORE"
        }, {
          "begin": 585,
          "end": 607,
          "name": "DUP4"
        }, {
          "begin": 585,
          "end": 607,
          "name": "MLOAD"
        }, {
          "begin": 585,
          "end": 607,
          "name": "DUP1"
        }, {
          "begin": 585,
          "end": 607,
          "name": "DUP6"
        }, {
          "begin": 585,
          "end": 607,
          "name": "ADD"
        }, {
          "begin": 585,
          "end": 607,
          "name": "SWAP1"
        }, {
          "begin": 585,
          "end": 607,
          "name": "SWAP5"
        }, {
          "begin": 585,
          "end": 607,
          "name": "MSTORE"
        }, {
          "begin": 585,
          "end": 607,
          "name": "PUSH",
          "value": "6"
        }, {
          "begin": 585,
          "end": 607,
          "name": "DUP1"
        }, {
          "begin": 585,
          "end": 607,
          "name": "DUP6"
        }, {
          "begin": 585,
          "end": 607,
          "name": "MSTORE"
        }, {
          "begin": 585,
          "end": 607,
          "name": "PUSH",
          "value": "6A6F736570680000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 585,
          "end": 607,
          "name": "SWAP5"
        }, {
          "begin": 585,
          "end": 607,
          "name": "SWAP1"
        }, {
          "begin": 585,
          "end": 607,
          "name": "SWAP2"
        }, {
          "begin": 585,
          "end": 607,
          "name": "ADD"
        }, {
          "begin": 585,
          "end": 607,
          "name": "SWAP4"
        }, {
          "begin": 585,
          "end": 607,
          "name": "DUP5"
        }, {
          "begin": 585,
          "end": 607,
          "name": "MSTORE"
        }, {
          "begin": 514,
          "end": 533,
          "name": "SWAP1"
        }, {
          "begin": 514,
          "end": 533,
          "name": "SWAP3"
        }, {
          "begin": 585,
          "end": 607,
          "name": "PUSH [tag]",
          "value": "5"
        }, {
          "begin": 585,
          "end": 607,
          "name": "SWAP3"
        }, {
          "begin": 585,
          "end": 596,
          "name": "DUP5"
        }, {
          "begin": 585,
          "end": 596,
          "name": "ADD"
        }, {
          "begin": 585,
          "end": 596,
          "name": "SWAP2"
        }, {
          "begin": 585,
          "end": 607,
          "name": "PUSH [tag]",
          "value": "6"
        }, {
          "begin": 585,
          "end": 607,
          "name": "JUMP",
          "value": "[in]"
        }, {
          "begin": 585,
          "end": 607,
          "name": "tag",
          "value": "5"
        }, {
          "begin": 585,
          "end": 607,
          "name": "JUMPDEST"
        }, {
          "begin": 585,
          "end": 607,
          "name": "POP"
        }, {
          "begin": 315,
          "end": 612,
          "name": "POP"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "7"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMP"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "6"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SLOAD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "AND"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ISZERO"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "100"
        }, {
          "begin": 26,
          "end": 663,
          "name": "MUL"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SUB"
        }, {
          "begin": 26,
          "end": 663,
          "name": "AND"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DIV"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 663,
          "name": "MSTORE"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "20"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 663,
          "name": "KECCAK256"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "1F"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "20"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DIV"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "1F"
        }, {
          "begin": 26,
          "end": 663,
          "name": "LT"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "9"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPI"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "MLOAD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "FF"
        }, {
          "begin": 26,
          "end": 663,
          "name": "NOT"
        }, {
          "begin": 26,
          "end": 663,
          "name": "AND"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP4"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "OR"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP6"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SSTORE"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "11"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMP"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "9"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP6"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SSTORE"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ISZERO"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "11"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPI"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "10"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "GT"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ISZERO"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "11"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPI"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "MLOAD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SSTORE"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "20"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "10"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMP"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "11"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": -1,
          "end": -1,
          "name": "POP"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "12"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP2"
        }, {
          "begin": -1,
          "end": -1,
          "name": "POP"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "13"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMP",
          "value": "[in]"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "12"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 663,
          "name": "POP"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMP",
          "value": "[out]"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "13"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "14"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "15"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP3"
        }, {
          "begin": 26,
          "end": 663,
          "name": "GT"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ISZERO"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "12"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPI"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP2"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SSTORE"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "ADD"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [tag]",
          "value": "15"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMP"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "14"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 663,
          "name": "SWAP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMP",
          "value": "[out]"
        }, {
          "begin": 26,
          "end": 663,
          "name": "tag",
          "value": "7"
        }, {
          "begin": 26,
          "end": 663,
          "name": "JUMPDEST"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH #[$]",
          "value": "0000000000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 26,
          "end": 663,
          "name": "DUP1"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH [$]",
          "value": "0000000000000000000000000000000000000000000000000000000000000000"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 663,
          "name": "CODECOPY"
        }, {
          "begin": 26,
          "end": 663,
          "name": "PUSH",
          "value": "0"
        }, {
          "begin": 26,
          "end": 663,
          "name": "RETURN"
        }],
        ".data": {
          "0": {
            ".auxdata": "a165627a7a72305820ee4a35b9f75c5ee9c29b4de7a5f10857c39209c0f0c551ee5e84e5259ec08b960029",
            ".code": [{
              "begin": 26,
              "end": 663,
              "name": "PUSH",
              "value": "80"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH",
              "value": "40"
            }, {
              "begin": 26,
              "end": 663,
              "name": "MSTORE"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH",
              "value": "4"
            }, {
              "begin": 26,
              "end": 663,
              "name": "CALLDATASIZE"
            }, {
              "begin": 26,
              "end": 663,
              "name": "LT"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH [tag]",
              "value": "1"
            }, {
              "begin": 26,
              "end": 663,
              "name": "JUMPI"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH",
              "value": "FFFFFFFF"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH",
              "value": "100000000000000000000000000000000000000000000000000000000"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH",
              "value": "0"
            }, {
              "begin": 26,
              "end": 663,
              "name": "CALLDATALOAD"
            }, {
              "begin": 26,
              "end": 663,
              "name": "DIV"
            }, {
              "begin": 26,
              "end": 663,
              "name": "AND"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH",
              "value": "A241C089"
            }, {
              "begin": 26,
              "end": 663,
              "name": "DUP2"
            }, {
              "begin": 26,
              "end": 663,
              "name": "EQ"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH [tag]",
              "value": "2"
            }, {
              "begin": 26,
              "end": 663,
              "name": "JUMPI"
            }, {
              "begin": 26,
              "end": 663,
              "name": "tag",
              "value": "1"
            }, {
              "begin": 26,
              "end": 663,
              "name": "JUMPDEST"
            }, {
              "begin": 26,
              "end": 663,
              "name": "PUSH",
              "value": "0"
            }, {
              "begin": 26,
              "end": 663,
              "name": "DUP1"
            }, {
              "begin": 26,
              "end": 663,
              "name": "REVERT"
            }, {
              "begin": 618,
              "end": 660,
              "name": "tag",
              "value": "2"
            }, {
              "begin": 618,
              "end": 660,
              "name": "JUMPDEST"
            }, {
              "begin": 618,
              "end": 660,
              "name": "CALLVALUE"
            }, {
              "begin": 8,
              "end": 17,
              "name": "DUP1"
            }, {
              "begin": 5,
              "end": 7,
              "name": "ISZERO"
            }, {
              "begin": 5,
              "end": 7,
              "name": "PUSH [tag]",
              "value": "3"
            }, {
              "begin": 5,
              "end": 7,
              "name": "JUMPI"
            }, {
              "begin": 30,
              "end": 31,
              "name": "PUSH",
              "value": "0"
            }, {
              "begin": 27,
              "end": 28,
              "name": "DUP1"
            }, {
              "begin": 20,
              "end": 32,
              "name": "REVERT"
            }, {
              "begin": 5,
              "end": 7,
              "name": "tag",
              "value": "3"
            }, {
              "begin": 5,
              "end": 7,
              "name": "JUMPDEST"
            }, {
              "begin": 618,
              "end": 660,
              "name": "POP"
            }, {
              "begin": 618,
              "end": 660,
              "name": "PUSH [tag]",
              "value": "4"
            }, {
              "begin": 618,
              "end": 660,
              "name": "PUSH [tag]",
              "value": "5"
            }, {
              "begin": 618,
              "end": 660,
              "name": "JUMP"
            }, {
              "begin": 618,
              "end": 660,
              "name": "tag",
              "value": "4"
            }, {
              "begin": 618,
              "end": 660,
              "name": "JUMPDEST"
            }, {
              "begin": 618,
              "end": 660,
              "name": "STOP"
            }, {
              "begin": 618,
              "end": 660,
              "name": "tag",
              "value": "5"
            }, {
              "begin": 618,
              "end": 660,
              "name": "JUMPDEST"
            }, {
              "begin": 650,
              "end": 651,
              "name": "PUSH",
              "value": "0"
            }, {
              "begin": 650,
              "end": 655,
              "name": "DUP1"
            }, {
              "begin": 650,
              "end": 655,
              "name": "SLOAD"
            }, {
              "begin": -1,
              "end": -1,
              "name": "PUSH",
              "value": "FF"
            }, {
              "begin": -1,
              "end": -1,
              "name": "NOT"
            }, {
              "begin": 650,
              "end": 655,
              "name": "AND"
            }, {
              "begin": 654,
              "end": 655,
              "name": "PUSH",
              "value": "2"
            }, {
              "begin": 650,
              "end": 655,
              "name": "OR"
            }, {
              "begin": 650,
              "end": 655,
              "name": "SWAP1"
            }, {
              "begin": 650,
              "end": 655,
              "name": "SSTORE"
            }, {
              "begin": 618,
              "end": 660,
              "name": "JUMP",
              "value": "[out]"
            }]
          }
        }
      },
      "bytecode": "608060405234801561001057600080fd5b50600080546002805560017f0100000000000000000000000000000000000000000000000000000000000000600160f860020a039092169190911760ff19908116821760f060020a60ff0219167e03000000000000000000000000000000000000000000000000000000000000178355600580548084019091557f68656c6c6f0000000000000000000000000000000000000000000000000000007f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0909101557f6869000000000000000000000000000000000000000000000000000000000000600355825460e860020a60ff0219167d3100000000000000000000000000000000000000000000000000000000001760a860020a60e860020a0319167c68657900000000000000000000000000000000000000000000000000001783558154607b6001608060020a031990911617825533600160a060020a03168352600460209081526040938490208054600a93169290921761ff001916614d00178255835180850190945260068085527f6a6f7365706800000000000000000000000000000000000000000000000000009490910193845290926101d2928401916101d9565b5050610274565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061021a57805160ff1916838001178555610247565b82800160010185558215610247579182015b8281111561024757825182559160200191906001019061022c565b50610253929150610257565b5090565b61027191905b80821115610253576000815560010161025d565b90565b6092806102826000396000f300608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a241c08981146043575b600080fd5b348015604e57600080fd5b5060556057565b005b6000805460ff191660021790555600a165627a7a72305820ee4a35b9f75c5ee9c29b4de7a5f10857c39209c0f0c551ee5e84e5259ec08b960029",
      "functionHashes": {
        "updateContract()": "a241c089"
      },
      "gasEstimates": {
        "creation": [null, 29200],
        "external": {
          "updateContract()": 20354
        },
        "internal": {}
      },
      "interface": "[{\"constant\":false,\"inputs\":[],\"name\":\"updateContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}]",
      "metadata": "{\"compiler\":{\"version\":\"0.4.23+commit.124ca40d\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[],\"name\":\"updateContract\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"myContract\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0xb23c58379a117787cefeeba4a7b4e31d30bca3b5a052fba5cb1e1cd610b58699\",\"urls\":[\"bzzr://e5830c773ff4f142278c0c1b0bab9b3e4ee08ffe9cf67c681a762d714fce65a1\"]}},\"version\":1}",
      "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x0 DUP1 SLOAD PUSH1 0x2 DUP1 SSTORE PUSH1 0x1 PUSH32 0x100000000000000000000000000000000000000000000000000000000000000 PUSH1 0x1 PUSH1 0xF8 PUSH1 0x2 EXP SUB SWAP1 SWAP3 AND SWAP2 SWAP1 SWAP2 OR PUSH1 0xFF NOT SWAP1 DUP2 AND DUP3 OR PUSH1 0xF0 PUSH1 0x2 EXP PUSH1 0xFF MUL NOT AND PUSH31 0x3000000000000000000000000000000000000000000000000000000000000 OR DUP4 SSTORE PUSH1 0x5 DUP1 SLOAD DUP1 DUP5 ADD SWAP1 SWAP2 SSTORE PUSH32 0x68656C6C6F000000000000000000000000000000000000000000000000000000 PUSH32 0x36B6384B5ECA791C62761152D0C79BB0604C104A5FB6F4EB0703F3154BB3DB0 SWAP1 SWAP2 ADD SSTORE PUSH32 0x6869000000000000000000000000000000000000000000000000000000000000 PUSH1 0x3 SSTORE DUP3 SLOAD PUSH1 0xE8 PUSH1 0x2 EXP PUSH1 0xFF MUL NOT AND PUSH30 0x310000000000000000000000000000000000000000000000000000000000 OR PUSH1 0xA8 PUSH1 0x2 EXP PUSH1 0xE8 PUSH1 0x2 EXP SUB NOT AND PUSH29 0x6865790000000000000000000000000000000000000000000000000000 OR DUP4 SSTORE DUP2 SLOAD PUSH1 0x7B PUSH1 0x1 PUSH1 0x80 PUSH1 0x2 EXP SUB NOT SWAP1 SWAP2 AND OR DUP3 SSTORE CALLER PUSH1 0x1 PUSH1 0xA0 PUSH1 0x2 EXP SUB AND DUP4 MSTORE PUSH1 0x4 PUSH1 0x20 SWAP1 DUP2 MSTORE PUSH1 0x40 SWAP4 DUP5 SWAP1 KECCAK256 DUP1 SLOAD PUSH1 0xA SWAP4 AND SWAP3 SWAP1 SWAP3 OR PUSH2 0xFF00 NOT AND PUSH2 0x4D00 OR DUP3 SSTORE DUP4 MLOAD DUP1 DUP6 ADD SWAP1 SWAP5 MSTORE PUSH1 0x6 DUP1 DUP6 MSTORE PUSH32 0x6A6F736570680000000000000000000000000000000000000000000000000000 SWAP5 SWAP1 SWAP2 ADD SWAP4 DUP5 MSTORE SWAP1 SWAP3 PUSH2 0x1D2 SWAP3 DUP5 ADD SWAP2 PUSH2 0x1D9 JUMP JUMPDEST POP POP PUSH2 0x274 JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x21A JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x247 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x247 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x247 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x22C JUMP JUMPDEST POP PUSH2 0x253 SWAP3 SWAP2 POP PUSH2 0x257 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x271 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x253 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x25D JUMP JUMPDEST SWAP1 JUMP JUMPDEST PUSH1 0x92 DUP1 PUSH2 0x282 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH1 0x3E JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0xA241C089 DUP2 EQ PUSH1 0x43 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH1 0x4E JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x55 PUSH1 0x57 JUMP JUMPDEST STOP JUMPDEST PUSH1 0x0 DUP1 SLOAD PUSH1 0xFF NOT AND PUSH1 0x2 OR SWAP1 SSTORE JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xee 0x4a CALLDATALOAD 0xb9 0xf7 0x5c 0x5e 0xe9 0xc2 SWAP12 0x4d 0xe7 0xa5 CALL ADDMOD JUMPI 0xc3 SWAP3 MULMOD 0xc0 CREATE 0xc5 MLOAD 0xee 0x5e DUP5 0xe5 0x25 SWAP15 0xc0 DUP12 SWAP7 STOP 0x29 ",
      "runtimeBytecode": "608060405260043610603e5763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663a241c08981146043575b600080fd5b348015604e57600080fd5b5060556057565b005b6000805460ff191660021790555600a165627a7a72305820ee4a35b9f75c5ee9c29b4de7a5f10857c39209c0f0c551ee5e84e5259ec08b960029",
      "srcmap": "26:637:0:-;;;315:297;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;490:21:0;342:11;;374:1;370:5;;349:4;342:11;-1:-1:-1;;;;;342:11:0;;;;;;;-1:-1:-1;;359:5:0;;;;;-1:-1:-1;;;;;;381:5:0;;;;;392:1;27:10:-1;;23:18;;;45:23;;;392:15:0;;;;;;413:14;385:1;413:14;433:13;;-1:-1:-1;;;;;;433:13:0;;;-1:-1:-1;;;;;;;;452:17:0;;;;;475:9;;481:3;-1:-1:-1;;;;;;475:9:0;;;;;;522:10;-1:-1:-1;;;;;514:19:0;;;:7;392:15;514:19;;;;;;;;539:15;;552:2;539:15;;;;;;-1:-1:-1;;560:19:0;;;;;585:22;;;;;;;;;;;;;;;;;;;;514:19;;585:22;;:11;;;:22;:::i;:::-;;315:297;26:637;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;26:637:0;;;-1:-1:-1;26:637:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
      "srcmapRuntime": "26:637:0:-;;;;;;;;;;;;;;;;;;;;;;;618:42;;8:9:-1;5:2;;;30:1;27;20:12;5:2;618:42:0;;;;;;;650:1;:5;;-1:-1:-1;;650:5:0;654:1;650:5;;;618:42::o"
    },
    source: ["pragma solidity ^0.4.21;", "", "contract myContract {", "  struct Player {", "    uint8 age;", "    bytes1 gender;", "    string name;", "  }", "", "  uint8 a;", "  address tester;", "  bytes8 eightByte;", "  bytes1 oneByte;", "  uint8 c;", "  bool test;", "  int128 hey;", "  uint256 b;", "  bytes32 teststr;", "  mapping(address => Player) players;", "  bytes32[] d;", "", "  constructor() public {", "    test = true;", "    a = 1;", "    b = 2;", "    c = 3;", "    d.push(\"hello\");", "    teststr = \"hi\";", "    oneByte = \"1\";", "    eightByte = \"hey\";", "    hey = 123;", "    Player storage sender = players[msg.sender];", "    sender.age = 10;", "    sender.gender = \"M\";", "    sender.name = \"joseph\";", "  }", "  ", "  function updateContract() {", "    a = 2;", "  }", "", "}"],
    gasEst: 287516,
  },
  difference: 33932,
};
>>>>>>> ebebb28e0c6d2745897217f28fa2591f3593eb65
