import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Example component
function Example() {
  return (
    <div>
      <h2>Example View</h2>
      {/* Add your Example component content here */}
    </div>
  );
}

// States component
function States() {
  return (
    <div>
      <h2>States View</h2>
      {/* Add your States component content here */}
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
