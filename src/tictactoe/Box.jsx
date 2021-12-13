import React,{useState} from 'react'
import { useEffect } from 'react/cjs/react.development'
import './Box.css'


const Box = ({clsname,choose,name}) =>{
    const[text,setText] = useState('This is a box ')

    let remainingList = ['b1','b2','b3','b4','b5','b6','b7','b8','b9']
    let usedList = []
    const change = (e) => {
        setText(choose)
        // remainingList.splice(remainingList.indexOf(remainingList[e.target.bNo]),1)
        console.log('this is bno',e.target.name)
        // console.log('updated remaining list---->',remainingList)
    }

    useEffect(()=>{
        console.log('change rendered')
        let rNo = Math.floor(Math.random()*7)
    },[change])

    return(
        <>
            <div className={clsname} name={name} onClick={change}>
                {text}
            </div>
        </>
    )
}


export default Box;