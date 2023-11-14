import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
            <img src={BACKGROUND_IMAGE}
             alt="background-img"></img>
            </div>
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch;