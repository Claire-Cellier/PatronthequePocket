interface SearchInterface {
    search : string,
    setSearch : Dispatch<React.SetStateAction<string>>,
}
function Search ({search, setSearch} : SearchInterface){
    return (
        <input 
        type="text" 
        id="search" 
        value={search} 
        placeholder="Nom du patron"
        onChange={(event) => setSearch(event.target.value)}
       />
    )
}

export default Search