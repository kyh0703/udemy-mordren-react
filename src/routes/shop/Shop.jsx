import React, { Fragment, useContext } from 'react';

import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCard from '../../components/product/ProductCard';
import CategoryPreview from '../../components/category/CategoryPreview';

import './Shop.scss';

function Shop(props) {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);

  return (
    <div className='shop-container'>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
}

export default Shop;
