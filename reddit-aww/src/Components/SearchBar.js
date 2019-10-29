import React, { useState } from "react";
import './SearchBar.css'

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    onSearch(searchTerm)
    setSearchTerm('')
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for something cute! 😻"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <button onClick={handleClick}>🙀</button>
    </div>
  );
}

export default SearchBar;
