if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    // Set the provider you want from Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
    web3.eth.defaultAccount = web3.eth.accounts[0];

    web3.setProvider(new web3.providers.HttpProvider('http://' + BasicAuthUsername + ':' + BasicAuthPassword + '@localhost:8545'));
    var NovelContract = web3.eth.contract([
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_writername",
                    "type": "string"
                },
                {
                    "name": "_membername",
                    "type": "string"
                },
                {
                    "name": "_associationname",
                    "type": "string"
                }
            ],
            "name": "ifScriptVaild",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]);
  }
  