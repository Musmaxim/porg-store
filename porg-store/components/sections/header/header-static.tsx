import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { MdSearch } from "react-icons/md";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";

interface HeaderStaticProps {
  className?: string;
}

const HeaderStatic: FC<HeaderStaticProps> = ({ className }) => {
  return (
    <header className={cn(className,  "shadow")}>
      <div className="flex justify-between items-center max-w-full mx-auto px-8 py-2 sm:px-6 lg:px-10">
        {/* Логотип */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl lg:text-3xl font-bold">
            порг/стор
          </Link>
        </div>

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

        {/* Навигация для больших экранов */}
        <div className="hidden md:flex space-x-4 text-lg font-bold">
          <ModeToggle/>
          <Link
            href="/about"
            className="flex justify-center items-center border border-black dark:border-white rounded-lg w-24 h-10 hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200"
          >
            Мы
          </Link>
          <Link
            href="/products"
            className="flex justify-center items-center border border-black dark:border-white rounded-lg w-24 h-10  hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200"
          >
            Товары
          </Link>
          <Link
            href="/contact"
            className="flex justify-center items-center border border-black dark:border-white rounded-lg w-24 h-10  hover:bg-gray-300 dark:hover:bg-gray-800 transition duration-200"
          >
            Услуги
          </Link>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default HeaderStatic;
