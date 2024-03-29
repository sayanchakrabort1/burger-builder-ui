import React from 'react';
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger= (props) =>{   
    let newIngredient= Object.keys(props.ingredients)
    .map(igKey=> {
        return[...Array(props.ingredients[igKey])].map((_, i) => {
           return <BurgerIngredient key={igKey + i} type= {igKey} /> ;
        });
    })

    .reduce((arr, el) => {
        return arr.concat(el)
    } , []);

    if(newIngredient.length === 0){
        newIngredient= <div> Add Elements! </div>
    }

    return(
        <div className={classes.Burger}>

            <BurgerIngredient type="bread-top" />
            {newIngredient}
            <BurgerIngredient type= "bread-bottom" />


        </div>
    );

}

export default burger;