const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
    'faith tip you swarm body skull credit sort eager pass stone tent',
    'https://rinkeby.infura.io/v3/a1562c00cce94b80a3ba36c1181e5eb4'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: '0x' + compiledFactory.bytecode }) 
    .send({ from: accounts[0] , gas: "1000000"}); 
    
    console.log('Contract deployed to', result.options.address);
};
deploy();