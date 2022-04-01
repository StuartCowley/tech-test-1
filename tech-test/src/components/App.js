import React, { useState } from "react"
import SearchResults from "./SearchResults";
import Search from "./Search";
import "../styles/App.css";

function App() {
  const [ searchResults, setSearchResults ] = useState([]);

  return (
    <div className="App">
      <img 
        className="nasa-logo" 
        alt="nasa-logo" 
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg">
      </img>
      <Search setSearchResults={setSearchResults} />
      <SearchResults results={searchResults} />
    </div>
  );
};

export default App;
