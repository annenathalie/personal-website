import React from 'react';
import ReactDOM from 'react-dom';
import BlockLeft from './components/BlockLeft';
import BlockRight from './components/BlockRight';
import Footer from './components/Footer';
ReactDOM.render(
  <div>
    <BlockLeft />
    <BlockRight />
    <Footer />
  </div>,
  document.getElementById('root'));
