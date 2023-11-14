import { MOVIE_CARD_IMAGE_CDN_URL } from "../utils/constants";

const MovieCard = ({movieLogo}) => {
    if(!movieLogo) return;
    return (
        <div className="w-36 pr-4">
            <img src={MOVIE_CARD_IMAGE_CDN_URL + movieLogo} alt="movieCardImage" />
        </div>
        
    )
    
}

export default MovieCard;