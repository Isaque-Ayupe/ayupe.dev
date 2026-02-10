
import React from 'react';
import { ChevronRight, Github, Linkedin, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Fluid Animation */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Blob 1 */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-500/20 dark:bg-indigo-600/10 blur-[120px] rounded-full animate-blob-float will-change-transform"></div>
        {/* Blob 2 */}
        <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-violet-500/20 dark:bg-violet-600/10 blur-[140px] rounded-full animate-blob-float-reverse will-change-transform delay-700"></div>
        {/* Blob 3 */}
        <div className="absolute top-[40%] right-[20%] w-[450px] h-[450px] bg-blue-400/10 dark:bg-blue-900/10 blur-[100px] rounded-full animate-blob-float will-change-transform delay-1000"></div>
        {/* Blob 4 - Accent */}
        <div className="absolute bottom-[20%] left-[25%] w-[300px] h-[300px] bg-emerald-400/10 dark:bg-emerald-900/5 blur-[80px] rounded-full animate-blob-float-reverse will-change-transform delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 backdrop-blur-md border border-indigo-100/50 dark:border-indigo-800/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Engenheiro de Software & Especialista em IA
          </div>
          
          <h1 className="reveal-on-scroll delay-100 text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.95] uppercase">
            Sistemas <span className="text-indigo-600">Inteligentes</span><br />
            & Backend <span className="italic font-serif normal-case tracking-normal text-indigo-500/80">Robusto</span>.
          </h1>
          
          <p className="reveal-on-scroll delay-200 text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium">
            Desenvolvedor <span className="text-slate-900 dark:text-white font-bold">Ayupe</span>. 
            Especialista em Laravel, Python e a vanguarda dos Agentes de IA Autônomos.
          </p>

          <div className="reveal-on-scroll delay-300 flex flex-wrap gap-5">
            <a 
              href="#projects" 
              className="animate-pulse-subtle px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white font-black uppercase tracking-widest rounded-2xl flex items-center gap-3 transition-all shadow-2xl shadow-indigo-600/30 hover:scale-105 active:scale-95"
            >
              Explorar Projetos
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="px-10 py-5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 text-slate-900 dark:text-white font-black uppercase tracking-widest rounded-2xl flex items-center gap-3 transition-all hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl active:scale-95"
            >
              <Download className="w-5 h-5" />
              Currículo
            </a>
          </div>

          <div className="reveal-on-scroll delay-400 mt-16 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Connect</span>
              <div className="flex items-center gap-6">
                <a href="https://github.com" target="_blank" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-125">
                  {/* Changed from <github /> to <Github /> */}
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-125">
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
            <div className="h-12 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Location</span>
              <span className="text-sm font-bold dark:text-slate-300">Brasil / Remoto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
