import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <h1>My App</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div>
          <h2>Search Results:</h2>
          {searchResults.map((result) => (
            <div key={result.id}>
              <h3>{result.title}</h3>
              <p>{result.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
