import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Mic2, Calendar } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
export function About() {
  const { t } = useLanguage();
  const stats = [
  {
    icon: Calendar,
    value: '10+',
    label: t.about.stats.years
  },
  {
    icon: Mic2,
    value: '100+',
    label: t.about.stats.performances
  },
  {
    icon: Users,
    value: '50+',
    label: t.about.stats.members
  },
  {
    icon: Award,
    value: '15+',
    label: t.about.stats.awards
  }];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[30%] h-[30%] rounded-full bg-magenta/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}>
            
            <h2 className="text-sm font-bold tracking-widest uppercase text-magenta mb-3">
              {t.about.eyebrow}
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {t.about.titlePre}
              <span className="text-gradient-gold">{t.about.titleAccent}</span>
              {t.about.titlePost}
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              {t.about.paragraph1}
            </p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t.about.paragraph2}
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-[1px] bg-gold" />
              <span className="font-display italic text-xl text-slate-200">
                {t.about.established}
              </span>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-50px'
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-navy-light/60 transition-colors">
              
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-4 border border-white/5 group-hover:border-magenta/30 transition-colors">
                  <stat.icon
                  className="text-magenta group-hover:text-gold transition-colors"
                  size={24} />
                
                </div>
                <h4 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {stat.value}
                </h4>
                <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}