'use client'

import React, { useState } from 'react';
import Product from '../component/product'; 
import Popup from '../component/popup'; 

interface ProductData {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ProductsProps {
  products: ProductData[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  const [currentProduct, setCurrentProduct] = useState<ProductData | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const handleProductClick = (product: ProductData) => {
    setCurrentProduct(product);
  };

  const handleClosePopup = () => {
    setCurrentProduct(null);
  };

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <section className='px-8'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-4">
        {displayedProducts.map((product) => (
          <Product key={product.id} product={product} onClick={() => handleProductClick(product)} />
        ))}
      </div>
      {currentProduct && (
        <Popup product={currentProduct} onClose={handleClosePopup} />
      )}
      <div className="flex justify-center mt-4">
        <button
          className="mx-1 px-3 py-1 rounded bg-gray-600 hover:bg-gray-500"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &lt; {/* Стрелочка влево */}
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-orange-500 text-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="mx-1 px-3 py-1 rounded bg-gray-600 hover:bg-gray-500"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          &gt; {/* Стрелочка вправо */}
        </button>
      </div>
    </section>
  );
};

export default Products;