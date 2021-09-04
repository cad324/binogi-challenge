import { createSlice } from '@reduxjs/toolkit'

export const recipesSlice = createSlice({
    name: 'Recipes Slice',
    initialState: {
        data: {}
    },
    reducers: {
        recipesSetter: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { recipesSetter } = recipesSlice.actions;
export default recipesSlice.reducer;