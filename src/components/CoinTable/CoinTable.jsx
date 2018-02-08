import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ReactTable from 'react-table';

import 'react-table/react-table.css';

class CoinTable extends Component {
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
        <ReactTable
          data={this.props.data}
          columns={columns}
          onFetchData={(state, instance) => {
            // show the loading overlay
            this.setState({ loading: true });
            // fetch your data
            axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=25').then(res => {
              // Update react-table
              this.setState({
                coins: res.data,
                loading: false
              });
            });
          }}
        />
      </div>
    );
  }
}

export default CoinTable;
