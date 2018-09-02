export const limitOf30Days = 29;
export const listOfExchange = ['BTC', 'ETH', 'LTC', 'DASH', 'DGB', 'XPY', 'BTB'];
export const fromExchange = 'BTC';
export const exchange = 'USD';
export const keyReplacement = '{1}';

export const location_url = 'https://facebook.github.io/react-native/movies.json';
export const btc_history_url = 'https://min-api.cryptocompare.com/data/histoday?fsym=' + keyReplacement + '&tsym=' + exchange + '&limit='+ limitOf30Days + '&aggregate=1&e=CCCAGG&allData=false';
export const btc_current_url = 'https://min-api.cryptocompare.com/data/price?fsym='+ keyReplacement + '&tsyms=' + exchange;
export const location_timeout = 2000;
