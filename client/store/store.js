import { configureStore } from '@reduxjs/toolkit'

import recipeReducer from './recipes-slice';

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  }
});

export default store;