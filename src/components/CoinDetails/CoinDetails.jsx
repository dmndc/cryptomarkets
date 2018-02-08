import React from 'react';

const CoinDetails = (props, { match }) => {
  const { name, symbol, price_usd, price_btc, percent_change_24h } = props;
  return (
    <div>
      <h1>Coin Details</h1>
      {/* <h3>{match.params.id}</h3> */}
      <h3>{name}</h3>
      <h4>{symbol}</h4>
      <h4>{price_usd}</h4>
      <h4>{percent_change_24h}</h4>
    </div>
  );
};

export default CoinDetails;
