import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import CardWrapper from './components/UI/Card/Card';

import FetchIPData from './components/FetchIPData/FetchIPData';

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

  const ipDataList = [renderedIPv4Data, renderedIPv6Data];

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
