import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
    const {gptMoviesName, tmdbMoviesResults} = useSelector(store => store.gpt);
    if (!gptMoviesName) return null;
    if (!tmdbMoviesResults) return null;
console.log(tmdbMoviesResults)
    return (
        <div>
            <div className="bg-black text-white p-4 m-4 bg-opacity-80">
            {
                gptMoviesName?.map((name, i) => (
                    <MovieList
                    key={name}
                    title={name}
                    movies={tmdbMoviesResults[i]} />
                ))
            }
            </div>
        </div>
    )
}

export default GPTMovieSuggestions;