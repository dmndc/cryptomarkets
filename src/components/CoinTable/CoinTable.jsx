import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ReactTable from 'react-table';
import { Container, Row, Col } from 'reactstrap';

import 'react-table/react-table.css';

const CoinTable = props => {
  // const { coins } = this.state;

  const columns = [
    {
      Header: 'Name',
      accessor: 'name' // String-based value accessors!
    },
    {
      Header: 'Symbol',
      accessor: 'symbol'
      // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
    },
    {
      Header: 'Market Cap',
      accessor: 'market_cap_usd'
      // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
    },
    {
      Header: 'USD price',
      accessor: 'price_usd'
      // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
    },
    {
      Header: '24h % Change',
      accessor: 'percent_change_24h'
      // Cell: props => <span className="number">{props.value}</span> // Custom cell components!
    }
    // {
    //   id: 'friendName', // Required because our accessor is not a string
    //   Header: 'Friend Name',
    //   accessor: d => d.friend.name // Custom value accessors!
    // },
    // {
    //   Header: props => <span>Friend Age</span>, // Custom header components!
    //   accessor: 'friend.age'
    // }
  ];

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ReactTable data={props.data} columns={columns} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm
});

export default connect(mapStateToProps)(CoinTable);
