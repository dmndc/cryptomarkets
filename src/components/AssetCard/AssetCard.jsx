import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const AssetCard = props => {
  const { name, symbol, price_usd } = props;
  return (
    <Card>
      <CardBody>
        <CardTitle>
          <h1>{symbol}</h1>
          <h2>{name}</h2>
          <h2>{Number(price_usd).toFixed(2)}</h2>
        </CardTitle>
      </CardBody>
    </Card>
  );
};

export default AssetCard;
