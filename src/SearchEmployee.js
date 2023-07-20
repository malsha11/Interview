import React, { useState } from 'react'
import axios from 'axios'

const SearchEmployee = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearch = () => {
    // Perform search using HTTP GET
    axios
      .get(
        `http://examination.24x7retail.com/api/v1.0/Employees?search=${searchTerm}`,
        {
          headers: { 'API-Key': '?D(G+KbPeSgVkYp3s6v9y$B&E)H@McQf' },
        }
      )
      .then((response) => {
        setSearchResults(response.data)
      })
      .catch((error) => {
        // Handle error
      })
  }

  return (
    <div>
      <h2>Search Employee</h2>
      <input
        type='text'
        placeholder='Enter employee name or employee number'
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>

      {searchResults.length === 0 ? (
        <div>No matching employees found.</div>
      ) : (
        <div>
          <h3>Matching Employees</h3>
          <ul>
            {searchResults.map((employee) => (
              <li key={employee.empNo}>
                <strong>{employee.name}</strong> - Employee Number:{' '}
                {employee.empNo}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchEmployee
