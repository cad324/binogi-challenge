import { createSlice } from '@reduxjs/toolkit'

export const bookmarkSlice = createSlice({
    name: 'Bookmark Slicex',
    initialState: {
        bookmarks: []
    },
    reducers: {
        bookmarker: (state, action) => {
            state.bookmarks = [...state.bookmarks, action.payload]
        }
    }
})

export const { bookmarker } = bookmarkSlice.actions;
export default bookmarkSlice.reducer;