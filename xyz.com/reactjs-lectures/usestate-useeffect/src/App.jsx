import React, { useEffect, useState } from 'react'
import TabContent from './components/TabContent';

const App = () => {
  const [counter, setCounter] = useState(1);
  const [value, setValue] = useState("Tosiq");

  const handleIncreament = () => {
    
    setValue("Value is inc.")

    if (counter == 5) return;
    setCounter(counter + 1);

  }
  const handleDecreament = () => {

    setValue("Value is dec.")
    if (counter == 1) return;
    setCounter(counter - 1);
  }

  useEffect(()=>{
    console.log("Simple calling")
  })

  useEffect(()=>{
    console.log("Run only once")
  }, [])

  useEffect(()=>{
    console.log("Runs on condition")
  }, [value])

  return (
    <>
    <div>App Counter/ {value}</div>
    
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