import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0); // Correct state initialization
  const stock = 12; // Max stock count

  return (
    <div className="Wrapper">
      <h1>CounterApp</h1>
      {/* Input to change background color */}
      <input
        type="color"
        onChange={(e) => {
          document.body.style.background = e.target.value;
        }}
      />

      {/* Button to decrement counter */}
      <button
        className="minus"
        disabled={counter === 0}
        onClick={() => {
          if (counter > 0) {
            setCounter(counter - 1);
          }
        }}
      >
        -
      </button>

      {/* Dynamically displaying the counter value */}
      <p className="counter">{counter}</p>

      {/* Button to increment counter */}
      <button
        className="plus"
        disabled={counter === stock}
        onClick={() => {
          if (counter < stock) {
            setCounter(counter + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
}

export default App;
