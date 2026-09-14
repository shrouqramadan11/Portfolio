import './index.css';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from "lenis";
import 'lenis/dist/lenis.css';

function RouteHandler({ children, lenisRef }) {
  const { pathname, hash } = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);

    if (hash && lenisRef.current) {
      setTimeout(() => {
        const target = document.querySelector(hash);
        if (target) {
          lenisRef.current.scrollTo(target, { offset: -70 });
        }
      }, 100);
    } else if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }

    return () => clearTimeout(timer);
  }, [pathname, hash, lenisRef]);

  return (
    <>
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/80 dark:bg-[#0a0c16]/80 backdrop-blur-sm transition-opacity duration-300">
          <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      {children}
    </>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  const lenisRef = useRef(null);

  // 1. Smooth Scroll Setup with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // 2. Dark Mode Toggle
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <Router>
      <RouteHandler lenisRef={lenisRef}>
        <div className="min-h-screen bg-gray-100 dark:bg-[#0a0c16] text-gray-900 dark:text-white transition-colors duration-500">
          <Navbar dark={dark} setDark={setDark} />
          
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <section id="hero"><Hero dark={dark} /></section>
                  <section id="about"><About dark={dark} /></section>
                  <section id="skills"><Skills dark={dark} /></section>
                  <section id="projects"><Projects dark={dark} /></section>
                  <section id="contact"><Contact dark={dark} /></section>
                </main>
              }
            />
            <Route path="/about" element={<About dark={dark} />} />
            <Route path="/skills" element={<Skills dark={dark} />} />
            <Route path="/projects" element={<Projects dark={dark} />} />
            <Route path="/contact" element={<Contact dark={dark} />} />
          </Routes>

          <Footer dark={dark} />
        </div>
      </RouteHandler>
    </Router>
  );
}