import { BACKGROUND_IMAGE } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return (
        <div>
            <div className="absolute -z-10">
            <img src={BACKGROUND_IMAGE}
             alt="background-img"></img>
            </div>
            <GPTSearchBar />
        </div>
    )
}

export default GPTSearch;