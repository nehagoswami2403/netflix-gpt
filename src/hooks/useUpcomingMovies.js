import { useDispatch } from "react-redux";
import { API_OPTIONS, GET_UPCOMING_MOVIES } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async() => {
        const data = await fetch(GET_UPCOMING_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(() => {
        getUpcomingMovies();
    })
    return (
        <div></div>
    )
}

export default useUpcomingMovies;