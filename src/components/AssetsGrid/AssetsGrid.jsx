import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Col, CardColumns } from 'reactstrap';
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
        {/* <Row> */}
        <CardColumns>{this.props.data.map(asset => <AssetCard {...asset} key={asset.id} />)}</CardColumns>
        {/* </Row> */}
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
