import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';


function Signup() {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const change = (e) => {
        setData((oldItems) => {
            return {
                ...oldItems,
                [e.target.name]: e.target.value
            }
        })
    }

    const Add = (e) => {
        e.preventDefault()
        const { name, email, password } = data;
        console.log(name, email, password)

        const res = fetch('./Login', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        })
        // const work =  res.json();

        setData(
            {
                name: '',
                email: '',
                password: ''
            }
        );
    }


    return (
        <>
            <div className='container'>
                <div className='text-center'>
                    <h2>Signup Form</h2>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Name</label>
                        <input type="email" onChange={change} name='name' value={data.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={change} name='email' value={data.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={change} name='password' value={data.password} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={Add} className="btn btn-primary">
                        <NavLink className='nav-link update-navlivk' exact to='/Login'>Submit</NavLink>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup
