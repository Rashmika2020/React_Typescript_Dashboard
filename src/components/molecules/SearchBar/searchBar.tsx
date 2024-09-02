import Input from "../../atoms/input/Input";

const SearchBar = () => {
    return(
            <div className="search-box">
            <img src="assets/SearchBar/search.png" alt="search"/>
            <Input
                type="text"
                className="search-input"
                placeholder="Search..."
            />
            </div>
    )
}

export default SearchBar;