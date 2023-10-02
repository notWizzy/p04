import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import Example from './components/example/Example';
import States from './components/states/States';

function Example() {
  return (
    <div>
      <h2>Example View</h2>
    </div>
  );
}

function States() {
  return (
    <div>
      <h2>States View</h2>
    </div>
  );
}

function App() {
  const [showExample, setShowExample] = useState(true);

  const toggleView = () => {
    setShowExample(!showExample);
  };

  return (
    <div>
      <button onClick={toggleView}>
        {showExample ? 'Switch to States' : 'Switch to Example'}
      </button>
      {showExample ? <Example /> : <States />}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
