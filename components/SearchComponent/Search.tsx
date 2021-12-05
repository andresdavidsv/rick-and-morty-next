import React from 'react';

const Search = ({ handleName }) => {
  return (
    <div className="relative mr-6 my-2">
      <input
        type="search"
        className="bg-purple-white shadow rounded border-0 p-3"
        onChange={(e) => handleName(e.target.value)}
        placeholder="Search by name..."
      />
    </div>
  );
};

export default Search;
