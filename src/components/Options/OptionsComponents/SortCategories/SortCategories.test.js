import React from 'react';
import ReactDOM from 'react-dom';
import SortCategories from './SortCategories.jsx';
import { BrowserRouter } from 'react-router-dom';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SortCategories />
    </BrowserRouter>
  , div);
  ReactDOM.unmountComponentAtNode(div);
})