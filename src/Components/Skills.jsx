import { useState } from "react";
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
    icon: <FaHtml5 className="text-4xl sm:text-5xl text-orange-500" />,
    description: "The foundation of web development used to structure responsive, accessible, and semantically correct web content.",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-4xl sm:text-5xl text-blue-500" />,
    description: "Modern styling language used for layouts, animations, custom themes, and fully responsive user interface designs.",
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl sm:text-5xl text-yellow-400" />,
    description: "Core programming language enabling dynamic behaviors, asynchronous state management, and modern DOM interactions.",
  },
  {
    name: "React",
    icon: <FaReact className="text-4xl sm:text-5xl text-cyan-400 animate-[spin_20s_linear_infinite]" />,
    description: "Powerful UI library used to build fast, modular, component-driven single page applications with smooth reactivity.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl sm:text-5xl text-sky-400" />,
    description: "Utility-first CSS framework enabling rapid styling, consistent design tokens, and sleek modern dark mode setups.",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-4xl sm:text-5xl text-purple-500" />,
    description: "Popular UI kit for creating fast responsive grid layouts, pre-built components, and cross-browser layouts.",
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl sm:text-5xl text-orange-600" />,
    description: "Distributed version control system used to track codebase history, manage branches, and maintain code integrity.",
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-4xl sm:text-5xl text-gray-900 dark:text-white" />,
    description: "Cloud collaboration platform for hosting remote repositories, code reviews, deployment pipelines, and showcase projects.",
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
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
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full mt-3"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
          {skills.map((skill) => {
            const isHovered = hoveredSkill === skill.name;
            const isAnyHovered = hoveredSkill !== null;

            return (
              <div
                key={skill.name}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => setHoveredSkill(isHovered ? null : skill.name)}
                className={`
                  relative rounded-3xl p-6 min-h-[200px]
                  bg-white dark:bg-[#131728]
                  border transition-all duration-300 ease-out
                  flex flex-col items-center justify-center text-center
                  cursor-pointer
                  ${
                    isHovered
                      ? "z-50 scale-125 sm:scale-135 border-purple-500 dark:border-purple-400 shadow-2xl shadow-purple-500/40 dark:shadow-purple-900/60 opacity-100"
                      : isAnyHovered
                      ? "z-10 scale-95 opacity-25 blur-[1px] border-gray-200/80 dark:border-white/10"
                      : "z-10 scale-100 opacity-100 border-gray-200/80 dark:border-white/10 shadow-lg"
                  }
                `}
              >
                {/* Header: Icon & Title */}
                <div className="flex flex-col items-center gap-2">
                  <div className={`transition-transform duration-300 ${isHovered ? "scale-110" : ""}`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100">
                    {skill.name}
                  </h3>
                </div>

                {/* Inside Card Paragraph */}
                <div
                  className={`
                    w-full transition-all duration-300 overflow-hidden
                    ${
                      isHovered
                        ? "max-h-40 opacity-100 mt-3 pt-3 border-t border-gray-200 dark:border-white/10"
                        : "max-h-0 opacity-0 mt-0 pt-0"
                    }
                  `}
                >
                  <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}