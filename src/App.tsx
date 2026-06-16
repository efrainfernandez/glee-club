import React, { useEffect, useRef, useState } from 'react';
import glee1 from '../img/glee 1.png';
import glee2 from '../img/glee-2.png';
import glee3 from '../img/glee 3.png';
import glee4 from '../img/glee 4.png';
import glee5 from '../img/glee 5.png';

const backgroundSpriteModules = import.meta.glob('./assets/background-sprites/*.png', {
  eager: true,
  import: 'default'
});

const backgroundSprites = Object.entries(backgroundSpriteModules)
  .sort(([left], [right]) => left.localeCompare(right, undefined, { numeric: true }))
  .map(([, src]) => src as string);

const backgroundSpinLoops = 5;

const galleryImages = [
  glee1,
  glee2,
  glee3,
  glee4,
  glee5
];

function ScrollReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {children}
    </div>
  );
}

function FloatingBackground() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    if (!backgroundSprites.length) return;

    backgroundSprites.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    if (!backgroundSprites.length) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const scrollFraction = scrollPosition / (totalHeight || 1);
      const progress = scrollFraction * backgroundSpinLoops;
      const nextFrame = Math.floor(progress * backgroundSprites.length) % backgroundSprites.length;

      setFrameIndex(nextFrame);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!backgroundSprites.length) {
    return null;
  }

  return (
    <div id="bg-image-container">
      <img alt="Microphone Background" src={backgroundSprites[frameIndex]} />
    </div>
  );
}

