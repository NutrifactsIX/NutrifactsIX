import { configureStore } from '@reduxjs/toolkit';

import recipeReducer from './recipes-slice';
import userReducer from './users-slice';


const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    users: userReducer,
  },
  devTools: process.env.NODE_ENV === 'development'
});

export default store;