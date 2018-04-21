import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import store from './../../store';

describe('NavBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <NavBar />
      </Provider>,
      div
    );
  });
});
