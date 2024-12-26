// components/Footer.tsx
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaTelegramPlane } from 'react-icons/fa';
import { Separator } from '../ui/separator';

const Footer = () => {
  return (
    <footer className="py-4 px-8">
      <Separator color='red' />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 py-4">
        {/* Логотип слева */}
        <Link href="/" className="text-2xl lg:text-3xl font-bold mb-4 md:mb-0">
          порг/стор
        </Link>

        {/* Центр */}
        <div className="text-center mb-4 md:mb-0">
          <p className="text-md font-semibold">cоздан MusMaxim</p>
        </div>

        {/* Контактная информация справа */}
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-1">
            <FaEnvelope className="mr-2" />
            <span>musmaxim@gmail.com</span>
          </div>
          <div className="flex items-center mb-1">
            <FaPhone className="mr-2" />
            <span>89197601711</span>
          </div>
          <div className="flex items-center">
            <FaTelegramPlane className="mr-2" />
            <span>@musmaxim</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;