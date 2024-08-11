import React, { useEffect, useState } from 'react'
import EmployeeService from '../Services/EmployeeService'
import {useNavigate, Link, useParams} from 'react-router-dom'





const AddEmployeeComponent = () => {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault()
    
        const employee = {fname, lname, email}

        if(id){
                EmployeeService.updateEmployee(id, employee).then(response =>{
                navigate("/employees")
            }).catch(error => {
                console.log(error)
            })

        }else{
            console.log("function running")
            EmployeeService.createEmployee(employee).then((response) => {
            console.log(response.data)
            navigate("/employees")
        }).catch(error => {
             console.log(error)
        })

        }
    
        
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setFname = response.data.fname
            setLname = response.data.lname
            setEmail = response.data.email
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    
    const title = () => {
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div>
        <br/><br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3'>
                    {
                        title()
                    }
                    <div className='card-body'>
                        <form>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter First Name'
                                    name="fname"
                                    className='form-control'
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type="text"
                                    placeholder='Enter Last Name'
                                    name="lname"
                                    className='form-control'
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                >
                                </input>
                            </div><br/>
                            <div className='form-group-mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type="text"
                                    placeholder='Enter Email Id'
                                    name="email"
                                    className='form-control'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                >
                                </input>
                            </div><br/>
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>&nbsp; &nbsp;
                            <Link to = '/employees' className = "btn btn-danger">Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent