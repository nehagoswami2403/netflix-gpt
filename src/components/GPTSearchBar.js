const GPTSearchBar = () => {
    return (
        <div className="pt-[7%] flex justify-center">
            <form className="w-1/2 grid grid-cols-12">
                <input className="p-4 m-4 col-span-9" type="text" placeholder="what to you want to watch today ?" />
                <button className="p-4 m-4 rounded-lg col-span-3 bg-red-700 text-white font-bold">Search</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;