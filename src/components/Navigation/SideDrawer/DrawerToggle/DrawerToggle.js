import React from 'react';
import classes from './DrawerToggle.module.css'

const drawerToggle= (props) => (
    
    <button className={classes.stylus} onClick={props.clicked}><strong>≡ </strong>MENU</button>
    
    
);

export default drawerToggle;