import React, { useState, useEffect } from "react";
import Tour from './tour'
import './css/tours.css'

import data from './tourapi'



const Tours = () => {
    
    console.log(data)
    let ourData = data
    const[curr,setCurr] = useState(ourData);
 
    let last = [];

    const [display,setDisplay] = useState('block');
    const remove = (e) => {
        // setDisplay('none')
        setDisplay(curr[e.target.id])

        // console.log('clicked')
        // console.log('id is ---------->',e.target.id)
        // console.log('before splice curr is-->',curr)
        // // curr.splice(curr[e.target.id],1)
        
        // console.log('our data is-->',ourData)
        
        // setCurr(ourData)
        // console.log('curr is-->',curr)

        

        
        curr.map((item)=>{
            console.log('item is --->',item)
            last.push(item)
        })

        
    }
    

    return <>
        <h1>This is props</h1>
        <div className='cards' >
            {curr.map((value, index, id) => (
                <Tour style={{display:display}} id={index} img={value.img} head={value.head} price={value.price} para={value.para} fn={remove} />
            ))}
        </div>
    </>
}

export default Tours;