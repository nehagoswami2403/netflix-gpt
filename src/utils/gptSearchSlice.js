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
            state.gptMoviesName = gptMoviesName
            state.tmdbMoviesResults = tmdbMoviesResults
        },
        removeGPTData: (state) => {
            state.gptMoviesName = null
            state.tmdbMoviesResults = null
        }
    }
})

export const { toggleGptSearch, addGPTMovieResults, removeGPTData } = GPTSearchSlice.actions;
export default GPTSearchSlice.reducer;