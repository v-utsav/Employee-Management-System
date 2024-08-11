import React, { useEffect, useState } from 'react'
import EmployeeService from '../Services/EmployeeService'
import { Link } from 'react-router-dom'


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    useEffect(() => {
      getAllEmployees()
    }, [])
    
  const getAllEmployees = () => {
    EmployeeService.getAllEmployees().then((response) => {
      setEmployees(response.data)
      console.log(response.data)
    }).catch(error => {
      console.log(error)
    })
  } 

  const deleteEmployee = (employeeId) => {
      EmployeeService.deleteEmployee(employeeId).then(response => {
        getAllEmployees()
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className='container'><br/>
        <h2 className='text-center'>List Employees</h2>
        <Link to = "/add-employee" className="btn btn-primary mb-2" >Add Employee</Link>
        <table className='table table-border table-striped'>
            <thead>
                <th>Employee id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee => 
                        <tr key = {employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.fname}</td>
                            <td>{employee.lname}</td>
                            <td>{employee.email}</td>
                            <td>
                              <Link className='btn btn-info' to = {`/edit-employee/${employee.id}`}>Update</Link>&nbsp;&nbsp; 
                              <button className='btn btn-danger' onClick={() => deleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>

  )
}


export default ListEmployeeComponent