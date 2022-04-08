import React, { useState } from "react";
import PropTypes from "prop-types";
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
          placeholder="Search Images"
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

Search.propTypes ={
  setSearchResults: PropTypes.func,
};