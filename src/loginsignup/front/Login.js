import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';


const Login = () => {


    const [Logindata, setData] = useState({
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



    // let path;
    const Add = (e) => {
        e.preventDefault()
        const { name, email, password } = Logindata;
        console.log(name, email, password)

        const res = fetch('./Welcome', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        setData(
            {
                email: '',
                password: ''
            }
        );
    }

    let permission;

    let [toWelcome, setToWelcome] = useState('')
    useEffect(async () => {

        const res = await fetch('/permission', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const work = await res.json()
        console.log('this is the permission api---------->', work)
        try {
            if (work.message.lenth == 0) {

                // permission = work.message[0].name
                permission = true
                setToWelcome('/')
                console.log("this is welcome=====>", toWelcome)
                console.log("permission false")
            }
            else {
                if (work.message.lenth == 0) {
                    console.log('yes zero')
                }
                permission = false
                console.log("permission true")
                setToWelcome('/')
                console.log("this is welcome=====>", toWelcome)
                console.log("************************************")
                console.log("Signup first")
                // alert('SignUP First To Login ')
    
            }
            
        } catch (error) {
            console.log(error)
        }
        
        // path=toWelcome;


    }, [Add])









    return (
        <>
            <div className='container'>
                <div className='text-center'>
                    <h3>Now Login Here</h3>
                </div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" onChange={change} name='email' value={Logindata.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" onChange={change} name='password' value={Logindata.password} className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button onClick={Add} className="btn btn-primary">
                        <NavLink className='nav-link update-navlivk' exact to={toWelcome}>Submit</NavLink>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Login
