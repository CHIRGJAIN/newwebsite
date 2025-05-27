import React from "react";
import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search For Products" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;