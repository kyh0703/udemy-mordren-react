import React from 'react';
import CategoryItem from '../category/CategoryItem';
import './Directory.scss';

function Directory({ categories }) {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default Directory;
