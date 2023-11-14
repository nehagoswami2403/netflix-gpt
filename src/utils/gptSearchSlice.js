import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleGptSearch: false,
        gptMoviesName: null,
        tmdbMoviesResults: null
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.toggleGptSearch = !state.toggleGptSearch
        },
        addGPTMovieResults: (state, action) => {
            const {gptMoviesName, tmdbMoviesResults} = action.payload
            state.gptMoviesName = tmdbMoviesResults
            state.tmdbMoviesResults = gptMoviesName
        }
    }
})

export const { toggleGptSearch, addGPTMovieResults } = GPTSearchSlice.actions;
export default GPTSearchSlice.reducer;