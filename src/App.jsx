import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import axios from 'axios';

import { getData } from './ducks/data';

import './App.css';

import PriceTicker from './components/PriceTicker/PriceTicker';
import CoinDetails from './components/CoinDetails/CoinDetails';
import CoinTable from './components/CoinTable/CoinTable';

import router from './router';

function App(props) {
  const { getData } = props;
  return (
    <div className="App">
      <h1>My New App</h1>
      {router}
      <button onClick={() => getData()}>Get Price Data</button>
      <h3>Loading: {props.loading ? 'Loading...' : 'Not Loading!'}</h3>
      <CoinTable data={props.data} />
    </div>
  );
}

function mapStateToProps(state) {
  const { data, loading } = state.data;
  return {
    data,
    loading
  };
}

export default connect(mapStateToProps, { getData })(App);
