
import useNowplayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";



const Browse = () => {
    useNowplayingMovies();
    return (
        <div>
            <Header />
        </div>
    )
}

export default Browse;