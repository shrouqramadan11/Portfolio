import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import lightLogo from "../assets/logo-light-mood.png";
import darkLogo from "../assets/logo-black-mood.png";

export default function Navbar({ dark, setDark }) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Me', path: '/about' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="relative z-30 max-w-7xl w-full mx-auto px-6 py-6 transition-colors duration-500">
      <div className="flex items-center justify-between">
        {/* SR Logo */}
            <Link 
        to="/" 
        onClick={() => setIsOpen(false)}
        className="inline-block"
      >
        <img 
          src={lightLogo} 
          alt="Logo Light" 
          className="h-10 w-auto block dark:hidden" 
        />
        
        <img 
          src={darkLogo} 
          alt="Logo Dark" 
          className="h-10 w-auto hidden dark:block" 
        />
      </Link>

        {/* Right Controls */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          
          {/* Navigation Items (Visible on Tablet and Desktop: sm and up) */}
          <nav className="hidden sm:flex items-center space-x-6 md:space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400 font-semibold'
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Dark / Light Toggle Button */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle Theme"
            className="p-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-200/60 dark:bg-white/5 text-gray-800 dark:text-white hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {dark ? '☀️' : '🌙'}
          </button>

          {/* Hamburger Toggle (Mobile Only: hidden on sm and up) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="sm:hidden p-2.5 rounded-xl border border-gray-300 dark:border-white/10 bg-gray-200/60 dark:bg-white/5 text-gray-800 dark:text-white focus:outline-none transition-all duration-300 cursor-pointer"
          >
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                /* Close Icon (X) */
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                /* Hamburger Icon */
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile-Only Dropdown Drawer */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col space-y-4 p-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/90 dark:bg-[#121526]/90 backdrop-blur-md shadow-xl">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-purple-600 dark:text-purple-400 font-semibold'
                    : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}