import React, { useState } from 'react';
import './style.css'
import data from './api';



const Carousel = () => {

    const [i, seti] = useState(0)
    const [imgSrc, setImgSrc] = useState(data[i].img)
    const [names, setname] = useState(data[i].name)
    const [fields, setfield] = useState(data[i].field)
    const [paras, setparas] = useState(data[i].para)

    const next = () => {
        if (i === data.length - 1) {
            // document.querySelector('.next').addEventListener('click', () => {
            
            console.log('clicked for query')
            setImgSrc(data[i].img)
            setname(data[i].name)
            setfield(data[i].field)
            setparas(data[i].para)
            seti(0)
            // })
        }
        else {
            seti(i + 1)
            setImgSrc(data[i].img)
            setname(data[i].name)
            setfield(data[i].field)
            setparas(data[i].para)
        }

    }
    const previous = () => {
        if (i === 0) {
            seti(data.length - 1)
            setImgSrc(data[i].img)
            setname(data[i].name)
            setfield(data[i].field)
            setparas(data[i].para)
        }
        else {
            seti(i - 1)
            setImgSrc(data[i].img)
            setname(data[i].name)
            setfield(data[i].field)
            setparas(data[i].para)
        }
    }

    return <>
        <div className='main'>
            <div><img className='img' src={imgSrc} /></div>
            <div>
                <h3>Name : {names}</h3>
                <h3>Field : {fields}</h3>
                <p>{paras}</p>
            </div>
            <div className='btns'>
                <button onClick={previous}>Previous</button><button className='next' onClick={next}>Next</button>
            </div>
        </div>
    </>
}

export default Carousel;