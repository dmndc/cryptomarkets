import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import PriceTicker from './components/PriceTicker/PriceTicker';
import CoinDetails from './components/CoinDetails/CoinDetails';
import CoinTable from './components/CoinTable/CoinTable';

import router from './router';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coins: []
    };
  }

  componentDidMount() {
    axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=25').then(res => {
      console.log(res.data);
      this.setState({
        coins: res.data,
        loading: false
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My New App</h1>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ticker">Ticker</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>
        {router}
        <CoinTable data={this.state.coins} />
      </div>
    );
  }
}

export default App;
