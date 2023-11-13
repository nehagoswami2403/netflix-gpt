import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        addNowPlayingMovies: null,
        addTrailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload
        }
        
    }
})

export const { addNowPlayingMovies, addTrailerVideo } = MoviesSlice.actions;
export default MoviesSlice.reducer;