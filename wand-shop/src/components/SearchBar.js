import React from "react";
// Styling


const SearchBar = ({setQuery}) => {
 


  return (
      <div>
    <input className="search"
      onChange={(event) => setQuery(event.target.value)}
      placeholder="Search for a Wand"
    />
    </div>
  );
};

export default SearchBar;