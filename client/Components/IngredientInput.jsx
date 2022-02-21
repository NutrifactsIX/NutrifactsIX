//Import dependencies
import React from 'react';
import "../App.scss"
import { useSelector, useDispatch } from 'react-redux';
import { recipeActions } from '../store/recipes-slice';

//Import Components



const IngredientInput = () => {
    const dispatch = useDispatch();
    const newRecipeName = useSelector((state) => state.recipes.newRecipeName);
    const newIngredientsList = useSelector((state) => state.recipes.newIngredientsList)

    const recipeNameHandler = (value) => {
        dispatch(recipeActions.setRecipeName(value))
    };
    const ingredientsListHandler = (value) => {
        dispatch(recipeActions.setIngredientList(value))
    };

    const submitHandler = () => {
        fetch('/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify({ name: newRecipeName, query: newIngredientsList })
        })
            .then(() => {
                console.log('MADE THE POST REQUEST!');
                // dispatch(recipeActions.setRecipeName(''))
                // dispatch(recipeActions.setIngredientList(''))
            })
    };

    return (
        <div>
            <h2>
                <input
                    type="text"
                    placeholder={"Recipe Name"}
                    value={newRecipeName}
                    onChange={(e) => recipeNameHandler(e.target.value)}
                />
                <input
                    type="text"
                    placeholder={"Add Ingredients Here!"}
                    value={newIngredientsList}
                    onChange={(e) => ingredientsListHandler(e.target.value)} />
                <button onClick={submitHandler}>Submit</button>
            </h2>
        </div>
    );

};


export default IngredientInput;