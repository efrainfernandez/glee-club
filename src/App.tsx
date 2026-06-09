import React from 'react';
import { useScreenInit } from './useScreenInit';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedShows } from './components/FeaturedShows';
import { Gallery } from './components/Gallery';
import { MeetTheVoices } from './components/MeetTheVoices';
import { UpcomingEvents } from './components/UpcomingEvents';
import { JoinForm } from './components/JoinForm';
import { Footer } from './components/Footer';
export function App() {
  useScreenInit();
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-navy text-slate-200 selection:bg-magenta/30 selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FeaturedShows />
          <Gallery />
          <MeetTheVoices />
          <UpcomingEvents />
          <JoinForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>);

}