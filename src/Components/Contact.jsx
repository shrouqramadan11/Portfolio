export default function Contact() {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <h2 className="text-4xl font-bold">
          Contact <span className="text-violet-500">Me</span>
        </h2>

        <div className="w-20 h-1 bg-violet-500 rounded-full mt-3 mb-12"></div>

        <div className="bg-gray-800 border border-gray-700 rounded-3xl p-10">

          <h3 className="text-3xl font-semibold mb-4">
            Get in <span className="text-violet-500">Touch</span>

          </h3>

         

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-gray-900 rounded-2xl p-6">
              <h4 className="text-violet-500 font-semibold mb-2">
                📧 Email
              </h4>
              <p className="text-gray-300">
                shrouqramadan11@gmail.com
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h4 className="text-violet-500 font-semibold mb-2">
                💬 Whatsapp
              </h4>
              <p className="text-gray-300">
                +20 1012836768
              </p>
            </div>

           <div className="flex items-center gap-4 bg-gray-900 rounded-2xl p-6">
  <div className="text-3xl">💻</div>

  <div>
    <h4 className="text-violet-500 font-semibold">GitHub</h4>

    <a
      href="https://github.com/shrouqramadan11"
      target="_blank"
      rel="noreferrer"
      className="text-gray-300 hover:text-violet-400 transition"
    >
      shrouqramadan11
    </a>
  </div>
</div>

            <div className="bg-gray-900 rounded-2xl p-6">
                
              <h4 className="text-violet-500 font-semibold mb-2">
                💼 LinkedIn
              </h4>
              <a
                href="https://linkedin.com/in/shrouq-ramadan-a050b7305"
                target="_blank"
                rel="noreferrer"
                className="text-gray-300 hover:text-violet-400 transition"
              >
Shrouq Ramadan              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}