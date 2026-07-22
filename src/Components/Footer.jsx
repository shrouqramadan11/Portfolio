import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
      border-t
      bg-white border-gray-200
      dark:bg-gray-950 dark:border-gray-800
      transition-colors duration-300
      "
      id="footer"
    >

      <div
        className="
        max-w-6xl mx-auto px-6 py-8
        flex flex-col md:flex-row
        items-center justify-between
        gap-4
        "
      >

        {/* Logo / Name */}
        <h2
          className="
          text-2xl font-bold
          text-gray-900
          dark:text-white
          "
        >
          <span className="text-violet-500">
            SR
          </span>
        </h2>


        {/* Copyright */}
        <p
          className="
          text-sm text-center
          text-gray-600
          dark:text-gray-400
          "
        >
          © {new Date().getFullYear()} Shrouq Ramadan. All Rights Reserved.
        </p>


        {/* Social Links */}
        <div className="flex items-center gap-6">


          <a
            href="https://github.com/shrouqramadan11"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="
            text-3xl
            text-gray-500
            dark:text-gray-400
            transition duration-300
            hover:scale-130
            hover:text-gray-900
            dark:hover:text-white
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
            text-3xl
            text-gray-500
            dark:text-gray-400
            transition duration-300
            hover:scale-130
            hover:text-gray-900
            dark:hover:text-white
            "
          >
            <FaLinkedin />
          </a>


        </div>

      </div>

    </footer>
  );
}