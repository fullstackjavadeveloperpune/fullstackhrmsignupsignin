import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {

    let navigate = useNavigate()

    const [employee, setEmployee] = useState({
        empName: "",
        empAddress: "",
        empContactNumber: "",
        empDOB: "",
        empEmailId: "",
        empPassword: ""
    })

    const { empName, empAddress, empContactNumber, empDOB, empEmailId, empPassword } = employee;

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        await axios.post("http://localhost:8080/employees/signup", employee)

        navigate('/')
    }


    return (
        <div className='conatiner'>

            <div className='row'>

                <div className='col-md-9 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2>SignUp</h2>
                    <form onSubmit={(e) => onSubmit(e)}>

                        <div className='mb-3'>
                            Name<input type='text' name='empName' value={empName} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Address<input type='text' name='empAddress' value={empAddress} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Contact Number<input type='number' name='empContactNumber' value={empContactNumber} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            DOB<input type='date' name='empDOB' value={empDOB} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Email<input type='email' name='empEmailId' value={empEmailId} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Password<input type='password' name='empPassword' value={empPassword} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type='submit' className='btn btn-success'>SignUp</button>

                    </form>
                </div>

            </div>

        </div>
    )
}
