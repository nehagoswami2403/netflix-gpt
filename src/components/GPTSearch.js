import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return (
        <>
        <div className="fixed -z-10">
            <img className="h-screen object-cover" src={BACKGROUND_IMAGE}
             alt="background-img"></img>
            </div>
            <div className="pt-[30%] md:p-0">
            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
        </>
    )
}

export default GPTSearch;