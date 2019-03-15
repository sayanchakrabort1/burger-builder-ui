import React from 'react';
import classes from './Logo.module.css'
import burgerlogo from '../../assets/images/burgerlogo.png'
const logo= (props) => (
    
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerlogo} alt="My Burger"></img>
    </div>
);

export default logo;