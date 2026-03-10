import React, { useContext } from 'react'
import Card from './components/Card'
import CardTitle from './components/CardTitle'
import { MyContext } from './context/ContextStore'

const App = () => {
    let data = useContext(MyContext)
  return (
    <div>
      App
      {/* <Card /> */}
        <ul>
        {
            data.statuses.map((status) => {
                return (
                    <li>{status}</li>
                )
            })
        }
        </ul>
    </div>
  )
}

export default App