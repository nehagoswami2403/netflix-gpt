import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: 'movies',
    initialState: {
        addNowPlayingMovies: null,
        addTrailerVideo: null,
        addPopularMovies: null,
        addUpcomingMovies: null,
        addTopRatedMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.addTrailerVideo = action.payload
        },
        addPopularMovies: (state, action) => {
            state.addPopularMovies = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.addUpcomingMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.addTopRatedMovies = action.payload
        }
        
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies, addTopRatedMovies } = MoviesSlice.actions;
export default MoviesSlice.reducer;