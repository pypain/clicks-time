import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setCurrentTime(`${now.toLocaleDateString()} ${now.toLocaleTimeString()}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleClickPlus = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleClickMinus = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <>
      <p>You clicked {count} times</p>
      <button onClick={handleClickPlus}>*+click*</button>
      <button onClick={handleClickMinus}>*-click*</button>
      <h1>{currentTime && `Current date/time: ${currentTime}`}</h1>
    </>
  );
}

export default App;
