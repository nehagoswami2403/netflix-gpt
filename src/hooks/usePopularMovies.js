import { useDispatch } from "react-redux";
import { API_OPTIONS, GET_POPULAR_MOVIES } from "../utils/constants";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async() => {
        const data = await fetch(GET_POPULAR_MOVIES, API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addPopularMovies(json.results))
    }

    useEffect(() => {
        getPopularMovies();
    }, [])

    return (
        <div></div>
    )
}

export default usePopularMovies;