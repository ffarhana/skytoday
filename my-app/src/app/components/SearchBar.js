import React from 'react';

const SearchBar = () => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input type="text" placeholder="Enter city name" style={{ padding: '10px', width: '200px' }} />
      <button style={{ padding: '10px', marginLeft: '10px' }}>Search</button>
    </div>
  );
};

export default SearchBar;