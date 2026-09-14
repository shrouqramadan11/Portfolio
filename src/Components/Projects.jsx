import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "E-commerce Store",
    description:
      "A fully interactive e-commerce platform built as an ITI graduation project. Features real-time product filtering, search functionality, interactive cart dynamics, and custom API integration with smooth animations.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "REST API"],
    github: "https://github.com/shrouqramadan11/ITI_Graduation_Project.git",
    live: "https://iti-graduation-project-413p.vercel.app/",
  },
  {
    title: "Todo-List App",
    description:
      "A modern and responsive task management application. Users can seamlessly create, edit, delete, and filter tasks by completion status. Leverages custom React Hooks with optimized state management.",
    technologies: ["React", "Tailwind CSS", "React Icons"],
    github: "https://github.com/shrouqramadan11/todo-app.git",
    live: "https://todo-app-one-kappa-64.vercel.app/",
  },
  {
    title: "Restaurant Management System",
    description:
      "A complete restaurant management interface equipped with an administrative dashboard and client ordering workflow. Integrated with PHP and MySQL backend logic.",
    technologies: ["React", "PHP", "MySQL", "Tailwind CSS"],
    github: "https://github.com/shrouqramadan11/Restuarant.git",
    live: null, // Set to null since live demo is unavailable
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        py-20 lg:py-28
        bg-gray-200/70 text-gray-900
        dark:bg-[#080a12] dark:text-white
        transition-colors duration-500
        relative overflow-hidden
      "
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full mt-3"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group relative rounded-3xl p-6 sm:p-7
                bg-white/80 dark:bg-white/5
                border border-gray-300/80 dark:border-white/10
                backdrop-blur-md shadow-xl
                hover:shadow-purple-500/15 hover:border-purple-500/50 dark:hover:border-purple-400/50
                hover:-translate-y-2 transition-all duration-300
                flex flex-col justify-between
              "
            >
              {/* Top Info */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tech Badges & Action Links */}
              <div className="mt-6 pt-4 border-t border-gray-200/80 dark:border-white/10">

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 text-xs font-semibold rounded-full
                        bg-purple-100 dark:bg-purple-950/60
                        text-purple-700 dark:text-purple-300
                        border border-purple-200 dark:border-purple-800/40
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex-1 flex items-center justify-center gap-2
                        bg-gradient-to-r from-purple-600 to-indigo-600
                        hover:from-purple-700 hover:to-indigo-700
                        text-white text-sm font-semibold
                        py-2.5 px-4 rounded-xl
                        shadow-md shadow-purple-500/20
                        transition-all duration-300
                      "
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      Live Demo
                    </a>
                  ) : (
                    <span className="flex-1 text-center text-xs text-gray-400 dark:text-gray-500 py-2.5 px-2 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5">
                      Demo Unavailable
                    </span>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex items-center justify-center gap-2
                      border border-gray-300 dark:border-white/20
                      hover:border-purple-600 dark:hover:border-purple-400
                      text-gray-800 dark:text-gray-200
                      hover:text-purple-600 dark:hover:text-purple-400
                      text-sm font-semibold
                      py-2.5 px-4 rounded-xl
                      transition-all duration-300
                    "
                  >
                    <FaGithub className="text-base" />
                    Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}