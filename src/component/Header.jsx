import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";

export const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-3 grid grid-cols-12 gap-4 justify-between items-center rounded-xl">
      <div className="appBranding col-span-3 lg:col-span-3 md:col-span-4 sm:col-span-6">
        <img src="../src/assets/logo.png" alt="Logo" />
      </div>
      <div className="appNavbar col-span-9 lg:col-span-9 md:col-span-8 sm:col-span-6 flex align-center justify-end gap-4">
        <nav className="space-x-6 text-md text-white">
          <Link to="/" className="text-white hover:text-red-600">
            Home
          </Link>
          <Link
            to="/favorites"
            className="text-white hover:text-red-500 inline-flex items-center"
          >
            Favorites <FaHeart className="ms-1" />
          </Link>
        </nav>
      </div>
    </header>
  );
};
