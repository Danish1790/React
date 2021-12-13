import React,{useState} from 'react';


const Timer = () => {
    let [h,setH] = useState(0)
    let [m,setM] = useState(0)
    let [s,setS] = useState(0)


    const start = () =>{
        console.log('clicked')
        setInterval(()=>{
            setS(s+=1)
            if(s===59){
                setS(s=0)
                setM(m+=1)
                if(m==59){
                    setM(m=0)
                    setH(h+=1)
                    if(h==24){
                        setH(h+=0)
                    }
                }
            }
        },1000)

    }

    return<>
        <h1>this is a timer</h1>
        <h3>Hours {h} : Minutes {m} : Seconds {s}</h3>
        <button onClick={start}>Start</button>
    </>
}


export default Timer;