
import React, { useState } from 'react';
import { Github, ExternalLink, ArrowRight, X, Terminal, Code2 } from 'lucide-react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI' | 'Backend' | 'Automation'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight uppercase">Projetos <span className="text-indigo-600">Em Destaque</span></h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Soluções de engenharia que combinam robustez de backend com a inteligência de modelos de linguagem de larga escala.
            </p>
          </div>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-inner">
            {(['All', 'AI', 'Backend', 'Automation'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${filter === f ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-md transform scale-105' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'}`}
              >
                {f === 'All' ? 'Todos' : f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-slate-50 dark:bg-slate-800/40 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <div className="absolute bottom-6 left-6 right-6">
                   <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-white px-3 py-1 bg-indigo-600 rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-black text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <p className="text-slate-500 dark:text-slate-400 text-base mb-6 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="text-[11px] font-bold text-slate-600 dark:text-slate-400 px-3 py-1 bg-slate-200 dark:bg-slate-700/50 rounded-lg border border-slate-300/30 dark:border-slate-600/30">
                      {tag}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="mt-auto w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all rounded-2xl group/btn"
                >
                  Ver detalhes
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal imersivo */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
          <div 
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl animate-fade-in" 
            onClick={closeModal}
          ></div>
          <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden animate-fade-up max-h-[90vh] overflow-y-auto">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 p-3 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-red-500 hover:text-white transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-5 h-64 lg:h-auto relative">
                <img src={selectedProject.image} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-indigo-600/20 mix-blend-overlay"></div>
              </div>
              <div className="lg:col-span-7 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                   <Terminal className="w-6 h-6 text-indigo-600" />
                   <span className="text-sm font-black uppercase tracking-widest text-indigo-600">{selectedProject.category}</span>
                </div>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{selectedProject.title}</h2>
                <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  <p>{selectedProject.longDescription || selectedProject.description}</p>
                </div>
                
                <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="text-sm font-black uppercase tracking-widest text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <Code2 className="w-4 h-4" /> Tecnologias
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm font-bold">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href={selectedProject.githubUrl || "#"} 
                      target="_blank"
                      className="flex-1 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-center flex items-center justify-center gap-3 hover:bg-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-white transition-all"
                    >
                      <Github className="w-5 h-5" /> GitHub
                    </a>
                    {selectedProject.liveUrl && (
                      <a 
                        href={selectedProject.liveUrl} 
                        target="_blank"
                        className="flex-1 px-8 py-4 border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white rounded-2xl font-black uppercase tracking-widest text-center flex items-center justify-center gap-3 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all"
                      >
                        <ExternalLink className="w-5 h-5" /> Demo Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
