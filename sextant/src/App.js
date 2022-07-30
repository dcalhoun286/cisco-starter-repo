import React from 'react';

import './App.css';

import Header from './components/Header/Header';
import CardWrapper from './components/UI/Card/Card';

import FetchIPData from './components/FetchIPData/FetchIPData';

const renderedIPData = (
  <React.Fragment>
    <CardWrapper>
      <h3>IP Address</h3>
      <FetchIPData />
    </CardWrapper>
  </React.Fragment>
);

// const DUMMY_TEST_DATA = [
//   { id: 1, title: 'example 1 title', content: '**visualized data**' },
//   { id: 2, title: 'example 2 title', content: '**visualized data**' },
//   { id: 3, title: 'example 3 title', content: '**visualized data**' },
//   { id: 4, title: 'example 4 title', content: '**visualized data**' },
//   { id: 5, title: 'example 5 title', content: '**visualized data**' },
// ];

// const renderedDataItems = (
//   <ul>
//     {DUMMY_TEST_DATA.map((item) => (
//       <li id={item.id} key={item.id}>
//         <CardWrapper>
//           <h3>{item.title}</h3>
//           <hr></hr>
//           <section>{item.content}</section>
//         </CardWrapper>
//       </li>
//     ))}
//   </ul>
// );
function App(props) {
  return (
    <div className="App">
      <Header />
      {renderedIPData}
      {/* {renderedDataItems} */}
    </div>
  );
}

export default App;
