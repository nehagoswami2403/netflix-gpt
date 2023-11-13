import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSlice from "./moviesSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userSliceReducer,
            movies: moviesSlice,
        }
    }
)

export default appStore;