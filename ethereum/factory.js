import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x23258B41b1DF71d76240CdDa96Cf48d753b6aeba'
);

export default instance;