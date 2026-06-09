import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Music } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
export function JoinForm() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    role: 'singer',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t.join.success);
  };
  return (
    <section id="join" className="py-24 relative overflow-hidden bg-navy-dark">
      {/* Animated Music Notes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        {[...Array(10)].map((_, i) =>
        <motion.div
          key={i}
          initial={{
            y: '100vh',
            x: Math.random() * 100 + 'vw',
            opacity: 0
          }}
          animate={{
            y: '-20vh',
            opacity: [0, 1, 0],
            rotate: Math.random() * 360
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear'
          }}
          className="absolute text-white">
          
            <Music size={Math.random() * 40 + 20} />
          </motion.div>
        )}
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1,
            scale: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.6
          }}
          className="glass-card rounded-3xl p-8 md:p-12 border-magenta/20 relative overflow-hidden">
          
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-magenta/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <div className="text-center mb-10 relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {t.join.titlePre}
              <span className="text-gradient">{t.join.titleAccent}</span>
            </h2>
            <p className="text-slate-300">{t.join.subtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="join-name"
                  className="text-sm font-medium text-slate-300 ml-1 block">
                  
                  {t.join.name}
                </label>
                <input
                  id="join-name"
                  type="text"
                  required
                  className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors"
                  placeholder={t.join.namePlaceholder}
                  value={formState.name}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value
                  })
                  } />
                
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="join-email"
                  className="text-sm font-medium text-slate-300 ml-1 block">
                  
                  {t.join.email}
                </label>
                <input
                  id="join-email"
                  type="email"
                  required
                  className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors"
                  placeholder={t.join.emailPlaceholder}
                  value={formState.email}
                  onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value
                  })
                  } />
                
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="join-role"
                className="text-sm font-medium text-slate-300 ml-1 block">
                
                {t.join.roleLabel}
              </label>
              <select
                id="join-role"
                className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors appearance-none"
                value={formState.role}
                onChange={(e) =>
                setFormState({
                  ...formState,
                  role: e.target.value
                })
                }>
                
                <option value="singer">{t.join.roles.singer}</option>
                <option value="dancer">{t.join.roles.dancer}</option>
                <option value="musician">{t.join.roles.musician}</option>
                <option value="crew">{t.join.roles.crew}</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="join-message"
                className="text-sm font-medium text-slate-300 ml-1 block">
                
                {t.join.messageLabel}
              </label>
              <textarea
                id="join-message"
                rows={4}
                className="w-full bg-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-magenta focus:ring-1 focus:ring-magenta transition-colors resize-none"
                placeholder={t.join.messagePlaceholder}
                value={formState.message}
                onChange={(e) =>
                setFormState({
                  ...formState,
                  message: e.target.value
                })
                } />
              
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-magenta text-white font-bold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(236,72,153,0.3)] transition-shadow">
              
              {t.join.submit}
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>);

}