import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
export function FeaturedShows() {
  const { t } = useLanguage();
  const shows = [
  {
    title: t.shows.items.cinema.title,
    subtitle: t.shows.items.cinema.subtitle,
    image:
    'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1000&auto=format&fit=crop',
    year: '2025',
    color: 'from-blue-600/80 to-navy'
  },
  {
    title: t.shows.items.prom.title,
    subtitle: t.shows.items.prom.subtitle,
    image:
    'https://images.unsplash.com/photo-1563841930606-67e2bce48b78?q=80&w=1000&auto=format&fit=crop',
    year: '2024',
    color: 'from-magenta/80 to-navy'
  },
  {
    title: t.shows.items.hits.title,
    subtitle: t.shows.items.hits.subtitle,
    image:
    'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1000&auto=format&fit=crop',
    year: '2023',
    color: 'from-primary/80 to-navy'
  }];

  return (
    <section id="shows" className="py-24 relative bg-navy-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
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
            }}>
            
            <h2 className="text-sm font-bold tracking-widest uppercase text-gold mb-3">
              {t.shows.eyebrow}
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white">
              {t.shows.titlePre}
              <span className="text-gradient">{t.shows.titleAccent}</span>
            </h3>
          </motion.div>

          <motion.a
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            href="#"
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors group">
            
            {t.shows.archive}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform text-magenta" />
            
          </motion.a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {shows.map((show, index) =>
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
              delay: index * 0.2
            }}
            className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer">
            
              {/* Background Image */}
              <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: `url(${show.image})`
              }} />
            

              {/* Gradient Overlay */}
              <div
              className={`absolute inset-0 bg-gradient-to-t ${show.color} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />
            

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <Star size={16} className="text-gold fill-gold" />
                    <span className="text-sm font-bold tracking-wider text-gold uppercase">
                      {show.year}
                    </span>
                  </div>
                  <h4 className="text-3xl font-display font-bold text-white mb-2">
                    {show.title}
                  </h4>
                  <p className="text-slate-200 font-medium mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {show.subtitle}
                  </p>

                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 group-hover:bg-white group-hover:text-navy">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}