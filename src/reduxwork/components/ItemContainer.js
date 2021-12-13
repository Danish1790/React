import React from 'react'
import {connect} from 'react-redux'
import { buyIcecream } from '../redux/icecream/icecreamActions'
import { buyCake } from '../redux/cake/Cakeactions'

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>

        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{
    const itemState = ownProps.cake? 
    state.cake.noOfCakes : state.icecream.noOfIcecreams
    return{
        item:itemState
    }
}

const mapDispatchToProps = (dispatch,ownProps) =>{
    const DispatchFunction = ownProps.cake?
    ()=> dispatch(buyCake()):()=>dispatch(buyIcecream())
    return{
        buyItem:DispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
