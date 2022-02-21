import { createSlice } from "@reduxjs/toolkit";

const initialRecipesState = { recipes: [], }

const recipesReducer = createSlice({
  name: 'recipes',
  initialState: initialRecipesState,
  reducers: {
    addRecipe(state, action) {
      state.recipes.push(action.payload)
    },
    removeRecipe(state, action) {
      const deleteIndex = state.recipes.findIndex((el) => el._id === action.payload)
      state.recipes.slice(deleteIndex, 1)
    },
    editRecipe(state, action) {
      const editIndex = state.recipes.findIndex((el) => el._id === action.payload.id)
      state.recipes[editIndex] = {...action.payload.newInfo}
    },
  }
});

export const counterActions = counterSlice.actions;

export default recipesSlice.reducer;


/*
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';


  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
  }

  <button onClick={incrementHandler}>Increment</button>
  <button onClick={increaseHandler}>Increment by 5</button>
  <button onClick={decrementHandler}>Decrement</button>
*/