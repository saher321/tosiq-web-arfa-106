import React, { useEffect, useState } from 'react'
import TabContent from '../components/TabContent';
import WebLayout from '../layouts/WebLayout';

const Home = () => {
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
    <WebLayout>
      <div>Home Counter/ {value}</div>
      
      <button onClick={handleDecreament}> - </button> 
      <span>{counter}</span> 
      <button onClick={handleIncreament}> + </button>
      <hr/>

      <TabContent/>

      <hr />
    </WebLayout>
  )
}

export default Home