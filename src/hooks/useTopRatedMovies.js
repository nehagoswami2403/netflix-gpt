import { useDispatch } from "react-redux";
import { API_OPTIONS, GET_TOP_RATED_MOVIES } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async() => {
        const data = await fetch(GET_TOP_RATED_MOVIES, API_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
    }

    useEffect(() => {
        getTopRatedMovies();
    })
    return (
        <div></div>
    )
}

export default useTopRatedMovies;