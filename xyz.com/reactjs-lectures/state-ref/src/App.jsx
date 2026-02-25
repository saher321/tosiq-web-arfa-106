import React, { useState } from "react";
const clrs = ["Red", "Green", "Blue", "Cyan"];
const App = () => {
  const [value, setValue] = useState("Owais");
  const [colors, setColors] = useState(clrs);
  const [user, setUser] = useState({
    name: "Ahmad",
    age: 34,
    email: "ahmad@gmail.com"
  });

  const handleValue = () => {
    setValue("Ali")
  }

  const handleShowColors = () => {
    console.log(colors)
  }

  const handleShowUser = () => {
    console.log(user)
  }

  return (
    <>
    <button onClick={handleShowUser}>Show User</button>
    <br />
    <br />
    <button onClick={handleShowColors}>Show Colors</button>
    <br />
    <br />
    {value}
    <button onClick={handleValue}>Click</button>
    </>
  )
};

export default App;
