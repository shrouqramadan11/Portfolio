export default function About() {
  return (
    <section
      className="
        py-20 lg:py-28
        bg-gray-200/70 text-gray-900
        dark:bg-[#080a12] dark:text-white
        transition-colors duration-500
        relative overflow-hidden
      "
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 rounded-full mt-3"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Side */}
          <div className="lg:col-span-7 space-y-6">
            <p className="leading-relaxed text-base sm:text-lg text-gray-700 dark:text-gray-300 font-light transition-colors duration-500">
              I am a passionate Front-End Developer specializing in building modern, responsive, and user-friendly web applications. I enjoy turning ideas and design concepts into clean, interactive interfaces using React, JavaScript, and Tailwind CSS.
            </p>

            <p className="leading-relaxed text-base sm:text-lg text-gray-700 dark:text-gray-300 font-light transition-colors duration-500">
              I am committed to continuous learning, refining my technical stack, and implementing clean code best practices. I am actively open to opportunities where I can contribute to real-world products, collaborate with experienced teams, and grow professionally.
            </p>
          </div>

          {/* Right Side - Education Card (Matching Hero Styling) */}
          <div className="lg:col-span-5">
            <div
              className="
                relative rounded-3xl p-6 sm:p-8
                bg-white/80 dark:bg-white/5
                border border-gray-300/80 dark:border-white/10
                backdrop-blur-md shadow-xl hover:shadow-purple-500/10
                hover:border-purple-500/50 dark:hover:border-purple-400/50
                transition-all duration-500 group
              "
            >
              <h3 className="text-purple-600 dark:text-purple-400 font-bold text-xl mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                Education
              </h3>

              <div className="space-y-6 text-gray-700 dark:text-gray-300">

                {/* OTU Degree */}
                <div className="space-y-1">
                  <p className="font-bold text-gray-900 dark:text-white text-base sm:text-lg transition-colors duration-500">
                    October Technological University (OTU)
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    Bachelor's Degree in Information Technology
                  </p>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 pt-1">
                    2024 – 2028 (Expected)
                  </p>
                </div>

                <hr className="border-gray-300/80 dark:border-white/10 transition-colors duration-500" />

                {/* WE School Degree */}
                <div className="space-y-1">
                  <p className="font-bold text-gray-900 dark:text-white text-base sm:text-lg transition-colors duration-500">
                    WE Applied Technology School
                  </p>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 transition-colors duration-500">
                    Programming and Web Development specialization
                  </p>
                  <p className="text-xs font-semibold text-purple-600 dark:text-purple-400 pt-1">
                    2021 – 2024
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}