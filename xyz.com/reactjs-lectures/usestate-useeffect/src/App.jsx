import React, { useState } from 'react'
import TabContent from './components/TabContent';

const App = () => {
  const [counter, setCounter] = useState(1);

  const handleIncreament = () => {
    if (counter == 5) return;
    setCounter(counter + 1);
  }
  const handleDecreament = () => {
    if (counter == 1) return;
    setCounter(counter - 1);
  }
  return (
    <>
    <div>App Counter</div>
    
    <button onClick={handleDecreament}> - </button> 
    <span>{counter}</span> 
    <button onClick={handleIncreament}> + </button>
    <hr/>

    <TabContent/>

    <hr />

    </>
  )
}

export default App