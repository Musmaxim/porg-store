// components/Product.tsx
import React from 'react';
import Image from 'next/image';
import { AiOutlineShoppingCart } from 'react-icons/ai';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
  onClick: () => void;
}

const Product: React.FC<ProductProps> = ({ product, onClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer" onClick={onClick}>
      <Image src={product.image} alt={product.name} width={300} height={300} className="object-cover w-full h-48" />
      <div className="p-4">
        <h2 className="text-xl font-black">{product.name}</h2>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
        <div className="flex justify-end mt-2">
          <AiOutlineShoppingCart size={25} className="text-gray-600 hover:text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Product;