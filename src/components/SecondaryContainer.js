import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies.addNowPlayingMovies);

    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20 pl-10">
            <MovieList title={"Now Playing"} movies={movies} />
            <MovieList title={"Trending"} movies={movies} />
            <MovieList title={"Horror Movies"} movies={movies} />
            <MovieList title={"Upcoming Movies"} movies={movies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;
