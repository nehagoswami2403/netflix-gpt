
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";




const Browse = () => {
    //fetch movie now playing details and store in the movie slice
    useNowplayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    return (
        <div>
            <Header />
           <MainContainer />
           <SecondaryContainer />
        </div>
    )
}

export default Browse;