
import { useState } from 'react';
import './App.css';





function App() {
  let [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>ho oho oh oh .{counter}</h1>
      <button
        onClick={function () {
          setCounter(counter + 1);

        }}
      >
        click to increase
        </button>
    </div>
  )
};

// function App() {

//   return (<h1>hello hello hello </h1>)
// };

export default App;
