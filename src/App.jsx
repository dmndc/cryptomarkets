import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Button, Container, Row, Col } from 'reactstrap';

import { getData } from './ducks/data';

import SearchInput from './components/SearchInput/SearchInput';
import CoinTable from './components/CoinTable/CoinTable';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

import './App.css';

import router from './router';

function App(props) {
  const { getData } = props;
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Row>
          <Col>
            <h1>My New App</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Your crypto companion</h3>
          </Col>
          <Col>
            <Button color="primary" onClick={() => getData()}>
              Get Price Data
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <SearchInput />
          </Col>
        </Row>
        {router}

        <h6>Loading: {props.loading ? 'Loading...' : 'Not Loading!'}</h6>
        <CoinTable data={props.data} />
      </Container>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  const { data, loading } = state.data;
  return {
    data,
    loading
  };
}

export default connect(mapStateToProps, { getData })(App);
