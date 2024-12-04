"use client";

import { useState, useEffect, useRef, FC } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Убедитесь, что этот импорт корректен
import { MdDehaze, MdSearch } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderDynamicProps {
  className?: string;
}

const HeaderDynamic: FC<HeaderDynamicProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      closeMenu(); // Закрыть меню, если ширина экрана превышает 768px
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      closeMenu();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleResize]);

  return (
    <header className={cn(className, "bg-stone-200 shadow")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <MdOutlineClose size={25} /> : <MdDehaze size={25} />}
        </button>
        {/* Строка поиска */}
        <div className="flex-grow mx-4 flex justify-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Поиск товаров..."
              className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer">
              <MdSearch className="text-gray-700" size={25} />
            </button>
          </div>
        </div>
        <Link href="/" className="text-2xl font-bold">
          порг/стор
        </Link>
      </div>

      {/* Меню */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold">Меню</h2>
          <button onClick={closeMenu} className="text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="px-4 py-2">
          <Link href="/about">
            <div className="block text-gray-700 text-lg font-bold py-2 px-8 border-b border-transparent rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
              Мы
            </div>
          </Link>
          <Link href="/contact">
            <div className="block text-gray-700 text-lg font-bold py-2 px-8 border-b border-transparent rounded-lg  hover:bg-gray-300 cursor-pointer transition duration-200">
              Контакты
            </div>
          </Link>
          <Link href="/services">
            <div className="block text-gray-700 text-lg font-bold py-2 px-8 border-b border-transparent rounded-lg hover:bg-gray-300 cursor-pointer transition duration-200">
              Услуги
            </div>
          </Link>
          <div className="mt-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderDynamic;
