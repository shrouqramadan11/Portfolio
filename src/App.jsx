import './index.css';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useState,useEffect } from 'react';

export default function App() {
        const [dark, setDark] = useState(false);
        useEffect(() => {
          if (dark) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
}, [dark]);

  return (
  <div>

<Navbar
  dark={dark}
  setDark={setDark}
/><Hero dark={dark} />
<About dark={dark} />
<Skills dark={dark} />
<Projects dark={dark} />
<Contact dark={dark} />
<Footer dark={dark} />

    </div>
  )
}

