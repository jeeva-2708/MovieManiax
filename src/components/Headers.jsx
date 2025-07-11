import { Link, NavLink } from "react-router-dom";
import "flowbite";

const Headers = () => {
  const active =
    "block py-2 px-3  text-[#4F46E5] rounded-sm  md:p-0 ";
  const inActive =
    "block py-2 px-3 text-white rounded-sm hover:text-[#4f46e5] md:p-0 ";

  const navThings = [
    {
      id: "1",
      to: "/",
      name: "Home",
    },
    {
      id: "2",
      to: "/movie",
      name: "Movie",
    },

    {
      id: "3",
      to: "/TvShows",
      name: "TV shows",
    },
  ];

  return (
    <div className="bg-[#121418]">
      <nav className="bg-[#121418]">
  <div className="flex flex-wrap items-center justify-between p-4 md:p-0 w-full max-w-screen-xl mx-auto px-4">
    
    {/* Logo */}
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <span className="self-center text-[30px] md:text-[48px] font-bangers whitespace-nowrap text-[#F5F5F5]">
        Moviemaniax
      </span>
    </Link>

    {/* Right side (search + hamburger) */}
    <div className="flex md:order-2">
      {/* Mobile toggle button */}
      <button
        type="button"
        data-collapse-toggle="navbar-menu"
        aria-controls="navbar-menu"
        aria-expanded="false"
        className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
      >
        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
        <span className="sr-only">Open main menu</span>
      </button>

      {/* Desktop search */}
      <div className="relative hidden md:block">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
    </div>

    {/* Collapsible Menu */}
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
      id="navbar-menu"
    >
      {/* Mobile search input */}
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          id="search-navbar-mobile"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>

      {/* Navigation links */}
      <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-gray-800 border-gray-700 md:bg-transparent md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 font-bangers text-[20px]">
        {navThings.map((nav) => (
          <li key={nav.id}>
            <NavLink
              to={nav.to}
              className={({ isActive }) => (isActive ? active : inActive)}
              aria-current="page"
            >
              {nav.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
};

export default Headers;
