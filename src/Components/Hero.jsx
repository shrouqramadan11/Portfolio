import background_image from "../assets/background_image.png";

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0c16] text-gray-900 dark:text-white font-sans relative overflow-hidden flex flex-col justify-between transition-colors duration-500">
      
      {/* 1. Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:4rem_4rem] pointer-events-none" />

      {/* 2. Top Background Image Fade */}
      <div className="absolute top-0 left-0 right-0 h-[450px] sm:h-[650px] pointer-events-none overflow-hidden z-0">
        <img
          src={background_image}
          alt="Background"
          className="w-full h-full object-cover opacity-15 dark:opacity-20 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-50 dark:to-[#0a0c16]" />
      </div>

      {/* Main Responsive Content Container */}
      <main id="hero" className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-12 lg:pb-20 flex-grow flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center text-center lg:text-left">

          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 flex flex-col items-center lg:items-start">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-purple-600 dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-950/50 px-3.5 py-1.5 rounded-full border border-purple-200 dark:border-purple-800/40">
             JUNIOR FRONT-END DEVELOPER
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight sm:leading-none">
              <span className="block text-gray-900 dark:text-white">Shrouq</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400">
                Ramadan
              </span>
            </h1>

            <p className="text-black dark:text-gray-300 max-w-xl text-base sm:text-lg leading-relaxed font-light transition-colors duration-500">
Front-End Developer specializing in React.js, JavaScript, and Tailwind CSS. I turn design concepts into clean, high-performance, and responsive web applications with a strong focus on seamless user experience. Always exploring modern web standards and eager to contribute to impactful projects while growing professionally.            </p>

            {/* Action Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/Shrouq Ramadan-Frontend.pdf"
                download
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl text-sm font-semibold text-white bg-purple-600 hover:bg-purple-700 dark:bg-gradient-to-r dark:from-purple-600 dark:to-purple-800 dark:hover:from-purple-500 dark:hover:to-purple-700 shadow-lg shadow-purple-500/20 dark:shadow-purple-900/30 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Download CV
              </a>

              <a
                href="#projects"
                className="w-full sm:w-auto text-center px-8 py-3.5 rounded-xl text-sm font-semibold border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white dark:text-purple-300 dark:border-purple-800/80 dark:bg-purple-950/20 dark:hover:bg-purple-900/40 dark:hover:text-white dark:hover:border-purple-600 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Right Circular Avatar Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
              
              {/* Outer Pulsing Glow Aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-indigo-500 to-fuchsia-600 rounded-full blur-2xl opacity-40 group-hover:opacity-80 transition duration-700 animate-pulse" />

              {/* Decorative Circular Glass Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-purple-500/30 dark:border-purple-400/20 scale-105 animate-[spin_12s_linear_infinite]" />

              {/* Circular Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl backdrop-blur-sm border-4 border-white/80 dark:border-white/10 transition-transform duration-500 group-hover:scale-102">
                <img
                  src="personal.png"
                  alt="Shrouq Ramadan"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Floating Tech Badge Highlight (Optional) */}
              <div className="absolute -bottom-2 -left-2 sm:bottom-2 sm:left-2 bg-white/90 dark:bg-[#131728]/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-purple-200 dark:border-purple-900/50 flex items-center gap-2 text-xs font-semibold text-purple-700 dark:text-purple-300 animate-bounce">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                Available for work
              </div>

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}