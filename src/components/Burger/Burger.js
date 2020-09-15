import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './Burgeringredient/Burgeringredient';
const burger = (props) => {
    const transformedIngredient = Object.keys(props.ingredients)
    .map(igKey =>{
        
    });
    return (
        <div className={classes.Burger}>       
            <BurgerIngredient type='bread-top'/>
            <BurgerIngredient type='cheese'/>
            <BurgerIngredient type='meat'/>
            <BurgerIngredient type='bread-bottom'/>
        </div>
    );
}

export default burger;