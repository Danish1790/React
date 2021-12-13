import React, { useState, useEffect } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './css/tour.css'
// import data from './tourapi'


const Tour = (props) => {

    
    return <>
        <div className="card" style={{ width: '30rem' }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <div className='price text-center d-flex justify-content-around'>
                    <h5 className="card-title">{props.head}</h5>
                    <h6>{props.price}</h6>
                </div>
                <p className="card-text">{props.para}</p>
                <a  className='btn btn-primary' id={props.id} onClick={props.fn}>Not Interested</a>
            </div>
        </div>
    </>
}


export default Tour;