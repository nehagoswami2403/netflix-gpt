
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";




const Browse = () => {
    //fetch movie now playing details and store in the movie slice
    useNowplayingMovies();
    return (
        <div>
            <Header />
           <MainContainer />
           <SecondaryContainer />
        </div>
    )
}

export default Browse;