import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center' }}>
        <input type="text" value={query} onChange={handleInputChange} placeholder="Search..."
          style={{ width: '80%', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }} />
        <button type="submit" style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', marginLeft: '10px' }}>
          Search </button>
      </form>
    </div>
  );
};

export default SearchBar;
