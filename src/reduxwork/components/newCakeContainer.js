import React,{useState} from 'react'

import { buyCake } from '../redux/cake/Cakeactions'  // imported the buycake action 
import {connect} from 'react-redux'

const NewCakeContainer = (props) => {

    let [number,setNumber] = useState(1)
    return (
        <div>
            <h2>No of Cakes : {props.noOfCakes}</h2>
            <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={()=>props.buyCake(number)}>Buy {number} Cake</button>
        </div>
    )
}

const mapStateToProps = state =>{     //calling here the state from redux to get 
    return {
        noOfCakes:state.cake.noOfCakes
    }
}

const mapDispatchToProps = dispatch =>{   // calling here the dipatch function to run 
    return{
        buyCake: number => dispatch(buyCake(number))
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)
// export default Cakecontainer