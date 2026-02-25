import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("Owais");
  
  const handleValue = () => {
    setValue("Ali")
  }

  return (
    <>
    {value}
    <button onClick={handleValue}>Click</button>
    </>
  )
};

export default App;
