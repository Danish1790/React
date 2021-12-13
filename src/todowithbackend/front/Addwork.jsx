import React, { useState,useEffect } from 'react'
import './css/Addwork.css'


const Addwork = (props) => {

    const [data, setData] = useState({
        head: '',
        subhead: '',
        paragraph: '',
        exptime:''
    })

    const change = (e) => {
        setData((oldItems) => {
            return {
                ...oldItems,
                [e.target.name]: e.target.value
            }
        })
    }

    const add = async (e) => {

        e.preventDefault()
        const {head,subhead,paragraph,exptime} = data;
        const date = new Date();
        const res = await fetch('./register',{
            method:"POST",
            headers:{
                "Content-Type":'application/json'
            },
            body:JSON.stringify({head,subhead,paragraph,date,exptime})
        })
        const work = await res.json();
        
        setData(
            {
                head: '',
                subhead: '',
                paragraph: '',
                date:'',
                exptime:"",
            }
        );
    }


    return (
        <>
            <div className='search-div' style={{display:props.mydisplay}}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Type Heading Here</label>
                    <input type="text" class="form-control" name='head' value={data.head} onChange={change} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Type Sub Head Here</label>
                    <input type="text" class="form-control" name='subhead' value={data.subhead} onChange={change} id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Write Detailed Description Here</label>
                    <textarea class="form-control" name='paragraph' value={data.paragraph} onChange={change} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Expire time</label>
                    <input type="datetime-local" class="form-control" name='exptime'value={data.exptime} onChange={change} id="exampleInputPassword1" />
                </div>
                
                <button class="btn btn-primary" onClick={add}>Add</button>
            </div>


        </>
    )

}

export default Addwork;
