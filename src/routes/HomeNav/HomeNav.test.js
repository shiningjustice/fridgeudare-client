import React from 'react';
import ReactDOM from 'react-dom';
import HomeNav from './HomeNav';
import { BrowserRouter } from 'react-router-dom';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <HomeNav />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
})