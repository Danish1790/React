import React, { useState,useEffect } from 'react'
import Tweet from './tweet'
import './css/tweets.css'

const Tweets = (props) => {


    const tweets = [
        {
            name: 'danish',
            ccp: '1790',
            tweet: "hey I am a x-cadet"
        },
        {
            name: 'talha',
            ccp: 'none',
            tweet: "hey I am a university student"
        },
        {
            name: 'waleed',
            ccp: 'none',
            tweet: "hey I am a school student"
        }
    ]
    const [clr, setclr] = useState(false)
    const bgChanger = () => {
        setclr((prev)=>!prev)
    }
    useEffect(()=>{
        console.log('color chnaged useEffect enabled only for clr')
    },[])

    return <>
        <div className={clr?"new":""}>
            <h2>Tweets</h2>
            <button onClick={bgChanger}>Change Bg</button>
            <div>
                {
                    tweets.map((value) => (
                        <Tweet name={value.name} ccp={value.ccp} tweet={value.tweet} />
                    ))
                }
            </div>
        </div>

    </>
}

export default Tweets;