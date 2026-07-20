export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo / Name */}
        <h2 className="text-2xl font-bold text-white">
          <span className="text-violet-500">SR</span>
        </h2>

        {/* Copyright */}
        <p className="text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Shrouq Ramadan. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/shrouqramadan11"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-violet-500 transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/shrouq-ramadan-a050b7305"
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-violet-500 transition"
          >
            LinkedIn
          </a>

          
        </div>

      </div>
    </footer>
  );
}