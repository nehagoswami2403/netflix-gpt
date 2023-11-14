import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovieResults } from "../utils/gptSearchSlice";

const GPTSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch(null);
    const handleGPTSearchClick = async() => {
        console.log(searchText.current.value);
        // make an gpt api call to get searched movie results 
        // const movieQuery = "Act as a movie recommendation system and suggest only 5 movies for the query" + searchText.current.value;
        //     const gptResults = await openai.chat.completions.create({
        //         messages: [{ role: 'user', content: movieQuery }],
        //         model: 'gpt-3.5-turbo',
        //       });
        const gptResults = [{
            "message": {
              "content" : "Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jane bhi Do Yaron, Padosan"
            }
          }]

          if (!gptResults) {
            // error handling
          }

          const gptMovieList = gptResults[0]?.message?.content.split(",");
          console.log(gptMovieList);

          const data = gptMovieList.map((movie) => getGPTMovieDetails(movie));
          const tmdbResults = await Promise.all(data);
          console.log(tmdbResults);
          dispatch(addGPTMovieResults({gptMoviesName: gptMovieList ,tmdbMoviesResults: tmdbResults}));
    };

    const getGPTMovieDetails = async(movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        return json.results;
      }
    return (
        <div className="pt-[7%] flex justify-center">
            <form className="w-1/2 grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
                <input className="p-4 m-4 col-span-9" ref={searchText} type="text" placeholder="what to you want to watch today ?" />
                <button onClick={handleGPTSearchClick} className="p-4 m-4 rounded-lg col-span-3 bg-red-700 text-white font-bold" on>Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;