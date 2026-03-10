import React, { createContext } from 'react'

export const MyContext = createContext();

const ContextStore = ({children}) => {
    let cardTitle = "Item 1"
    let cardDescription = "This is dummy discription"
    const statuses = ["pending", "proccessing", "cancelled","delivered"]
  return (
    <MyContext.Provider value={{statuses, cardTitle, cardDescription}}>
        {children}
    </MyContext.Provider>
  )
}

export default ContextStore
