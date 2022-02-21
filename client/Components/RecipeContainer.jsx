//Import dependencies
import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';
import '../App.scss';

//Import Components
import RecipeCard from './RecipeCards.jsx';

const recipeName = 'Pasta'
const ingredientData = [{
    "food_name": "eggs",
    "serving_qty": 1,
}, {
        "food_name": "bacon",
        "serving_qty": 2,
    }, {
        "food_name": "cheese",
        "serving_qty": 2,
    }, {
        "food_name": "toast",
        "serving_qty": 1,
    }, {
        "food_name": "ketchup",
        "serving_qty": 2,
    }, {
        "food_name": "lettuce",
        "serving_qty": 2,
    },
];

const addRecipeHandler = () => {
    dispatch(counterActions.addRecipe(/* add payload here*/))
};

const RecipeContainer = () => {
    // const [recipeString, setterFunction] = useState(initialState)
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recipes.recipes);

    return (
        <RecipeCard 
        className ="recipeContainer"
        name={recipeName}
        ingredients={ingredientData}
        />
    )
}

export default RecipeContainer;


/* 
data.food => array of objects
each obj => need access to certain info
store each as an obj in state
state= [{name: recipe name, ingredients=[], chart= .svg}, {second recipe}]

"food_name": "eggs",
"serving_qty": 2,
"serving_unit": "large",
"serving_weight_grams": 100,
"nf_calories": 143,
"nf_total_fat": 9.51,
"nf_saturated_fat": 3.13,
"nf_cholesterol": 372,
"nf_sodium": 142,
"nf_total_carbohydrate": 0.72,
"nf_dietary_fiber": 0,
"nf_sugars": 0.37,
"nf_protein": 12.56,

data.food.photo =>
"photo":{
        "thumb": "https://nix-tag-images.s3.amazonaws.com/542_thumb.jpg",
        "highres": "https://nix-tag-images.s3.amazonaws.com/542_highres.jpg",
        "is_user_uploaded": false
        },

*/