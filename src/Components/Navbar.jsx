import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ dark, setDark }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <h1
            id="logo"
            className="text-2xl font-bold text-gray-900 dark:text-white transition-colors"
          >
            SR
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#hero"
              className="px-3 py-2 rounded-md bg-gray-200 text-gray-900 hover:bg-gray-300 transition
                         dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-700 hover:text-violet-600 transition
                         dark:text-gray-300 dark:hover:text-white"
            >
              About Me
            </a>

            <a
              href="#skills"
              className="text-gray-700 hover:text-violet-600 transition
                         dark:text-gray-300 dark:hover:text-white"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-700 hover:text-violet-600 transition
                         dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-700 hover:text-violet-600 transition
                         dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ThemeToggle dark={dark} setDark={setDark} />

            <a
              href="/Shrouq Ramadan-Frontend.pdf"
              download
              className="hidden md:block bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl text-white transition"
            >
              Download CV
            </a>

            <button
              className="md:hidden text-3xl text-gray-900 dark:text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col gap-3 py-4">

            <a
              href="#hero"
              className="text-gray-900 dark:text-white"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300"
            >
              About Me
            </a>

            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300"
            >
              Contact
            </a>

            <a
              href="/Shrouq Ramadan-Frontend.pdf"
              download
              className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-xl text-white w-fit"
            >
              Download CV
            </a>

          </div>
        )}
      </div>
    </nav>
  );
}