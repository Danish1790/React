import React,{useState} from 'react';
import './css/clock.css'
import Timer from './timer'
import Stopwatch from './stopwatch';

const Clock = () => {


    let [hs,seths] = useState(0)
    let [ms,setms] = useState(0)
    let [ss,setsecs] = useState(0)


    setInterval(()=>{

        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds();

        let hr = 30*h+m/2
        let mr = 6*m
        let sr = 6*s

        seths(hr)
        setms(mr)
        setsecs(sr)

        
    },1000)


    return <>
        {/* <h1>Time is {hs}:{ms}:{ss}</h1> */}

        <div className='imgdiv'>
        <div className='hour' style={{transform : `rotate(${hs}deg)`}}></div>
        <div className='mins' style={{transform : `rotate(${ms}deg)`}}></div>
        <div className='secs' style={{transform : `rotate(${ss}deg)`}}></div>
            <img className='img' src='https://lh3.googleusercontent.com/proxy/LVXCENwWr68dwFb9OnPyW4rxDFQTV1NK33UE2BDi9fMypacDV8RAnnA7AR9KTUCWH0emTt0voY5YPzxX8bFXSN3rOUPSZQs' />
        </div>

        
        <div>
            <Timer />
        </div>

        <div>
            <Stopwatch />
        </div>
    </>
}

export default Clock;