export function App() {
  const [language, setLanguage] = useState<'es' | 'en'>('es');
  const toggleLanguage = () => setLanguage((current) => (current === 'es' ? 'en' : 'es'));

  return (
    <div className="bg-background text-on-background overflow-x-hidden selection:bg-secondary-container selection:text-on-secondary-container relative isolate">
      <FloatingBackground />

      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center max-w-7xl rounded-full mt-4 mx-auto px-6 py-3 bg-surface/80 backdrop-blur-md shadow-lg shadow-primary/5 w-[calc(100%-2rem)]">
        <a className="font-display-lg-mobile text-display-lg-mobile font-black text-primary tracking-tighter hover:scale-105 transition-transform duration-200" href="#top">
          Glee Club Salamanca
        </a>
        <nav className="hidden md:flex gap-8 items-center">
          <a className="font-ui-button text-ui-button text-primary font-bold border-b-2 border-secondary-container hover:scale-105 transition-transform duration-200" href="#about">
            {language === 'es' ? 'Nuestro Sonido' : 'Our Sound'}
          </a>
          <a className="font-ui-button text-ui-button text-on-surface-variant hover:text-primary transition-colors hover:scale-105 transition-transform duration-200" href="#activities">
            {language === 'es' ? 'Eventos' : 'Events'}
          </a>
          <a className="font-ui-button text-ui-button text-on-surface-variant hover:text-primary transition-colors hover:scale-105 transition-transform duration-200" href="#join">
            {language === 'es' ? 'Únete' : 'Join Us'}
          </a>
          <a className="font-ui-button text-ui-button text-on-surface-variant hover:text-primary transition-colors hover:scale-105 transition-transform duration-200" href="#gallery">
            {language === 'es' ? 'Galería' : 'The Crew'}
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button
            className="text-xs font-bold uppercase p-2 border border-primary/20 rounded-full hover:bg-primary/5 transition-colors"
            onClick={toggleLanguage}
            type="button"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
          <a className="bg-primary text-on-primary px-6 py-2 rounded-full font-ui-button text-ui-button shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all" href="#join">
            {language === 'es' ? 'Inscríbete' : 'Register Now'}
          </a>
        </div>
      </header>

      <main id="top" className="relative z-10">
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-container-padding text-center overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 organic-blob bg-primary/10 -z-10 animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-1/2 -right-48 w-[500px] h-[500px] organic-blob bg-secondary-container/20 -z-10 animate-float" />
          <div className="max-w-4xl space-y-8 relative">
            <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-bold text-label-bold uppercase tracking-widest shadow-sm">
              USAL · {language === 'es' ? 'Música' : 'Music'} · {language === 'es' ? 'Comunidad' : 'Community'}
            </span>
            <h1 className="font-display-lg text-[64px] md:text-[110px] leading-[0.9] text-primary tracking-tighter font-black drop-shadow-sm">
              Glee Club <br /> <span className="text-tertiary italic">Salamanca</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              {language === 'es'
                ? 'No somos solo un coro. Somos la energía, el ritmo y el corazón de la Universidad de Salamanca. ¿Estás listo para brillar?'
                : 'We are not just a choir. We are the energy, the rhythm, and the heart of the University of Salamanca. Are you ready to shine?'}
            </p>
            <div className="flex flex-col md:flex-row gap-card-gap justify-center items-center pt-4">
              <a className="bg-primary text-on-primary px-10 py-5 rounded-full font-ui-button text-ui-button text-lg flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-xl shadow-primary/20" href="#join">
                {language === 'es' ? '¡Me apunto!' : "I'm in!"}
                <span className="material-symbols-outlined">music_note</span>
              </a>
              <a className="border-2 border-tertiary text-tertiary px-10 py-5 rounded-full font-ui-button text-ui-button text-lg hover:bg-tertiary hover:text-white transition-all" href="#activities">
                {language === 'es' ? 'Descubre qué hacemos' : 'Discover our work'}
              </a>
            </div>
          </div>
          <div className="absolute bottom-20 left-10 md:left-24 sticker-card bg-surface-container-lowest p-4 rotate-[-12deg] shadow-xl rounded-lg animate-float hidden md:block">
            <span className="font-label-bold text-primary">{language === 'es' ? 'ENERGÍA PURA ⚡' : 'PURE ENERGY ⚡'}</span>
          </div>
          <div className="absolute top-40 right-10 md:right-32 sticker-card bg-secondary-container p-4 rotate-[15deg] shadow-xl rounded-lg animate-float hidden md:block" style={{ animationDelay: '2s' }}>
            <span className="font-label-bold text-on-secondary-container">{language === 'es' ? 'VIBRA ESTUDIANTIL 🎤' : 'STUDENT VIBES 🎤'}</span>
          </div>
        </section>

        <section id="about" className="py-section-gap px-container-padding max-w-7xl mx-auto overflow-hidden">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-primary organic-blob scale-105 group-hover:scale-110 transition-transform duration-500 opacity-20" />
                <div className="rounded-xl overflow-hidden shadow-2xl relative z-10 -rotate-2 group-hover:rotate-0 transition-transform duration-500 border-8 border-white">
                  <img alt="Performance" className="w-full aspect-square object-cover" src={glee1} />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary-container p-6 rounded-lg sticker-card z-20 animate-pulse">
                  <p className="font-headline-md text-primary font-black">+10 {language === 'es' ? 'Años' : 'Years'}</p>
                  <p className="font-label-bold text-on-secondary-container">{language === 'es' ? 'Creando espectáculo' : 'Making noise'}</p>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="font-display-lg text-display-lg text-primary">
                  {language === 'es' ? 'Nuestra ' : 'Our '}
                  <span className="relative">
                    {language === 'es' ? 'Historia' : 'History'}
                    <svg className="absolute -bottom-2 left-0 w-full h-2 text-secondary-container" preserveAspectRatio="none" viewBox="0 0 100 10">
                      <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="4" />
                    </svg>
                  </span>
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {language === 'es'
                    ? 'Nacimos en los pasillos de la USAL con una misión clara: romper con los esquemas de los coros tradicionales. El Glee Club Salamanca es un espacio de libertad creativa donde reinterpretamos clásicos del pop, rock y musicales con arreglos vocales únicos.'
                    : 'We were born in the hallways of USAL with a clear mission: to break the mold of traditional choirs. Glee Club Salamanca is a space for creative freedom where we reinterpret pop, rock, and musical classics with unique vocal arrangements.'}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {language === 'es'
                    ? 'Más que un grupo de canto, somos una familia de más de 60 voces que comparten la pasión por el escenario y el compañerismo. Aquí, cada nota cuenta y cada persona brilla con luz propia.'
                    : 'More than just a singing group, we are a family of over 60 voices sharing a passion for the stage and camaraderie. Here, every note counts and every person shines with their own light.'}
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center text-tertiary">
                    <span className="material-symbols-outlined">groups</span>
                  </div>
                  <div>
                    <p className="font-label-bold text-tertiary">{language === 'es' ? 'Comunidad Inclusiva' : 'Inclusive Community'}</p>
                    <p className="text-sm text-on-surface-variant">{language === 'es' ? 'Abierto a todos los estudiantes de la USAL.' : 'Open to all USAL students.'}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <section id="activities" className="py-section-gap bg-surface-container-low/80 backdrop-blur-sm px-container-padding">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16 space-y-4">
                <h2 className="font-display-lg text-display-lg text-primary">{language === 'es' ? 'Lo que hacemos' : 'What we do'}</h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                  {language === 'es' ? 'No todo es cantar, nuestra agenda está llena de momentos que no querrás perderte.' : "It's not all about singing, our schedule is full of moments you won't want to miss."}
                </p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-card-gap h-auto md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 rounded-lg bg-primary p-8 flex flex-col justify-end relative overflow-hidden group shadow-lg">
                <img alt="Concerts" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-700" src={glee2} />
                <div className="relative z-10 space-y-2">
                  <span className="material-symbols-outlined text-secondary-container text-4xl">music_note</span>
                  <h3 className="font-headline-md text-white text-3xl">{language === 'es' ? 'Conciertos Épicos' : 'Epic Concerts'}</h3>
                  <p className="text-white/80 font-body-md">{language === 'es' ? 'Desde teatros clásicos hasta plazas al aire libre.' : 'From classic theaters to outdoor plazas.'}</p>
                </div>
              </div>
              <div className="md:col-span-1 bg-tertiary-container rounded-lg p-6 flex flex-col gap-4 shadow-lg group hover:-translate-y-2 transition-transform">
                <span className="material-symbols-outlined text-tertiary-fixed-dim text-3xl">mic</span>
                <h3 className="font-label-bold text-on-tertiary-container text-xl">{language === 'es' ? 'Ensayos Abiertos' : 'Open Rehearsals'}</h3>
                <p className="text-on-tertiary-container/80 text-sm">{language === 'es' ? 'Vente a vernos practicar y siente la vibra.' : 'Come see us practice and feel the vibe.'}</p>
              </div>
              <div className="md:col-span-1 bg-secondary-container rounded-lg p-6 flex flex-col gap-4 shadow-lg group hover:-translate-y-2 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">celebration</span>
                <h3 className="font-label-bold text-primary text-xl">{language === 'es' ? 'Eventos de Equipo' : 'Team Events'}</h3>
                <p className="text-primary/80 text-sm">{language === 'es' ? 'Escapadas, cenas y fiestas.' : 'Getaways, dinners, and parties.'}</p>
              </div>
              <div className="md:col-span-2 bg-surface-container-highest rounded-lg p-8 flex items-center gap-8 shadow-lg group overflow-hidden">
                <div className="flex-1 space-y-2">
                  <h3 className="font-headline-md text-primary">{language === 'es' ? 'Grabaciones' : 'Recordings'}</h3>
                  <p className="text-on-surface-variant font-body-md">{language === 'es' ? 'Pasamos por el estudio para inmortalizar arreglos.' : 'We hit the studio to immortalize our arrangements.'}</p>
                </div>
                <div className="w-32 h-32 organic-blob bg-primary/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-5xl">graphic_eq</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="py-section-gap px-container-padding relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="font-display-lg text-display-lg text-primary text-center mb-16">{language === 'es' ? 'Únete en 3 pasos' : 'Join in 3 steps'}</h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="relative text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary flex items-center justify-center text-white font-black text-4xl shadow-xl relative z-10">1</div>
                  <div className="hidden md:block absolute top-12 left-2/3 w-full border-t-4 border-dashed border-primary/20 -z-0" />
                  <h3 className="font-headline-md text-primary">{language === 'es' ? 'Inscríbete' : 'Register'}</h3>
                  <p className="font-body-md text-on-surface-variant px-4">{language === 'es' ? 'Rellena el formulario rápido.' : 'Fill out the quick form.'}</p>
                </div>
                <div className="relative text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-secondary-container flex items-center justify-center text-primary font-black text-4xl shadow-xl relative z-10">2</div>
                  <div className="hidden md:block absolute top-12 left-2/3 w-full border-t-4 border-dashed border-primary/20 -z-0" />
                  <h3 className="font-headline-md text-primary">{language === 'es' ? 'Casting Casual' : 'Casual Audition'}</h3>
                  <p className="font-body-md text-on-surface-variant px-4">{language === 'es' ? 'Solo queremos escucharte cantar un poco.' : 'We just want to hear you sing a bit.'}</p>
                </div>
                <div className="relative text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-tertiary flex items-center justify-center text-white font-black text-4xl shadow-xl relative z-10">3</div>
                  <h3 className="font-headline-md text-primary">{language === 'es' ? '¡Bienvenido!' : 'Welcome!'}</h3>
                  <p className="font-body-md text-on-surface-variant px-4">{language === 'es' ? 'Empieza a vivir la experiencia Glee.' : 'Start living the Glee experience.'}</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mt-20 max-w-2xl mx-auto glass-card p-10 rounded-lg shadow-2xl border-t-8 border-primary relative">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center rotate-12 shadow-lg">
                  <span className="material-symbols-outlined text-primary text-3xl">edit</span>
                </div>
                <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="font-label-bold text-on-surface-variant block pl-2">{language === 'es' ? 'Nombre completo' : 'Full Name'}</label>
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder={language === 'es' ? 'Tu nombre' : 'Your name'} type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="font-label-bold text-on-surface-variant block pl-2">Email</label>
                      <input className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="usuario@usal.es" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-bold text-on-surface-variant block pl-2">{language === 'es' ? '¿Qué voz crees que eres?' : 'Voice type'}</label>
                    <select className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none appearance-none">
                      <option>Soprano / Contralto</option>
                      <option>Tenor / Barítono / Bajo</option>
                      <option>{language === 'es' ? 'Ni idea, ¡ayudadme!' : 'No idea, help!'}</option>
                    </select>
                  </div>
                  <button className="w-full bg-primary text-white font-ui-button text-xl py-5 rounded-full hover:shadow-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-primary/20" type="submit">
                    {language === 'es' ? '¡Me apunto!' : "I'm joining!"}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="gallery" className="py-section-gap px-container-padding bg-surface-container-lowest/70 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display-lg text-display-lg text-primary mb-12 flex items-center gap-4">
              {language === 'es' ? 'Momentos Glee' : 'Glee Moments'}
              <span className="h-1 w-24 bg-secondary-container rounded-full hidden md:block" />
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 md:h-[720px]">
              <div className="rounded-lg overflow-hidden group shadow-lg border-4 border-white md:col-span-2 md:row-span-1 min-h-[220px] md:min-h-0">
                <img alt="Gallery 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={galleryImages[0]} />
              </div>
              <div className="rounded-lg overflow-hidden group shadow-lg border-4 border-white md:col-span-4 md:row-span-1 min-h-[220px] md:min-h-0">
                <img alt="Gallery 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={galleryImages[1]} />
              </div>
              <div className="rounded-lg overflow-hidden group shadow-lg border-4 border-white md:col-span-2 md:row-span-1 min-h-[220px] md:min-h-0">
                <img alt="Gallery 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={galleryImages[2]} />
              </div>
              <div className="rounded-lg overflow-hidden group shadow-lg border-4 border-white md:col-span-2 md:row-span-1 min-h-[220px] md:min-h-0">
                <img alt="Gallery 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={galleryImages[3]} />
              </div>
              <div className="rounded-lg overflow-hidden group shadow-lg border-4 border-white md:col-span-2 md:row-span-1 min-h-[220px] md:min-h-0">
                <img alt="Gallery 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={galleryImages[4]} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-container-padding max-w-3xl mx-auto">
          <h2 className="font-display-lg text-display-lg text-primary text-center mb-12">{language === 'es' ? '¿Dudas?' : 'Questions?'}</h2>
          <div className="space-y-4">
            <details className="group bg-surface/80 backdrop-blur-sm rounded-lg border-2 border-surface-variant p-6 hover:border-primary transition-colors cursor-pointer">
              <summary className="list-none flex justify-between items-center font-headline-md text-primary">
                {language === 'es' ? '¿Hace falta saber leer música?' : 'Do I need to read music?'}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="font-body-md text-on-surface-variant mt-4">
                {language === 'es' ? '¡Para nada! Muchos de nuestros miembros aprenden de oído.' : 'Not at all! Many of our members learn by ear.'}
              </p>
            </details>
            <details className="group bg-surface/80 backdrop-blur-sm rounded-lg border-2 border-surface-variant p-6 hover:border-primary transition-colors cursor-pointer">
              <summary className="list-none flex justify-between items-center font-headline-md text-primary">
                {language === 'es' ? '¿Cuándo son los ensayos?' : 'When are rehearsals?'}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="font-body-md text-on-surface-variant mt-4">
                {language === 'es' ? 'Martes y jueves por la tarde en el edificio histórico de la USAL.' : 'Tuesdays and Thursdays afternoon at the USAL historic building.'}
              </p>
            </details>
            <details className="group bg-surface/80 backdrop-blur-sm rounded-lg border-2 border-surface-variant p-6 hover:border-primary transition-colors cursor-pointer">
              <summary className="list-none flex justify-between items-center font-headline-md text-primary">
                {language === 'es' ? '¿Necesito experiencia previa?' : 'Do I need previous experience?'}
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="font-body-md text-on-surface-variant mt-4">
                {language === 'es' ? 'No. Valoramos más las ganas, el compromiso y la actitud que la experiencia previa sobre el escenario.' : 'No. We value enthusiasm, commitment, and attitude more than previous stage experience.'}
              </p>
            </details>
          </div>
        </section>

        <section className="py-section-gap px-container-padding">
          <div className="max-w-5xl mx-auto glass-card rounded-xl p-8 md:p-12 border border-white/40 shadow-2xl">
            <div className="text-center space-y-4 mb-10">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-bold text-label-bold uppercase tracking-widest shadow-sm">
                {language === 'es' ? 'Síguenos' : 'Follow Us'}
              </span>
              <h2 className="font-display-lg text-display-lg text-primary">
                {language === 'es' ? 'Conecta con el universo Glee' : 'Connect with the Glee universe'}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                {language === 'es'
                  ? 'Ensayos, actuaciones, backstage y toda la energía del grupo en nuestras redes sociales.'
                  : 'Rehearsals, performances, backstage moments, and all the group energy on our social channels.'}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <a className="group rounded-lg bg-surface-container-lowest/90 p-8 border-2 border-transparent hover:border-primary hover:-translate-y-2 transition-all shadow-lg" href="#">
                <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg>
                </div>
                <h3 className="font-headline-md text-primary mb-2">YouTube</h3>
                <p className="font-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {language === 'es' ? 'Actuaciones completas, clips y momentos destacados.' : 'Full performances, clips, and featured moments.'}
                </p>
              </a>

              <a className="group rounded-lg bg-surface-container-lowest/90 p-8 border-2 border-transparent hover:border-primary hover:-translate-y-2 transition-all shadow-lg" href="#">
                <div className="w-14 h-14 rounded-full bg-secondary-container text-primary flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.9 1.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>
                </div>
                <h3 className="font-headline-md text-primary mb-2">Instagram</h3>
                <p className="font-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {language === 'es' ? 'Fotos, stories y vida diaria del coro.' : 'Photos, stories, and the choir’s daily life.'}
                </p>
              </a>

              <a className="group rounded-lg bg-surface-container-lowest/90 p-8 border-2 border-transparent hover:border-primary hover:-translate-y-2 transition-all shadow-lg" href="#">
                <div className="w-14 h-14 rounded-full bg-tertiary text-white flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M19.6 8.5a7.7 7.7 0 0 1-4.4-1.4v6.4a5.5 5.5 0 1 1-5.5-5.5c.4 0 .7 0 1 .1v2.7a2.8 2.8 0 1 0 1.8 2.6V2h2.7a4.9 4.9 0 0 0 4.4 4.1v2.4Z" /></svg>
                </div>
                <h3 className="font-headline-md text-primary mb-2">TikTok</h3>
                <p className="font-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">
                  {language === 'es' ? 'Ensayos, tendencias y el lado más espontáneo de Glee.' : 'Rehearsals, trends, and Glee’s most spontaneous side.'}
                </p>
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer className="relative z-10 w-full py-12 px-container-padding flex flex-col md:flex-row justify-between items-center gap-base bg-surface-container-lowest/90 rounded-t-lg backdrop-blur-sm mt-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="font-display-lg-mobile text-display-lg-mobile text-primary">Glee Club</span>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left">
            {language === 'es' ? '© Efrain Fernández Sangrador 2026. Salamanca USAL.' : '© 2024 Glee Club Salamanca USAL. Keep the music alive.'}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#top">{language === 'es' ? 'Privacidad' : 'Privacy'}</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#top">{language === 'es' ? 'Términos' : 'Terms'}</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md" href="#join">{language === 'es' ? 'Contacto' : 'Contact'}</a>
          <a className="text-on-surface-variant hover:text-primary transition-colors font-body-md flex items-center gap-2" href="#gallery">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.76 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.76-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.618-6.76-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            Instagram
          </a>
        </div>
      </footer>

      <a className="fixed bottom-6 right-6 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform z-40 px-6 py-4 font-ui-button text-ui-button" href="#join">
        {language === 'es' ? 'Inscríbete' : 'Register Now'}
      </a>
    </div>
  );
}
