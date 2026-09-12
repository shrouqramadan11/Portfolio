const projects = [
  {
    title: "Restaurant Management System",
    description:
      "A responsive restaurant management website with an admin dashboard and customer interface. Source Code available on GitHub. Live demo is currently unavailable.",
    technologies: ["React", "PHP", "MySQL"],
    github: "https://github.com/shrouqramadan11/Restuarant.git",
    live: "https://github.com/shrouqramadan11/Restuarant.git",
  },
  {
    title: "Todo-List app",
    description:
      "A modern and responsive Todo List application built with React. Users can add, edit, delete, and mark tasks as completed. The app also supports filtering tasks by All, Active, and Completed status. Built using React Hooks (useState, useEffect, and useRef) with React Icons for an interactive user experience.",
    technologies: ["React", "Tailwind CSS"],
    github: "https://github.com/shrouqramadan11/todo-app.git",
    live: "https://todo-app-one-kappa-64.vercel.app/",
  },
  
  {
    title: "E-commerce store",
    description:
      "My personal portfolio showcasing my projects, skills, and experience.",
    technologies: ["React", "Tailwind CSS" , "Framer Motion" ,"REST API"],
    github: "https://github.com/shrouqramadan11/ITI_Graduation_Project.git",
    live: "https://iti-graduation-project-413p.vercel.app/",
  },
  
];


export default function Projects() {
  return (
    <section
      className="
      py-20
      bg-gray-100 text-gray-900
      dark:bg-gray-900 dark:text-white
      transition-colors duration-300
      "
      id="projects"
    >

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
              className="
              bg-white dark:bg-gray-800
              border border-gray-300 dark:border-gray-700
              rounded-2xl overflow-hidden

              hover:border-violet-500
              transition duration-300
              hover:-translate-y-2
              "
            >

              {/* Content */}
              <div className="p-6">

                <h3
                  className="
                  text-2xl font-semibold
                  text-gray-900 dark:text-white
                  "
                >
                  {project.title}
                </h3>


                <p
                  className="
                  mt-4
                  text-gray-700
                  dark:text-gray-400
                  "
                >
                  {project.description}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="
                      px-3 py-1
                      bg-violet-600/20
                      text-violet-700
                      dark:text-violet-300
                      rounded-full
                      text-sm
                      "
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
                    className="
                    bg-violet-600
                    hover:bg-violet-700
                    px-5 py-2
                    rounded-lg
                    text-white
                    transition
                    "
                  >
                    Live Demo
                  </a>


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                    border border-violet-600
                    text-violet-600
                    dark:text-violet-400
                    hover:bg-violet-600
                    hover:text-white
                    px-5 py-2
                    rounded-lg
                    transition
                    "
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