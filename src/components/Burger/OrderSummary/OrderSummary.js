import React from 'react'
import Aux from '../../../HOC/Auxi1'
const orderSummary= (props) => {

    const ingredientSummary= Object.keys(props.ingredients)

    .map(igKey => {
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} </li>
    })

    return(
        <Aux>
            <h3> Your Order!</h3>
            <p> Your delicious burger with the following Ingredients</p>
            <p><strong>Total Price: Rs.{props.TotalPrice} </strong></p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Continue to Checkout? </p>
        </Aux>
    )



};

export default orderSummary;