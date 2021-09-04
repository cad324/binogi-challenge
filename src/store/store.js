import { configureStore } from '@reduxjs/toolkit';
import {default as bookmarkReducer} from './bookmarkSlice';
import {default as recipesReducer} from './recipesSlice';

export default configureStore({
    reducer: {
        bookmarker: bookmarkReducer,
        recipesSetter: recipesReducer
    }
  })