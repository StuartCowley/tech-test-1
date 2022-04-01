import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/Search.css";

const Search = ({ setSearchResults }) => {
  const [searchValue, setSearchValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(searchValue));
  };

  return (
    <div className="Search">
      <form className="seach-form" onSubmit={handleSubmit}>
        <input 
          className="search-input" 
          type="text"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="search-button"
          type="submit"
        >Launch!</button>
      </form>
    </div>
  );
};

export default Search;