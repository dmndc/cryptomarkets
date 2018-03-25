// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, InputGroup } from 'reactstrap';
import { setSearchTerm } from './../../ducks/filters';

const SearchBar = (props: { searchTerm: string, setSearchTerm: Function }) => (
  <InputGroup>
    <Input onChange={e => props.setSearchTerm(e.target.value)} value={props.searchTerm} type="text" />
  </InputGroup>
);

const mapStateToProps = state => ({
  searchTerm: state.filters.searchTerm
});

export default connect(mapStateToProps, { setSearchTerm })(SearchBar);
