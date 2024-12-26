// components/Popup.tsx
import React, { useEffect } from "react";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";

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
  // Эффект для отключения прокрутки
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-lg p-4 relative w-full max-w-md md:max-w-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-4 text-gray-600 dark:text-gray-300"
          onClick={onClose}
        >
          <MdOutlineClose size={30} />
        </button>
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="object-cover w-full h-full mt-8"
        />
        <h2 className="text-lg font-semibold mt-4 dark:text-white">{product.name}</h2>
        <p className="text-gray-700 dark:text-gray-300">${product.price.toFixed(2)}</p>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{product.description}</p>
        <div className="flex justify-end mt-2">
          <AiOutlineShoppingCart size={25} className="text-gray-600 hover:text-gray-800 dark:text-gray-300 hover:dark:text-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default Popup;