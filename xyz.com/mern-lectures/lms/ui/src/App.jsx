import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ALL_DEPT_API } from './utils/api.js'
import { useEffect } from 'react'

const App = () => {

  const [departments, setDepartments] = useState([])

  const getDepartments = async () => {
    try {
      const response = await axios.get(ALL_DEPT_API)
      console.log(response.data)
      if (response.data.status == true) {
        setDepartments(response.data.departments)
      } else {
        console.error("Error in fetching request!")
      }
    } catch (error) {
      console.error("ERR: ", error)
    }
  }

  useEffect(() => {
    getDepartments();
  }, [])

  return (
    <>
      <h2>Departments</h2>
      <div>
        <table width={"100%"} border={1} cellPadding={20} cellSpacing={0}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>HOD Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              departments.length == 0 ? 
              <tr>
                <td colSpan={4}>No records were found!</td>
              </tr> :
              departments.map((department, i) => {
                return (
                  <tr key={i}>
                    <td>{department.id}</td>
                    <td>{department.name}</td>
                    <td>{department.hodName}</td>
                    <td>Edit / Remove</td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default App