import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
export function Hero() {
  const { t } = useLanguage();
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy/70 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1507676184212-d0330a15233c?q=80&w=2000&auto=format&fit=crop">
          
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-stage-lights-illuminating-a-dark-background-4064-large.mp4"
            type="video/mp4" />
          
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.9
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          transition={{
            duration: 1,
            ease: 'easeOut'
          }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/20">
          
          <span className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
          <span className="text-sm font-medium tracking-wider uppercase text-slate-200">
            {t.hero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.2
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white leading-tight mb-6">
          
          {t.hero.title1} <br />
          <span className="text-gradient">{t.hero.title2}</span>
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.4
          }}
          className="text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto mb-10 font-light">
          
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            delay: 0.6
          }}
          className="flex flex-col sm:flex-row items-center gap-4">
          
          <a
            href="#events"
            className="group relative px-8 py-4 bg-white text-navy font-bold rounded-full overflow-hidden flex items-center gap-2 transition-transform hover:scale-105">
            
            <div className="absolute inset-0 bg-gradient-to-r from-gold to-yellow-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">{t.hero.upcomingShows}</span>
            <Play size={18} className="relative z-10 fill-current" />
          </a>

          <a
            href="#join"
            className="group px-8 py-4 glass-card text-white font-bold rounded-full flex items-center gap-2 hover:bg-white/10 transition-all hover:scale-105">
            
            <span>{t.hero.joinUs}</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform" />
            
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          delay: 1.5,
          duration: 1
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        
        <span className="text-xs uppercase tracking-widest text-slate-400">
          {t.hero.discover}
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-slate-400 to-transparent" />
      </motion.div>
    </section>);

}