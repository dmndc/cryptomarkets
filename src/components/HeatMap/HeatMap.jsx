import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { getData } from './../../ducks/data';

const HeatCard = styled.div`
  display: inline-block;
  width: 5em;
  padding: 0.25em;
  margin: 0.3em;
  border: 1px solid #000;
  background: ${props => (props.positive ? '#68FD6A' : '#FD7275')};
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

            {this.props.data.map((el, index) => {
              let positive = false;
              if (el.percent_change_24h > 0) {
                positive = true;
              }

              return (
                <HeatCard positive={positive}>
                  <div className="heatmap--card" key={index}>
                    <h5>{el.symbol}</h5>
                    {el.percent_change_24h}
                  </div>
                </HeatCard>
              );
            })}
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
