import React from 'react'


const Tweet  = (props) =>{
 
    return<>
        <h1>Name is {props.name}</h1>
        <h1>Ccp is {props.ccp}</h1>
        <h1>Tweet is {props.tweet}</h1>
    </>
}

export default Tweet;