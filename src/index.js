import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { R1 } from './R1';
ReactDOM.render(
 <BrowserRouter>
  <R1></R1>
 </BrowserRouter> 
  ,
  document.getElementById('root')
);