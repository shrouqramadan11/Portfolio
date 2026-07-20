const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
];

export default function Skills() {
  return (
    <section className="bg-gray-900 text-white py-20">
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
              key={skill}
              className="bg-gray-800 border border-gray-700 rounded-2xl p-6 flex items-center justify-center text-lg font-medium text-gray-200 hover:border-violet-500 hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}