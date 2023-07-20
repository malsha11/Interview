import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EmployeeDetails = ({ match }) => {
  const [employee, setEmployee] = useState(null)

  useEffect(() => {
    // Fetch the single employee record using HTTP GET
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

  if (!employee) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h2>Employee Details</h2>
      <p>
        <strong>Employee Number:</strong> {employee.empNo}
      </p>
      <p>
        <strong>Name:</strong> {employee.name}
      </p>
      {/* Display other employee details */}
    </div>
  )
}

export default EmployeeDetails
