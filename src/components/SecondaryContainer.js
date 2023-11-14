import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20 pl-10">
            <MovieList title={"Now Playing"} movies={movies.addNowPlayingMovies} />
            <MovieList title={"Popular"} movies={movies.addPopularMovies} />
            <MovieList title={"Top Rated Movies"} movies={movies.addTopRatedMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.addUpcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer;
