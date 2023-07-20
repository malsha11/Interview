import React, { useState } from 'react'
import axios from 'axios'

const AddEmployeeForm = () => {
  const [employee, setEmployee] = useState({
    empNo: '',
    empName: '',
    empAddressLine1: '',
    empAddressLine2: '',
    empAddressLine3: '',
    departmentCode: '',
    dateOfJoin: '',
    dateOfBirth: '',
    basicSalary: 0,
    isActive: true,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setEmployee((prevEmployee) => ({ ...prevEmployee, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
      .post('http://examination.24x7retail.com/api/v1.0/Employee', employee, {
        headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
      })
      .then((response) => {
        // Handle successful employee addition
        console.log('Employee added successfully:', response.data)
      })
      .catch((error) => {
        // Handle error
        console.error('Error adding employee:', error)
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
          name='empName'
          value={employee.empName}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Address Line 1:</label>
        <input
          type='text'
          name='empAddressLine1'
          value={employee.empAddressLine1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          type='text'
          name='empAddressLine2'
          value={employee.empAddressLine2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Address Line 3:</label>
        <input
          type='text'
          name='empAddressLine3'
          value={employee.empAddressLine3}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Department Code:</label>
        <input
          type='text'
          name='departmentCode'
          value={employee.departmentCode}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date of Join:</label>
        <input
          type='date'
          name='dateOfJoin'
          value={employee.dateOfJoin}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input
          type='date'
          name='dateOfBirth'
          value={employee.dateOfBirth}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Basic Salary:</label>
        <input
          type='number'
          name='basicSalary'
          value={employee.basicSalary}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Active:</label>
        <input
          type='checkbox'
          name='isActive'
          checked={employee.isActive}
          onChange={(e) =>
            setEmployee((prevEmployee) => ({
              ...prevEmployee,
              isActive: e.target.checked,
            }))
          }
        />
      </div>
      <button type='submit'>Add Employee</button>
    </form>
  )
}

export default AddEmployeeForm
