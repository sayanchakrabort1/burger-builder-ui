import React from 'react'
import classes from './modal.module.css'
import Aux from '../../../HOC/Auxi1'
import Backdrop from '../Backdrop/Backdrop'

const modal =( props ) => (
<Aux>
    
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div 
        className={classes.Modal}
        style={
            {
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }
        }>
        <button className={classes.CancelButton} onClick={props.cancelButtonHit}> <strong> X </strong></button>
        {props.children}
        <button className={classes.ContinueButton}>Continue</button>
        <button className={classes.CancelButton2} onClick={props.cancelButtonHit}>Cancel</button>
    </div>
</Aux>
);

export default modal;