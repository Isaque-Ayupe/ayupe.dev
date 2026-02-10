
import React from 'react';
import { TIMELINE } from '../constants';

const Timeline: React.FC = () => {
  return (
    <section id="timeline" className="py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="reveal-on-scroll text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center uppercase tracking-tight">Jornada <span className="text-indigo-600">Profissional</span></h2>
        
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0">
          {TIMELINE.map((item, index) => (
            <div key={index} className={`reveal-on-scroll delay-${(index + 1) * 100} mb-10 ml-8 relative`}>
              <div className="absolute -left-[41px] top-0 w-5 h-5 bg-indigo-600 border-4 border-white dark:border-slate-950 rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400 mono bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 rounded-full">
                  {item.year}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
              </div>
              <h4 className="text-slate-600 dark:text-slate-400 font-medium mb-3">{item.company}</h4>
              <p className="text-slate-500 dark:text-slate-500 leading-relaxed max-w-2xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
