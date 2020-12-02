import React from 'react';

const SearchForm = ({ inputRef, updateSearchTerm }) => {
  return (
    <>
      <form onSubmit={updateSearchTerm}>
        <div>
          <label htmlFor="searchTerm">Search Term:</label>
          <input
            type="text"
            id="searchTerm"
            placeholder="Baby goat"
            ref={inputRef} // connection to ref
          />
        </div>
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
