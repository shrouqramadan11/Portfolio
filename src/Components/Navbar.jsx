import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <h1 className="text-white text-2xl font-bold">SR</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-white bg-gray-900 px-3 py-2 rounded-md">
              Home
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              About Me
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              Skills
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              Projects
            </a>

            <a href="#" className="text-gray-300 hover:text-white">
              Contact
            </a>
          </div>

          {/* Download Button */}
          <button className="hidden md:block bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl text-white">
            Download CV
          </button>

          {/* Hamburger */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 py-4">

            <a href="#" className="text-white">
              Home
            </a>

            <a href="#" className="text-gray-300">
              About Me
            </a>

            <a href="#" className="text-gray-300">
              Skills
            </a>

            <a href="#" className="text-gray-300">
              Projects
            </a>

            <a href="#" className="text-gray-300">
              Contact
            </a>

            <button className="bg-violet-600 py-2 rounded-lg mt-3">
              Download CV
            </button>

          </div>
        )}
      </div>
    </nav>
  );
}