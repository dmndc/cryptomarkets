import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Card = styled.div`
  border: 1px solid #333;
  border-radius: 5px;
  margin: 50px;
  padding: 10px;
`;

const PriceTicker = props => {
  const style = { color: props.color };
  return (
    <Card>
      <h1 style={style}>{props.title}</h1>
      <h3>test</h3>
    </Card>
  );
};

export default connect()(PriceTicker);
