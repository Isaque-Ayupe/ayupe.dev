
import React from 'react';
import { SKILLS } from '../constants';
import { Box, Code2, BrainCircuit, Globe } from 'lucide-react';

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  const getIcon = (category: string) => {
    switch(category) {
      case 'Languages': return <Code2 className="w-6 h-6" />;
      case 'Frameworks': return <Box className="w-6 h-6" />;
      case 'AI & Tools': return <BrainCircuit className="w-6 h-6" />;
      case 'Infrastructure': return <Globe className="w-6 h-6" />;
      default: return <Code2 className="w-6 h-6" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll text-center mb-20">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight">Competências <span className="text-indigo-600">Core</span></h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Minha caixa de ferramentas técnica, focada em criar experiências digitais inteligentes e APIs robustas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div 
              key={cat} 
              className={`reveal-on-scroll delay-${(idx + 1) * 100} group p-8 bg-white dark:bg-slate-900/50 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-500`}
            >
              <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/20 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all">
                {getIcon(cat)}
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-wider">
                {cat}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div 
                    key={skill.name}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm font-bold text-slate-700 dark:text-slate-300 border border-transparent hover:border-indigo-500/30 hover:bg-white dark:hover:bg-slate-700 transition-all cursor-default"
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Banner de Tech Stack adicional */}
        <div className="reveal-on-scroll delay-400 mt-20 p-8 rounded-[3rem] bg-gradient-to-r from-indigo-600 to-violet-700 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10">
            <h4 className="text-2xl font-black text-white mb-2">Engenharia Full-Stack</h4>
            <p className="text-indigo-100 font-medium">Capacidade de atuar desde a arquitetura de banco de dados até interfaces dinâmicas em React.</p>
          </div>
          <div className="flex gap-4 relative z-10">
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white font-bold text-sm">Escalabilidade</div>
            <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl text-white font-bold text-sm">Segurança</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
