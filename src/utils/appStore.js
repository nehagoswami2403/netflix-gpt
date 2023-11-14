import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSearchSlice from "./gptSearchSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userSliceReducer,
            movies: moviesSlice,
            gpt: gptSearchSlice
        }
    }
)

export default appStore;