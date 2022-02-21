import { configureStore } from '@reduxjs/toolkit'

import recipesReducer from './recipes-slice';

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  }
});

export default store;