import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Ticket } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
type Status = 'available' | 'sellingFast' | 'comingSoon';
export function UpcomingEvents() {
  const { t } = useLanguage();
  const events: {
    month: string;
    day: string;
    time: string;
    title: string;
    location: string;
    status: Status;
  }[] = [
  {
    month: t.events.months.oct,
    day: '15',
    time: '20:00',
    title: t.events.items.autumn.title,
    location: t.events.items.autumn.location,
    status: 'available'
  },
  {
    month: t.events.months.nov,
    day: '02',
    time: '19:30',
    title: t.events.items.acoustic.title,
    location: t.events.items.acoustic.location,
    status: 'sellingFast'
  },
  {
    month: t.events.months.dec,
    day: '18',
    time: '21:00',
    title: t.events.items.winter.title,
    location: t.events.items.winter.location,
    status: 'comingSoon'
  }];

  const statusColor: Record<Status, string> = {
    available: 'text-green-400',
    sellingFast: 'text-orange-400',
    comingSoon: 'text-slate-400'
  };
  return (
    <section id="events" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
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
            
            {t.events.titlePre}
            <span className="text-gradient-gold">{t.events.titleAccent}</span>
          </motion.h2>
        </div>

        <div className="space-y-6">
          {events.map((event, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 group hover:border-gold/30 transition-colors">
            
              {/* Date Block */}
              <div className="flex-shrink-0 text-center md:text-left md:border-r border-white/10 md:pr-8">
                <div className="text-sm font-bold text-magenta mb-1">
                  {event.time}
                </div>
                <div className="text-3xl font-display font-bold text-white whitespace-nowrap">
                  {event.month} {event.day}
                </div>
              </div>

              {/* Details */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin size={16} />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Action */}
              <div className="flex-shrink-0 w-full md:w-auto mt-4 md:mt-0 flex flex-col items-center md:items-end gap-3">
                <span
                className={`text-xs font-bold uppercase tracking-wider ${statusColor[event.status]}`}>
                
                  {t.events.status[event.status]}
                </span>
                <button
                disabled={event.status === 'comingSoon'}
                className="w-full md:w-auto px-6 py-3 rounded-full bg-white text-navy font-bold flex items-center justify-center gap-2 hover:bg-gold transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:cursor-not-allowed">
                
                  <Ticket size={18} />
                  {t.events.getTickets}
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}