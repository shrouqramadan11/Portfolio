export default function Hero() {
  return (
    <section
      id="hero"
      className="
      min-h-screen flex items-center
      bg-gray-100 dark:bg-gray-900
      text-gray-900 dark:text-white
      transition-all duration-500
      "
    >

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-20">


          {/* Left */}
          <div className="max-w-xl">


            <span
              className="
              text-violet-500
              font-medium
              tracking-widest
              uppercase
              "
            >
              Front-End Developer
            </span>


            <h1
              className="
              mt-4
              text-5xl lg:text-7xl
              font-bold
              leading-tight
              "
            >
              Shrouq <br />

              <span className="text-violet-500">
                Ramadan
              </span>

            </h1>


            <p
              className="
              mt-6
              text-lg
              leading-8
              text-gray-600
              dark:text-gray-400
              transition-colors duration-500
              "
            >
              Passionate Front-End Developer focused on building responsive,
              user-friendly web applications with React and modern web
              technologies.
            </p>



            <div className="mt-10 flex flex-wrap gap-5">


              <a
                href="/Shrouq Ramadan-Frontend.pdf"
                download
                className="
                bg-violet-600
                hover:bg-violet-700
                px-8 py-3
                rounded-xl
                font-medium
                text-white

                transition-all duration-300
                hover:scale-105
                "
              >
                Download CV
              </a>



              <a
                href="#projects"
                className="
                border border-violet-600

                text-violet-600
                dark:text-violet-400

                hover:bg-violet-600
                hover:text-white

                px-8 py-3
                rounded-xl
                font-medium

                transition-all duration-300
                hover:scale-105
                "
              >
                Projects
              </a>


            </div>

          </div>




          {/* Right */}
          <div
            className="
            relative
            flex
            justify-center
            items-center
            "
          >


            {/* Glow */}
            <div
              className="
              absolute
              -inset-6
              rounded-full

              bg-violet-600/25
              blur-3xl

              animate-pulse

              transition-all
              duration-500
              "
            ></div>



            <img
              src="personal.png"
              alt="Shrouq Ramadan"

              className="
              relative
              float

              w-[380px]
              lg:w-[560px]

              rounded-3xl

              border
              border-violet-500/30

              shadow-2xl

              transition-all
              duration-500

              hover:scale-105
              "
            />


          </div>


        </div>

      </div>


    </section>
  );
}