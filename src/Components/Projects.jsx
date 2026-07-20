const projects = [
  {
    title: "Restaurant Management System",
    description:
      "A responsive restaurant management website with an admin dashboard and customer interface.",
    technologies: ["React", "PHP", "MySQL"],
    github: "https://github.com/shrouqramadan11/",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing my projects, skills, and experience.",
    technologies: ["React", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold">
          My <span className="text-violet-500">Projects</span>
        </h2>

        <div className="w-20 h-1 bg-violet-500 rounded-full mt-3 mb-12"></div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-violet-500 transition duration-300 hover:-translate-y-2"
            >
              

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-gray-400 mt-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-violet-600/20 text-violet-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-violet-600 hover:bg-violet-700 px-5 py-2 rounded-lg transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-5 py-2 rounded-lg transition"
                  >
                    GitHub
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