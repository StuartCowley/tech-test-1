import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({results}) => {
  if (!results.length) {
    return <p>No Results</p>
  } else { 
    return (
      <>
      {results.map((image) => (
        <img
          className="card-image"
          src={image}
          alt="search-results"
        />
      ))}
      </>
    )
  };
};

export default SearchResults;