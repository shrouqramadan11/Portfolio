import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      className="
      py-20
      bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white
      transition-colors duration-300
      "
      id="contact"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          Contact <span className="text-violet-500">Me</span>
        </h2>


        <div className="w-20 h-1 bg-violet-500 rounded-full mt-3 mb-12"></div>


        <div
          className="
          bg-white dark:bg-gray-800
          border border-gray-300 dark:border-gray-700
          rounded-3xl p-10
          "
        >

          <h3
            className="
            text-3xl font-semibold mb-4
            text-gray-900 dark:text-white
            "
          >
            Get in <span className="text-violet-500">Touch</span>
          </h3>


          <div className="flex flex-wrap items-center justify-center gap-6 mt-6">


            <a
              href="mailto:shrouqramadan11@gmail.com"
              aria-label="Email"
              className="
              text-gray-500
              dark:text-gray-400
              text-4xl
              transition duration-300
              hover:scale-150
              hover:text-violet-400
              "
            >
              <FaEnvelope />
            </a>


            <a
              href="https://wa.me/201012836768"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="
              text-gray-500
              dark:text-gray-400
              text-4xl
              transition duration-300
              hover:scale-150
              hover:text-violet-400
              "
            >
              <FaWhatsapp />
            </a>


            <a
              href="https://github.com/shrouqramadan11"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
              text-gray-500
              dark:text-gray-400
              text-4xl
              transition duration-300
              hover:scale-150
              hover:text-violet-400
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
              text-gray-500
              dark:text-gray-400
              text-4xl
              transition duration-300
              hover:scale-150
              hover:text-violet-400
              "
            >
              <FaLinkedin />
            </a>


          </div>

        </div>

      </div>

    </section>
  );
}