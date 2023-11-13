import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
    const getListOfMoviesDetails = useSelector(store => store.movies?.addNowPlayingMovies);
    console.log(getListOfMoviesDetails);

    if(!getListOfMoviesDetails) return;

    const mainMovie = getListOfMoviesDetails[0];
    console.log(mainMovie);
    const { original_title, overview, id } = mainMovie
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;