import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, CardColumns } from 'reactstrap';
import AssetCard from './../AssetCard/AssetCard';

import { getData } from './../../ducks/data';

class AssetsGrid extends Component {
  componentDidMount() {
    // Get data for first 30 assets
    this.props.getData(30);
  }

  render() {
    return (
      <Container>
        <CardColumns>{this.props.data.map((asset, i) => <AssetCard {...asset} key={i} />)}</CardColumns>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { data } = state.data;
  return {
    data
  };
}

export default connect(mapStateToProps, { getData })(AssetsGrid);
