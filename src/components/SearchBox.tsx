import React, { ChangeEvent } from 'react';
import './SearchBox.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  onChangeHandler,
  placeholder,
  className,
}: SearchBoxProps) => {
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
