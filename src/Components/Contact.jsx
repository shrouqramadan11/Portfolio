import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const contactLinks = [
  {
    name: "Email",
    value: "shrouqramadan11@gmail.com",
    href: "mailto:shrouqramadan11@gmail.com",
    icon: <FaEnvelope className="text-2xl sm:text-3xl" />,
    color: "hover:text-rose-500 hover:border-rose-500/50 hover:shadow-rose-500/20",
  },
  {
    name: "GitHub",
    value: "github.com/shrouqramadan11",
    href: "https://github.com/shrouqramadan11",
    icon: <FaGithub className="text-2xl sm:text-3xl" />,
    color: "hover:text-purple-500 hover:border-purple-500/50 hover:shadow-purple-500/20",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/shrouq-ramadan",
    href: "https://linkedin.com/in/shrouq-ramadan-a050b7305",
    icon: <FaLinkedin className="text-2xl sm:text-3xl" />,
    color: "hover:text-sky-500 hover:border-sky-500/50 hover:shadow-sky-500/20",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-20 lg:py-28
        bg-gray-50 text-gray-900
        dark:bg-[#0a0c16] dark:text-white
        transition-colors duration-500
        relative overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full mt-3"></div>
        </div>

        {/* Contact Container */}
        <div
          className="
            relative rounded-3xl p-8 sm:p-12
            bg-white/80 dark:bg-white/5
            border border-gray-200/80 dark:border-white/10
            backdrop-blur-md shadow-xl
            text-center
          "
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Touch</span>
          </h3>

          <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto font-light">
            Feel free to reach out for collaborations, job opportunities, or project inquiries.
          </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {contactLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target={item.name !== "Email" ? "_blank" : "_self"}
                rel="noreferrer"
                className={`
                  group rounded-2xl p-6
                  bg-gray-100/60 dark:bg-white/5
                  border border-gray-200 dark:border-white/10
                  flex flex-col items-center justify-center gap-3
                  transition-all duration-300
                  hover:-translate-y-2.5 hover:shadow-2xl
                  text-gray-700 dark:text-gray-300
                  ${item.color}
                `}
              >
                <div className="p-3 rounded-xl bg-white dark:bg-white/10 shadow-md group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-lg font-bold text-gray-900 dark:text-white">
                  {item.name}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-mono truncate max-w-full">
                  {item.value}
                </span>
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}