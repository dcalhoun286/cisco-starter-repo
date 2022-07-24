import './App.css';

import CardWrapper from './components/UI/Card/Card';

const DUMMY_TEST_DATA = [
  'data example - 1',
  'data example - 2',
  'data example - 3',
  'data example - 4',
  'data example - 5',
];

function App() {
  return (
    <div className="App">
      {DUMMY_TEST_DATA.map((item) => (
        <CardWrapper>{item}</CardWrapper>
      ))}
    </div>
  );
}

export default App;
