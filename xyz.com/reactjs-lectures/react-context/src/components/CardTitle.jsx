import React, { useContext } from 'react'
import { MyContext } from '../context/ContextStore'

const CardTitle = () => {
    let data = useContext(MyContext)
  return (
    <div>{data.cardTitle}</div>
  )
}

export default CardTitle