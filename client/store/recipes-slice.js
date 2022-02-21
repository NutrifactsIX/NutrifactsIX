import { createSlice } from "@reduxjs/toolkit";

const initialRecipesState = { 
  recipes: [],
  newRecipeName: '',
  newIngredientsList: ''
}

const recipeReducer = createSlice({
  name: 'recipes',
  initialState: initialRecipesState,
  reducers: {
    setRecipe(state, action) {
      state.recipes.push(action.payload)
    },
    setRecipeName(state, action) {
      state.newRecipeName = action.payload
    },
    setIngredientList(state, action) {
      state.newIngredientsList = action.payload
    },
  }
});

export const recipeActions = recipeReducer.actions;

export default recipeReducer.reducer;