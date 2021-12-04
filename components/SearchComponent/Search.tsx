import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';

const Search = () => {
  return (
    <div className="relative mr-6 my-2">
      <input type="search" className="bg-purple-white shadow rounded border-0 p-3" placeholder="Search by name..." />
    </div>
  )
}

export default Search;
