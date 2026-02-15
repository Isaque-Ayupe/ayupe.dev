
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Lógica do Dark Mode
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    // Observer para animação "Rockstar" em todos os elementos com a classe reveal-on-scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Uma vez visível, não precisa mais observar
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    // Monitorar mudanças no DOM para capturar novos elementos (como modais)
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            const reveals = node.querySelectorAll('.reveal-on-scroll');
            reveals.forEach((el) => observer.observe(el));
            if (node.classList.contains('reveal-on-scroll')) observer.observe(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 reveal-on-scroll">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm mb-4">
            &copy; {new Date().getFullYear()} Ayupe. Engenharia de Software & IA.
          </p>
          <div className="flex justify-center gap-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
            <span>•</span>
            <span>Python</span>
            <span>•</span>
            <span>AI Agents</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
