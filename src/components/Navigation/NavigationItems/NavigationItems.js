import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import classes from './NavigationItem/NavigationItem.module.css'

const navigationItems= (props) =>(
    <ul className={classes.NavigationItem}>

        <NavigationItem link="/" active>Burger Builder </NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>

    </ul>
);

export default navigationItems;