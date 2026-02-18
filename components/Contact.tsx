
import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { sendContactEmail } from '../emailService';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  {/* Função para validar email */}
  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; email?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'O nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'O email é obrigatório';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Formato de email inválido';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        await sendContactEmail(formData);
        setIsSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Limpar erro ao digitar
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll bg-indigo-600 rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-600/20 relative">
          {/* Abstract background shapes for the card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
            <div className="p-12 lg:p-20 text-white">
              <h2 className="reveal-on-scroll text-4xl md:text-5xl font-black mb-8 leading-tight uppercase tracking-tighter">
                Vamos criar algo <span className="text-indigo-200">extraordinário</span>?
              </h2>
              <p className="reveal-on-scroll delay-100 text-indigo-100 text-lg mb-12 leading-relaxed opacity-90 font-medium">
                Estou sempre aberto a novas oportunidades, colaborações em projetos de IA ou apenas uma conversa sobre a arquitetura do futuro.
              </p>
              
              <div className="space-y-8">
                <div className="reveal-on-scroll delay-200 flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200 mb-1">Direct Email</p>
                    <p className="text-xl font-bold tracking-tight">isaque.ayupe@gmail.com</p>
                  </div>
                </div>
                <div className="reveal-on-scroll delay-300 flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-all">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200 mb-1">LinkedIn Network</p>
                    <p className="text-xl font-bold tracking-tight">www.linkedin.com/in/isaque-ayupe-ab5279308</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800/50 backdrop-blur-sm p-12 lg:p-20 border-l border-white/10">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-up">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mb-6 border border-emerald-500/20">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase">Mensagem Enviada!</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">Obrigado pelo contato. Responderei o mais breve possível.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 text-sm font-black uppercase tracking-widest text-indigo-600 hover:text-indigo-700 underline underline-offset-4"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="reveal-on-scroll">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3 ml-1">Seu Nome</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none font-bold ${
                          errors.name 
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/10 focus:ring-2 focus:ring-red-500/20' 
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600'
                        } text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-700`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1 ml-1 animate-fade-up">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="reveal-on-scroll delay-100">
                      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3 ml-1">Seu Email</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-6 py-4 rounded-2xl border transition-all duration-300 outline-none font-bold ${
                          errors.email 
                          ? 'border-red-500 bg-red-50 dark:bg-red-900/10 focus:ring-2 focus:ring-red-500/20' 
                          : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600'
                        } text-slate-900 dark:text-white placeholder-slate-300 dark:placeholder-slate-700`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-xs font-bold text-red-500 flex items-center gap-1 ml-1 animate-fade-up">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="reveal-on-scroll delay-200">
                    <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-3 ml-1">Sua Mensagem</label>
                    <textarea 
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 outline-none transition-all resize-none font-bold placeholder-slate-300 dark:placeholder-slate-700"
                      placeholder="Como posso ajudar em seu próximo projeto?"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className={`reveal-on-scroll delay-300 w-full py-5 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-black uppercase tracking-[0.2em] rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-indigo-600/20 active:scale-95 ${isSubmitting ? 'cursor-wait' : ''}`}
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
