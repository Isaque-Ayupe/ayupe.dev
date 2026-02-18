
import React from 'react';
import { ChevronRight, Github, Linkedin, Download, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Fluid Animation */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-indigo-500/20 dark:bg-indigo-600/10 blur-[120px] rounded-full animate-blob-float will-change-transform"></div>
        <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-violet-500/20 dark:bg-violet-600/10 blur-[140px] rounded-full animate-blob-float-reverse will-change-transform delay-700"></div>
        <div className="absolute top-[40%] right-[20%] w-[450px] h-[450px] bg-blue-400/10 dark:bg-blue-900/10 blur-[100px] rounded-full animate-blob-float will-change-transform delay-1000"></div>
        <div className="absolute bottom-[20%] left-[25%] w-[300px] h-[300px] bg-emerald-400/10 dark:bg-emerald-900/5 blur-[80px] rounded-full animate-blob-float-reverse will-change-transform delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <div className="reveal-on-scroll inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50/50 dark:bg-indigo-900/20 backdrop-blur-md border border-indigo-100/50 dark:border-indigo-800/30 text-indigo-600 dark:text-indigo-400 text-sm font-bold mb-8 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Engenheiro de Software & entusiasta em IA
          </div>
          
          <h1 className="reveal-on-scroll delay-100 text-6xl md:text-8xl font-black tracking-tighter text-slate-900 dark:text-white mb-8 leading-[0.95] uppercase">
            Sistemas <span className="text-indigo-600">Inteligentes</span><br />
            & Backend <span className="italic font-serif normal-case tracking-normal text-indigo-500/80">Robusto</span>.
          </h1>
          
          {/* Frase Animada Otimizada */}
          <div className="reveal-on-scroll delay-150 flex flex-wrap items-center gap-x-4 text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8">
            <span className="leading-relaxed">Onde a lógica encontra a</span>
            <div className="relative h-[1.2em] overflow-hidden inline-flex items-center min-w-[220px]">
              {/* Moldura de foco sutil */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-indigo-600/40 rounded-full"></div>
              
              <div className="animate-text-slide flex flex-col w-full">
                <span className="h-[1.2em] flex items-center text-indigo-600 dark:text-indigo-400 leading-none">Inteligência</span>
                <span className="h-[1.2em] flex items-center text-violet-600 dark:text-violet-400 leading-none">Inovação</span>
                <span className="h-[1.2em] flex items-center text-blue-600 dark:text-blue-400 leading-none">Escalabilidade</span>
                <span className="h-[1.2em] flex items-center text-emerald-600 dark:text-emerald-400 leading-none">Performance</span>
                {/* O 5º elemento garante o loop perfeito ao transicionar de volta para o 1º */}
                <span className="h-[1.2em] flex items-center text-indigo-600 dark:text-indigo-400 leading-none">Inteligência</span>
              </div>
            </div>
          </div>
          
          <p className="reveal-on-scroll delay-200 text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed max-w-2xl font-medium">
            Isaque <span className="text-slate-900 dark:text-white font-bold">Ayupe</span>. 
            Desenvolvedor Full-Stack com experiência em Python, Flask, React e Agentes de IA Autônomos.
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
                <a href="https://github.com/Isaque-Ayupe" target="_blank" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-125">
                  <Github className="w-7 h-7" />
                </a>
                <a href="https://linkedin.com/in/isaque-ayupe-ab5279308" target="_blank" className="text-slate-400 hover:text-indigo-600 transition-all hover:scale-125">
                  <Linkedin className="w-7 h-7" />
                </a>
              </div>
            </div>
            <div className="h-12 w-[1px] bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex flex-col">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Location</span>
              <span className="text-sm font-bold dark:text-slate-300">Brasil - Goiania / Remoto</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
