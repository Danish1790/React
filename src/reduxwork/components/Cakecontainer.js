import React from 'react'

import { buyCake } from '../redux/cake/Cakeactions'  // imported the buycake action 
import {connect} from 'react-redux'

const Cakecontainer = (props) => {
    return (
        <div>
            <h2>No of Cakes : {props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cakecontainer)
// export default Cakecontainer