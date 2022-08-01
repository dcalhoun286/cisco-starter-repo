import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import CardWrapper from './components/UI/Card/Card';

import FetchIPData from './components/FetchIPData/FetchIPData';
import Pylon from './components/Pylon/Pylon';

function App(props) {
  const renderedIPv4Data = (
    <CardWrapper>
      <h3>IPv4 Address</h3>
      <FetchIPData url="https://api.ipify.org?format=json" />
    </CardWrapper>
  );

  const renderedIPv6Data = (
    <CardWrapper>
      <h3>IPv6 Address</h3>
      <FetchIPData url="https://api64.ipify.org?format=json" />
    </CardWrapper>
  );

  const latencyData = (
    <CardWrapper>
      <h3>Package Latency from Pylon</h3>
      <Pylon />
    </CardWrapper>
  );

  const ipDataList = [renderedIPv4Data, renderedIPv6Data, latencyData];

  let liItem = 0;

  const renderedIPData = (
    <ul>
      {ipDataList.map((item) => (
        <li id={liItem++} key={liItem}>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="App">
      <Header />
      {renderedIPData}
    </div>
  );
}

export default App;
