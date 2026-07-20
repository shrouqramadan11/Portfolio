export default function About() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          About <span className="text-violet-500">Me</span>
        </h2>

        <div className="w-20 h-1 bg-violet-500 rounded-full mt-3 mb-12"></div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>
            <p className="text-gray-400 leading-8 text-lg">
              I am a passionate Front-End Developer with a strong interest in
              building modern, responsive, and user-friendly web applications.
              I enjoy transforming ideas into clean and interactive user
              interfaces using React, JavaScript, and Tailwind CSS.
            </p>

            <p className="text-gray-400 leading-8 text-lg mt-6">
              I am committed to continuous learning, improving my technical
              skills, and building high-quality projects. I am currently
              seeking an internship opportunity where I can grow as a
              developer, collaborate with experienced teams, and contribute
              to real-world products.
            </p>
          </div>
<div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-violet-500 transition">
  <h3 className="text-violet-500 font-semibold text-xl mb-4">
    Education
  </h3>

  <div className="space-y-3 text-gray-300">

    <div>
      <p className="font-semibold text-white">
        October Technological University (OTU)
      </p>
      <p className="text-gray-400">
        Bachelor's Degree in Information Technology
      </p>
      <p className="text-sm text-gray-500">
        2024 – 2028 (Expected)
      </p>
    </div>

    <hr className="border-gray-700" />

    <div>
      <p className="font-semibold text-white">
        WE Applied Technology School
      </p>
      <p className="text-gray-400">
        Programming and Web Development specialization  
      </p>
      <p className="text-sm text-gray-500">
        2021 – 2024
      </p>
    </div>

  </div>
</div>

        </div>

      </div>
    </section>
  );
}