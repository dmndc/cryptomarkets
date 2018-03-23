import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import SearchBar from './../SearchBar/SearchBar';

import logo from '../../mainlogo.svg';

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">
            <img src={logo} height="35" /> cryptomarkets
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <SearchBar />
              </NavItem>
              <NavItem>
                <NavLink href="/coins/">Coins</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/heatmap/">Heatmap</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/assets/">Grid</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
