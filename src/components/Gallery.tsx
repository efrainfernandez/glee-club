import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
export function Gallery() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [
  {
    src: 'https://images.unsplash.com/photo-1525926477800-7a3b10316ac6?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-square'
  },
  {
    src: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[3/4]'
  },
  {
    src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[4/3]'
  },
  {
    src: 'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[3/4]'
  },
  {
    src: 'https://images.unsplash.com/photo-1520483601560-389dff434fdf?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-square'
  },
  {
    src: 'https://images.unsplash.com/photo-1470229722913-7c090be5f524?q=80&w=800&auto=format&fit=crop',
    aspect: 'aspect-[4/3]'
  }];

  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
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
            
            {t.gallery.titlePre}
            <span className="text-gradient">{t.gallery.titleAccent}</span>
          </motion.h2>
          <motion.p
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
            transition={{
              delay: 0.1
            }}
            className="text-slate-400 max-w-2xl mx-auto">
            
            {t.gallery.subtitle}
          </motion.p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, index) =>
          <motion.button
            key={index}
            type="button"
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className={`relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-magenta ${img.aspect}`}
            onClick={() => setSelectedImage(img.src)}
            aria-label={t.gallery.imageAlt}>
            
              <img
              src={img.src}
              alt={t.gallery.imageAlt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            
              <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={24} />
                </div>
              </div>
            </motion.button>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 z-[100] bg-navy-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true">
          
            <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-magenta rounded-full"
            onClick={() => setSelectedImage(null)}
            aria-label="Close">
            
              <X size={32} />
            </button>
            <motion.img
            initial={{
              scale: 0.9,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.9,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300
            }}
            src={selectedImage}
            alt={t.gallery.enlargedAlt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} />
          
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}