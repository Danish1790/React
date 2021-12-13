import React,{useState} from 'react'
import Counter from './Counter';
import { NavLink } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/Work.css'



const Work = ({ heading, subhead, para, date, exptime, afterdel }) => {

    // =============== time counter starts here
    

    // =============== time counter ends here


    const Delete = async (e) => {
        console.log(e.target.className)
        console.log(heading, subhead, para)

        const res = await fetch('./delete', {
            method: "DELETE",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({ head: heading })
        })
        const del = await res.json()

        afterdel();
    }

    return (
        <>
            <div className='cols col-lg-3 col-md-4 col-sm-12'>
                <div class="card" style={{ width: "18rem" }}>
                    <Counter creat={date} exp={exptime}/>
                    <div class="card-body">
                        <h5 class="card-title">{heading}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{subhead}</h6>
                        <p class="card-text">{para}</p>
                        <p>Created on {date}</p>
                        <p>Expires at {exptime}</p>
                        <div>
                            <button className='btn btn-primary'><NavLink className='nav-link update-navlivk' exact to='/Addwork'>Update</NavLink></button>
                            <button className='btn btn-secondary' onClick={Delete}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work;