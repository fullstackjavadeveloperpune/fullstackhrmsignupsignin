import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export const SignIn = () => {

    let navigate = useNavigate()

    const [employee, setEmployee] = useState({

        empEmailId: "",
        empPassword: ""
    })

    const { empEmailId, empPassword } = employee;

    const onInputChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const result = await axios.get(`http://localhost:8080/employees/signin/${empEmailId}/${empPassword}`)

        if (result.data) {
            navigate('/welcome')
        } else {
            alert("Oops Invalid Credentials Please try again!!!!")
            navigate('/')
        }

    }


    return (
        <div className='conatiner'>

            <div className='row'>

                <div className='col-md-9 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2>SignIn</h2>
                    <form onSubmit={(e) => onSubmit(e)}>


                        <div className='mb-3'>
                            Email<input type='email' name='empEmailId' value={empEmailId} onChange={(e) => onInputChange(e)} />
                        </div>

                        <div className='mb-3'>
                            Password<input type='password' name='empPassword' value={empPassword} onChange={(e) => onInputChange(e)} />
                        </div>

                        <button type='submit' className='btn btn-success'>SignIn</button>

                        <Link to={`/signup`} className='btn btn-info'>SignUp</Link>

                    </form>
                </div>

            </div>

        </div>
    )
}
