import React from 'react';
import ReactDOM from 'react-dom';
import Trips from './Trips';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Trips />, div);
  ReactDOM.unmountComponentAtNode(div);
});