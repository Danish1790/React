import React,{useState,useEffect} from "react";
import './Game.css'
import Boxes from './Boxes'

const Game = () => {


    const [choose,setChoose] = useState('This is box');
    const play = (e) =>{
        console.log('clicked the play button')
        alert('Choose tick or cross')
    }    
    const tick = () =>{
        setChoose('tick')
        console.log(choose)
    }
    const cross = () =>{
        setChoose('cross')
        console.log(choose)
    }

    
    useEffect(()=>{
        console.log('choose rendered now')
    },[choose])

  



    return(
        <>
            <div className='box-div'>
                <Boxes choosed={choose}/>
            </div>
            <div className='btns-div'>
                <button className='btns' onClick={play}>Play</button>
                <button className='btns'>Reset</button>
            </div>
            <div className='btns-div'>
                <h3>Select a choice and hit the play button to start the Game </h3>
                <button className='btns' onClick={tick}>Tick</button>
                <button className='btns' onClick={cross}>Cross</button>
            </div>
            
        </>
    )
}

export default Game;