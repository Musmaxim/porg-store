// components/Popup.tsx
import React from "react";
import Image from "next/image";

interface PopupProps {
  product: {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
  };
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ product, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="object-cover w-full h-48"
        />
        <h2 className="text-lg font-semibold mt-4">{product.name}</h2>
        <p className="text-gray-700">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default Popup;
