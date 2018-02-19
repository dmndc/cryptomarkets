import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getData } from './../../ducks/data';

const HeatCard = styled.div`
  display: inline-block;
  width: 5em;
  padding: 0.25em;
  margin: 0.2em;
  border: 1px solid #000;
`;

class HeatMap extends Component {
  componentDidMount() {
    getData();
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col>
            <h1>Heatmap</h1>
            {this.props.data.map((el, index) => (
              <HeatCard>
                <div className="heatmap--card" key={index}>
                  <h5>{el.symbol}</h5>
                  <p>{el.percent_change_24h}</p>
                </div>
              </HeatCard>
            ))}
          </Col>
        </Row>
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

export default connect(mapStateToProps, { getData })(HeatMap);
