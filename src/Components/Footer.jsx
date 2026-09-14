import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import logo from "/public/logo.png"

export default function Footer() {
  return (
    <footer
      id="footer"
      className="
        bg-white dark:bg-[#080a12]
        border-t border-gray-200/80 dark:border-white/10
        text-gray-900 dark:text-white
        transition-colors duration-500
        relative overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">

        {/* Logo Image */}
        <a
          href="#home"
          className="group transition-transform duration-300 hover:scale-105 flex items-center"
        >
          <img
            src={logo} 
            alt="Logo"
            className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85"
          />
        </a>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-light text-center">
          © {new Date().getFullYear()} <span className="font-medium text-gray-900 dark:text-gray-200">Shrouq Ramadan</span>. All Rights Reserved.
        </p>

        {/* Social Quick Links */}
        <div className="flex items-center gap-5">
          <a
            href="mailto:shrouqramadan11@gmail.com"
            aria-label="Email"
            className="
              text-xl text-gray-500 dark:text-gray-400
              hover:text-rose-500 dark:hover:text-rose-400
              hover:scale-125 transition-all duration-300
            "
          >
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/shrouqramadan11"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
              text-xl text-gray-500 dark:text-gray-400
              hover:text-purple-600 dark:hover:text-purple-400
              hover:scale-125 transition-all duration-300
            "
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/shrouq-ramadan-a050b7305"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="
              text-xl text-gray-500 dark:text-gray-400
              hover:text-sky-500 dark:hover:text-sky-400
              hover:scale-125 transition-all duration-300
            "
          >
            <FaLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}