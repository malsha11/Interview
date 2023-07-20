import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom' // Import Switch from react-router-dom

import AddEmployeeForm from './AddEmployeeForm'
import EditEmployeeForm from './EditEmployeeForm'
import EmployeeDetails from './EmployeeDetails'
import EmployeeList from './EmployeeList'
import SearchEmployee from './SearchEmployee'
import DepartmentList from './DepartmentList'

const App = () => {
  return (
    <Router>
      <Switch>
        {' '}
        {/* Use Switch from react-router-dom */}
        <Route exact path='/add-employee' component={AddEmployeeForm} />
        <Route
          exact
          path='/edit-employee/:empNo'
          component={EditEmployeeForm}
        />
        <Route exact path='/employee/:empNo' component={EmployeeDetails} />
        <Route exact path='/employee-list' component={EmployeeList} />
        <Route exact path='/search-employee' component={SearchEmployee} />
        <Route exact path='/departments' component={DepartmentList} />
      </Switch>
    </Router>
  )
}

export default App
