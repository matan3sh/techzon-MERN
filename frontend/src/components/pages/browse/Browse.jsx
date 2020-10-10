import React from 'react';
import BrowseList from './BrowseList';

import { products } from 'data/products';

const Browse = () => {
  return (
    <div>
      <div className='browse__header'>
        <p>
          1-16 of 896 results for <span>"USB TYPE C"</span>
        </p>
      </div>
      <BrowseList products={products} />
    </div>
  );
};

export default Browse;
