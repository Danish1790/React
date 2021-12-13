import React, { useState ,useEffect} from 'react'
import './css/stop.css'

const Stopwatch = () => {

    

    const [inputs, setInputs] = useState({
        hours: 0,
        mins: 0,
        secs: 0
    })
    useEffect(() =>{
        console.log('useEffect ')
    },[])


    const fn = (e) => {
        setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }))
    }

    const [t, setT] = useState({
        nh: '',
        nm: '',
        ns: ''
    })

    const submit = () => {
        console.log(inputs)
        setT({
            nh: inputs.hours,
            nm: inputs.mins,
            ns: inputs.secs
        })

    }
    const timer = () => {
        console.log(t)
        const myInterval = setInterval(() => {

            if (t.ns != 0) {
                setInputs(t.ns -= 1)
            }

            else if (t.ns == 0) {
                setInputs(t.ns = 59)
                setInputs(t.ns -= 1)
                setInputs(t.nm -= 1)

                if (t.nm == 0) {
                    if (t.nh != 0) {
                        setInputs(t.nh -= 1)
                        setInputs(t.nm = 59)
                    }
                    if (t.nh == 0 && t.nm == 0) {
                        alert('time ended')
                        clearInterval(myInterval)
                        
                    }

                }
            }

        }, 100)
    }
    const Reset = () =>{
        
        console.log('clicked reset')
        setT({
            nh:0,
            nm:0,
            ns:0
        })
        // setInputs()
    }


    return <>
        <h1>This is stop watch</h1>
        <h2>
            hours :<input type="number" name='hours' value={inputs.hours} onChange={fn} />
            minutes:<input type="number" name='mins' value={inputs.mins} onChange={fn} />
            secs:<input type="number" name='secs' value={inputs.secs} onChange={fn} />
        </h2>
        <h3>{t.nh}:{t.nm}:{t.ns}</h3>
        <button type='submit' onClick={submit}>Submit</button>
        <button onClick={timer} >Start Timer</button>
        <button onClick={Reset} >Reset Timer</button>
    </>
}

export default Stopwatch;