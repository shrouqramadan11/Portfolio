export default function Hero() {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">

          <div className="max-w-xl">
            <span className="text-violet-500 font-medium tracking-widest uppercase">
              Front-End Developer
            </span>

            <h1 className="mt-4 text-5xl lg:text-7xl font-bold leading-tight">
              Shrouq <br />
              <span className="text-violet-500">Ramadan</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              Passionate Front-End Developer focused on building responsive,
              user-friendly web applications with React and modern web
              technologies.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <button className="bg-violet-600 hover:bg-violet-700 px-8 py-3 rounded-xl font-medium transition duration-300">
                Download CV
              </button>

              <button className="border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-8 py-3 rounded-xl font-medium transition duration-300">
                View Projects
              </button>
            </div>
          </div>

          <div className="relative">

            <div className="absolute -inset-4 rounded-3xl bg-violet-600/20 blur-3xl"></div>

            <img
              src="personal.png"
              alt="Shrouq Ramadan"
              className="relative w-[400px] lg:w-[600px] rounded-3xl border border-violet-500/30 shadow-2xl"
            />

          </div>

        </div>
      </div>
    </section>
  );
}