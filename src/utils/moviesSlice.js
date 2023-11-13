import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        addNowPlayingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        
    }
})

export const { addNowPlayingMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;