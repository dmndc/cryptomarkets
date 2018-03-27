import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const AssetCard = ({ name, symbol, price_usd }) => (
  <Card>
    <CardBody>
      <CardTitle>
        <h1>{symbol}</h1>
        <h3>{name}</h3>
        <h2>$ {Number(price_usd).toFixed(2)}</h2>
      </CardTitle>
    </CardBody>
  </Card>
);

export default AssetCard;
