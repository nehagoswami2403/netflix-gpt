import { createSlice } from "@reduxjs/toolkit";

const GPTSearchSlice = createSlice({
    name: 'gpt',
    initialState: {
        toggleGptSearch: false
    },
    reducers: {
        toggleGptSearch: (state) => {
            state.toggleGptSearch = !state.toggleGptSearch
        }
    }
})

export const { toggleGptSearch } = GPTSearchSlice.actions;
export default GPTSearchSlice.reducer;