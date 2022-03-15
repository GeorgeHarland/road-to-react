const Search = ({ currentSearch, onSearch }) => (  
    <div>
    <label htmlFor="search">Search: </label>
    <input 
        id="search"
        type="text" 
        value={currentSearch} 
        onChange={onSearch} 
    />
    <p>
        Searching for <strong>{currentSearch}</strong>.
    </p>
    </div>
)

export default Search;