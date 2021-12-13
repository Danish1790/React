import React from 'react'
import {buyIcecream} from '../redux/icecream/icecreamActions'
import {connect} from 'react-redux'

const IcecreamContainer = (props) => {
    return (
        <div>
            <h1>No Of Icecreams: {props.noOfIcecreams}</h1>
            <button onClick={props.buyIcecream}>Buy Icecream</button>
        </div>
    )
}

// export default IcecreamContainer


const mapStateToProps = state =>{
    return{
        noOfIcecreams:state.icecream.noOfIcecreams
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIcecream: () => dispatch(buyIcecream())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IcecreamContainer)