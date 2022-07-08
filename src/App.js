// import logo from './logo.svg';
import './App.css';
 import Statedemo from './statedemo';

import Cycle from './lifecycle';
// import Header from './header';
// import Footer from './footer';
import Content from './content';
// import Sidebar from './sidebar';
import CompoA from './compoA';
import React, { Component } from 'react'
import Clock from './clock';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Parent from './Parent';
import Ref from './ref';
import Inline from './inline';
import Hookdemo from './hookdemo';
import Apicall from './api';
export class App extends Component {
 
  render() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Apicall/>}/>
        <Route path='/clock' element={<Clock></Clock>}></Route>
        <Route path='/css' element={<Inline></Inline>}></Route>
        <Route path='/state' basic_reactelement={<Statedemo></Statedemo>}></Route>
        <Route path='/con' element={<Content></Content>}></Route>
        <Route path='/ref' element={<Ref></Ref>}></Route>
        <Route path='/hk' element={<Hookdemo></Hookdemo>}></Route>
        <Route path='/cy' element={<Cycle/>}></Route>
        <Route path='/par' element={<Parent/>}></Route>
        <Route path='/ca' element={<CompoA/>}></Route>
      </Routes>
     </BrowserRouter>
    )
  }
}

export default App

