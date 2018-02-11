import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Input } from 'reactstrap';
import {
  setSearchTerm,
  setMarketCapFilter,
  setPriceFilter
} from './../../ducks/filters';

function SearchInput(props) {
  const {
    searchTerm,
    marketCapFilter,
    priceFilter,
    setSearchTerm,
    setMarketCapFilter,
    setPriceFilter
  } = props;

  return (
    <Container>
      <Row>
        <Col>
          <Input
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search"
          />
        </Col>
        <Col>
          <Input
            type="select"
            onChange={e => setMarketCapFilter(e.target.value)}
          >
            <option value="$1 Billion +">$1 Billion +</option>
            <option value="$100 Million - $1 Billion">
              $100 Million - $1 Billion
            </option>
            <option value="$10 Million - $100 Million">
              $10 Million - $100 Million
            </option>
            <option value="$1 Million - $100 Million">
              $1 Million - $100 Million
            </option>
          </Input>
        </Col>
        <Col>
          <Input type="select" onChange={e => setPriceFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="$100 +">$100 +</option>
            <option value="$1 - $100">$1 - $100</option>
            <option value="$0.01 - $1">$0.1 - $1</option>
          </Input>
        </Col>
      </Row>

      <Row>
        <Col>
          <h5>Search term: {searchTerm}</h5>
        </Col>
        <Col>
          <h5>Market Cap: {marketCapFilter}</h5>
        </Col>
        <Col>
          <h5>Price: {priceFilter}</h5>
        </Col>
      </Row>
    </Container>
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

export default connect(mapStateToProps, {
  setSearchTerm,
  setMarketCapFilter,
  setPriceFilter
})(SearchInput);
