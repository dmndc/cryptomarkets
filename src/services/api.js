import axios from 'axios';

export const fetch = () =>
  axios.get('https://api.coinmarketcap.com/v1/ticker/').then(res => res.data);
