
import React from 'react';
import { BookOpen, Code, Cpu, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal-on-scroll relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-slate-100 dark:bg-slate-800 rounded-2xl p-8 overflow-hidden aspect-square flex items-center justify-center">
              <img 
                src= 'ayupe.dev/public/images/Profile.png'
                alt="Ayupe" 
                className="w-4/5 h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div>
            <h2 className="reveal-on-scroll text-3xl font-bold text-slate-900 dark:text-white mb-6">Sobre mim</h2>
            <div className="reveal-on-scroll delay-100 space-y-4 text-slate-600 dark:text-slate-400 text-lg">
              <p>
                Como estudante de Engenharia de Software e Analista de Sistemas, vejo o desenvolvimento como a arte de resolver problemas complexos com elegância e eficiência.
              </p>
              <p>
                Minha paixão reside na intersecção entre o <span className="text-indigo-600 font-medium">o Problema do usuário</span> e a <span className="text-indigo-600 font-medium">a Solução Tecnológica</span>. Acredito que o futuro das aplicações está em sistemas autônomos que não apenas processam dados, mas entendem o contexto e agem de forma proativa, a fim de  <span className="text-indigo-600 font-medium">Otimizar o seu dia-a-dia.</span>.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="reveal-on-scroll delay-200 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-semibold text-slate-900 dark:text-white">Estudando Agora</h4>
                </div>
                <p className="text-sm text-slate-500">Machine Learning e computação em nuvem</p>
              </div>
              <div className="reveal-on-scroll delay-300 p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-indigo-600" />
                  <h4 className="font-semibold text-slate-900 dark:text-white">Foco Atual</h4>
                </div>
                <p className="text-sm text-slate-500">aplicações reais com Agentes de IA e deploy seguro na nuvem</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
