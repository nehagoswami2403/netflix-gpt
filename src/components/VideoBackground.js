import { useSelector } from "react-redux";
import UseTrailerVideo from "../hooks/useTrailerVideo";


const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movies?.addTrailerVideo);
    // fetch video trailer and store data in the movies store
    UseTrailerVideo(movieId);

    return (
        <div className="">
           <iframe className="w-screen aspect-video"
            src={"https://www.youtube.com/embed/" + trailerVideo?.key + '?autoplay=1&mute=1' }
             title="YouTube video player"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground;