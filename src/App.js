import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './Display';
;

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Display />} />
      </Routes>
      </BrowserRouter>
    );
  }
}

