import React from 'react';
import { connect } from 'react-redux';
import { setSearchTerm, setMarketCapFilter, setPriceFilter } from './../../ducks/filters';

function SearchInput(props) {
  console.log('PROPS: ', props.data);
  const { searchTerm, marketCapFilter, priceFilter, setSearchTerm, setMarketCapFilter, setPriceFilter } = props;

  return (
    <div className="search">
      <h1>Search</h1>

      <input onChange={e => setSearchTerm(e.target.value)} value={searchTerm} type="text" placeholder="Search" />

      <select onChange={e => setMarketCapFilter(e.target.value)}>
        <option value="$1 Billion +">$1 Billion +</option>
        <option value="$100 Million - $1 Billion">$100 Million - $1 Billion</option>
        <option value="$10 Million - $100 Million">$10 Million - $100 Million</option>
        <option value="$1 Million - $100 Million">$1 Million - $100 Million</option>
      </select>
      <select onChange={e => setPriceFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="$100 +">$100 +</option>
        <option value="$1 - $100">$1 - $100</option>
        <option value="$0.01 - $1">$0.1 - $1</option>
      </select>
      <h3>Search term: {searchTerm}</h3>
      <h3>MCap filter: {marketCapFilter}</h3>
      <h3>Price filter: {priceFilter}</h3>
    </div>
  );
}

const mapStateToProps = state => {
  const { searchTerm, marketCapFilter, priceFilter } = state.filters;

  return {
    searchTerm,
    marketCapFilter,
    priceFilter
  };
};

export default connect(mapStateToProps, { setSearchTerm, setMarketCapFilter, setPriceFilter })(SearchInput);
