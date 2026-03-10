import React, { useContext } from 'react'
import { MyContext } from '../context/ContextStore'

const CardDescription = () => {
    let data = useContext(MyContext)
  return (
    <div>
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

export default CardDescription