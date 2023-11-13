import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, GET_NOWPLAYINGMOVIES_LIST } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowplayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async() => {
        const data = await fetch(GET_NOWPLAYINGMOVIES_LIST, API_OPTIONS);
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])
}

export default useNowplayingMovies;