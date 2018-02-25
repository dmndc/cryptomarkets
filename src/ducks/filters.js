// @flow

const initialState = {
  searchTerm: 'ZEC',
  marketCapFilter: '10000',
  priceFilter: '',
  coins: [{ name: 'zec' }, { name: 'kec' }, { name: 'pec' }]
};

const SET_SEARCH_TERM: string = 'SET_SEARCH_TERM';
const SET_MARKETCAP_FILTER: string = 'SET_MARKETCAP_FILTER';
const SET_PRICE_FILTER: string = 'SET_PRICE_FILTER';

export default function reducer(state: Object = initialState, action: Object): Object {
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

export function setSearchTerm(searchTerm: string) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  };
}

export function setMarketCapFilter(value: number) {
  return {
    type: SET_MARKETCAP_FILTER,
    payload: value
  };
}

export function setPriceFilter(price: number) {
  return {
    type: SET_PRICE_FILTER,
    payload: price
  };
}
