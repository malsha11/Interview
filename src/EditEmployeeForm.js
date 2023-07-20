import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditEmployeeForm = ({ match }) => {
  const [employee, setEmployee] = useState({
    empNo: '',
    name: '',
    // Add other employee properties here
  })

  useEffect(() => {
    // Fetch the existing employee details using HTTP GET
    axios
      .get(
        `http://examination.24x7retail.com/api/v1.0/Employee/${match.params.empNo}`,
        {
          headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
        }
      )
      .then((response) => {
        setEmployee(response.data)
      })
      .catch((error) => {
        // Handle error
      })
  }, [match.params.empNo])

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .put(
        `http://examination.24x7retail.com/api/v1.0/Employee/${match.params.empNo}`,
        employee,
        {
          headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
        }
      )
      .then((response) => {
        // Handle successful employee update
      })
      .catch((error) => {
        // Handle error
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Employee Number:</label>
        <input
          type='text'
          name='empNo'
          value={employee.empNo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type='text'
          name='name'
          value={employee.name}
          onChange={handleChange}
          required
        />
      </div>
      {/* Add other input fields for employee details */}
      <button type='submit'>Update Employee</button>
    </form>
  )
}

export default EditEmployeeForm
