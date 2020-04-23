import axios from 'axios'

const RATE_KEY = 'RATE';

async function getRateBTC(price) {
    const rate = await axios(`https://blockchain.info/tobtc?currency=USD&value=${price}`);
    return rate.data;
}

async function getCharts() {
    let rate = localStorage.getItem(RATE_KEY)
    if (!rate){
        console.log('data mining...');
        const rate = await axios(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`);
        localStorage.setItem(RATE_KEY, JSON.stringify(rate.data))
        return rate.data;
    }
    rate = JSON.parse(rate)
    return rate;
}

export default {
    getRateBTC,
    getCharts
}
