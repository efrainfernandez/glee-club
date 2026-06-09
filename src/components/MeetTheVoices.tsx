import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';
export function MeetTheVoices() {
  const { t } = useLanguage();
  const sections = [
  {
    name: t.voices.items.sopranos.name,
    description: t.voices.items.sopranos.description,
    image:
    'https://images.unsplash.com/photo-1516280440502-450498e363b3?q=80&w=400&auto=format&fit=crop',
    color: 'border-magenta'
  },
  {
    name: t.voices.items.altos.name,
    description: t.voices.items.altos.description,
    image:
    'https://images.unsplash.com/photo-1493225457124-a1a2a5faebfa?q=80&w=400&auto=format&fit=crop',
    color: 'border-purple-400'
  },
  {
    name: t.voices.items.tenors.name,
    description: t.voices.items.tenors.description,
    image:
    'https://images.unsplash.com/photo-1520872024865-3ff2805d8bb3?q=80&w=400&auto=format&fit=crop',
    color: 'border-blue-400'
  },
  {
    name: t.voices.items.basses.name,
    description: t.voices.items.basses.description,
    image:
    'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=400&auto=format&fit=crop',
    color: 'border-gold'
  }];

  return (
    <section id="voices" className="py-24 relative bg-navy-light/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            
            {t.voices.titlePre}
            <span className="text-gradient">{t.voices.titleAccent}</span>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-magenta to-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {sections.map((section, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
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
              duration: 0.6,
              delay: index * 0.15
            }}
            className="flex flex-col items-center text-center group">
            
              <div className="relative mb-8">
                {/* Decorative rings */}
                <div
                className={`absolute -inset-4 border-2 ${section.color} rounded-full opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`} />
              
                <div
                className={`absolute -inset-2 border ${section.color} rounded-full opacity-40 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-700 border-dashed`} />
              

                {/* Image */}
                <div className="w-40 h-40 rounded-full overflow-hidden relative z-10 border-4 border-navy-dark">
                  <img
                  src={section.image}
                  alt={section.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110" />
                
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-magenta transition-colors">
                {section.name}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {section.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}