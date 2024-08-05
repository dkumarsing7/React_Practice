import './App.css';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(1);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    let interval;
    if (isCounting) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isCounting]);

  const start = () => {
    setIsCounting(true);
  };
  const stop = () => {
    setIsCounting(false);
  };
  const reset = () => {
    setCount(1);
    setIsCounting(false);
  };

  return (
    <>
      <body className='d-flex justify-content-center align-items-center vh-100'>
        <div className="container text-center border border-danger border-4 rounded py-5">
          <div className="container my-5">
            <h1>Counter: {count}</h1>
          </div>
          <div className="container">
            <button className='btn btn-success px-5 m-3' onClick={start}><h3>Start</h3></button>
            <button className='btn btn-danger px-5 m-3' onClick={stop}><h3>Stop</h3></button>
            <button className='btn btn-warning px-5 m-3' onClick={reset}><h3>Reset</h3></button>
          </div>

        </div>
      </body>
    </>
  );
}

export default App;
