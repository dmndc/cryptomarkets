const initialState = {
  searchTerm: 'ZEC',
  marketCapFilter: '10000',
  priceFilter: '',
  coins: [{ name: 'zec' }, { name: 'kec' }, { name: 'pec' }]
};

const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
const SET_MARKETCAP_FILTER = 'SET_MARKETCAP_FILTER';
const SET_PRICE_FILTER = 'SET_PRICE_FILTER';

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.payload };

    case SET_MARKETCAP_FILTER:
      return { ...state, marketCapFilter: action.payload };

    case SET_PRICE_FILTER:
      return { ...state, priceFilter: action.payload };

    default:
      return state;
  }
}

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function setMarketCapFilter(value) {
  return {
    type: SET_MARKETCAP_FILTER,
    payload: value
  };
}

export function setPriceFilter(price) {
  return {
    type: SET_PRICE_FILTER,
    payload: price
  };
}
