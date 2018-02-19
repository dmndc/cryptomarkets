import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './App';
import PriceTicker from './components/PriceTicker/PriceTicker';
import SearchInput from './components/SearchInput/SearchInput';
import CoinDetails from './components/CoinDetails/CoinDetails';
import CoinTable from './components/CoinTable/CoinTable';
import HeatMap from './components/HeatMap/HeatMap';

export default (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/ticker" component={PriceTicker} />
    <Route path="/search" component={SearchInput} />
    <Route path="/coin/:id" component={CoinDetails} />
    <Route path="/coins" component={CoinTable} />
    <Route path="/heatmap" component={HeatMap} />
  </Switch>
);
