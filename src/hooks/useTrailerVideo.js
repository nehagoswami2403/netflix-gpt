import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, GET_MOVIETRAILER_DETAILS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const UseTrailerVideo = (movieId) => {

    const dispatch = useDispatch();
    const getMoviesTrailer = async() => {
        const data = await fetch(GET_MOVIETRAILER_DETAILS + movieId + '/videos?language=en-US', API_OPTIONS);
        const json = await data.json();

        const filterTrailerDetails = json?.results?.filter(result => result.type === "Trailer" );

        const trailer = filterTrailerDetails.length ? filterTrailerDetails[0] : json.results[0];

        dispatch(addTrailerVideo(trailer))

    }

    useEffect(() => {
        getMoviesTrailer();
    }, [])
    return (
        <div></div>
    )
}

export default UseTrailerVideo;