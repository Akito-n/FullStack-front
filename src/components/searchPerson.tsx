import React from 'react';

const SearchPerson = ({ searchWord, handleSearch }) => {
  return (
    <div>
      <label>search</label>
      <input value={searchWord} onChange={handleSearch} />
    </div>
  );
};

export default SearchPerson;