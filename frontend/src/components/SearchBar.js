import React, { useEffect, useState } from 'react';

const SearchBar = ({ searchMovies }) => {
  const [query, setQuery] = useState('');
  useEffect(()=>{
    searchMovies("");
  },[]);
  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query);
    // console.log(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
