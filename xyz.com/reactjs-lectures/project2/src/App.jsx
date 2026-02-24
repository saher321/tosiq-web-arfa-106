import React from 'react'
import Button from './components/Button'
import Card from './components/Card'

const App = () => {
  return (
    <>
      <div>
        <h1>First app</h1>

        {/* props */}
        <Button title="Button 1"/>
        <Button title="Button 2"/>
        <Button title="Button 3"/>
        <Button title="Button 4"/>
        <Button title="Button 5"/>

        <br /><br />

      {/* children */}
        <Card>
          This is sample data
        </Card>

        <Card>
          <h1 className='point'>TOO THE POINT&deg;</h1>
        </Card>

      </div>
    </>
  )
}

export default App