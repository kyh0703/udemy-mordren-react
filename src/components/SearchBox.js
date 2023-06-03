import React from 'react';
import './SearchBox.css';

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
