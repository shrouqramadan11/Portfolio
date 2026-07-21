import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiTailwindcss } from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-6xl text-orange-500" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-6xl text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-6xl text-yellow-400" />,
  },
  {
    name: "React",
    icon: <FaReact className="text-6xl text-cyan-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-6xl text-sky-400" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-6xl text-purple-500" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-6xl text-orange-600" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-6xl text-white" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gray-900 text-white py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          My <span className="text-violet-500">Skills</span>
        </h2>

        <div className="w-20 h-1 bg-violet-500 rounded-full mt-3 mb-12"></div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-8 flex flex-col items-center justify-center gap-5 hover:border-violet-500 hover:bg-gray-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-violet-500/20 transition-all duration-300 cursor-pointer"
            >
              {skill.icon}

              <h3 className="text-lg font-semibold text-gray-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}