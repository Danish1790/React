import React from 'react'



import { useSelector,useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/Cakeactions'


const HooksCakeContainer = () => {

    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>No Of cakes : {noOfCakes} </h1>
            <button onClick={ ()=>dispatch(buyCake()) }>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
