import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
const controls=[

    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
    

];

const buildControls = (props) =>{

    
    return(
    <div className={classes.BuildControls}>
    <p> <strong> Current Price: Rs.{props.price} </strong></p>
        {controls.map(ctrl => (
            <BuildControl key= {ctrl.label} label={ctrl.label} added={ () => props.ingredientAdded(ctrl.type)} 
            removed={ () => props.ingredientRemoved(ctrl.type)}
            disabledLess={props.disabledLess[ctrl.type]}
            disabledMore={props.disabledMore[ctrl.type]}/>
            
        ))}
    <div className={classes.ButtonWrapper}>
    <button className={classes.OrderButton}
    disabled={props.purchase} onClick={props.purchasingFinal}>Order Now!</button>
    <button className={classes.ResetButton} onClick={props.reset}> Reset</button>
    </div>
    </div>
); }

export default buildControls;