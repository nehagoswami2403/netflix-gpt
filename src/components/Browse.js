
import { useSelector } from "react-redux";
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.toggleGptSearch)
    //fetch movie now playing details and store in the movie slice
    useNowplayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    // wrapping it main and secon contanier inside react fragement
    return (
        <div>
           <Header />
           {showGptSearch ?  <GPTSearch /> : <> <MainContainer />
           <SecondaryContainer /> </> }
        </div>
    )
}

export default Browse;