import React, { useState } from 'react';
import { ClassSession } from '../types';
import { Button } from './Button';
import { Calendar, Filter, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DUMMY_SESSIONS: ClassSession[] = [
  { id: '1', time: '07:00 AM', duration: 50, instructor: 'Ana', type: 'Strong Pilates', capacity: 12, booked: 8, status: 'open' },
  { id: '2', time: '08:00 AM', duration: 50, instructor: 'Ana', type: 'Strong Pilates', capacity: 12, booked: 10, status: 'open' },
  { id: '3', time: '09:00 AM', duration: 50, instructor: 'Sofia', type: 'Strong Pilates', capacity: 12, booked: 12, status: 'full' },
  { id: '4', time: '06:00 PM', duration: 50, instructor: 'Carla', type: 'Intro', capacity: 12, booked: 12, status: 'waitlist' },
  { id: '5', time: '07:00 PM', duration: 50, instructor: 'Carla', type: 'Strong Pilates', capacity: 12, booked: 5, status: 'open' },
];

const DAYS = ['HOY', 'MAÑANA', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'];

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('HOY');
  const navigate = useNavigate();

  const handleBookClass = (session: ClassSession) => {
    // In a real app, check auth here. If not logged in, go to login.
    // For this flow, we assume we go straight to booking details or login first.
    navigate(`/book/${session.id}?time=${session.time}&instructor=${session.instructor}&type=${session.type}`);
  };

  return (
    <section id="schedule" className="py-32 bg-stone-100 dark:bg-stone-900 relative z-20 transition-colors duration-700">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-200/50 dark:from-stone-800/20 to-transparent pointer-events-none transition-colors duration-700"></div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl md:text-6xl text-stone-900 dark:text-white font-light mb-4 transition-colors duration-500">Agenda</h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm tracking-wide max-w-sm">
              Tu compromiso contigo misma comienza aquí.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-500 border-b border-stone-300 dark:border-stone-800 pb-2">
              P.º de los Tamarindos 90
            </span>
          </div>
        </div>

        {/* Schedule Interface */}
        <div className="glass-panel-dark rounded-3xl p-1 overflow-hidden shadow-2xl">
          
          {/* Day Selector */}
          <div className="bg-stone-200/30 dark:bg-black/20 p-4 rounded-t-3xl flex overflow-x-auto scrollbar-hide gap-2 border-b border-stone-200 dark:border-white/5 transition-colors duration-500">
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-6 py-3 text-[10px] font-bold rounded-full transition-all whitespace-nowrap tracking-wider ${
                  activeDay === day 
                    ? 'bg-stone-900 text-white dark:bg-white dark:text-black shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_15px_rgba(255,255,255,0.2)]' 
                    : 'text-stone-500 dark:text-stone-500 hover:text-stone-900 dark:hover:text-white hover:bg-white dark:hover:bg-white/5'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Sessions List */}
          <div className="divide-y divide-stone-200 dark:divide-white/5 bg-white/40 dark:bg-stone-950/40 transition-colors duration-500">
            {DUMMY_SESSIONS.map((session, idx) => (
              <div 
                key={session.id} 
                className="group flex flex-col md:flex-row items-center justify-between p-8 hover:bg-white/60 dark:hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-8 w-full md:w-auto">
                  <div className="text-center w-16">
                    <span className="block text-xl font-light text-stone-900 dark:text-white transition-colors">{session.time.split(' ')[0]}</span>
                    <span className="block text-[10px] text-stone-500 uppercase tracking-widest">{session.time.split(' ')[1]}</span>
                  </div>
                  <div className="h-10 w-[1px] bg-stone-300 dark:bg-white/10 transition-colors"></div>
                  <div className="text-left">
                    <h4 className="text-lg font-medium text-stone-900 dark:text-white group-hover:text-stone-600 dark:group-hover:text-blue-200 transition-colors">{session.type}</h4>
                    <div className="flex items-center gap-2 mt-1">
                       <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-500"></span>
                       <p className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-widest">
                         {session.instructor}
                       </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full md:w-auto mt-6 md:mt-0 gap-10">
                  <div className="text-right hidden md:block">
                     <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${
                       session.status === 'full' ? 'text-stone-400 dark:text-stone-600' : 
                       session.status === 'waitlist' ? 'text-orange-600 dark:text-yellow-500' : 
                       'text-stone-400 dark:text-white/60'
                     }`}>
                       {session.status === 'full' ? 'Sold Out' : 
                        session.status === 'waitlist' ? 'Waitlist' : 
                        `${session.capacity - session.booked} Lugares`}
                     </span>
                  </div>

                  <button 
                    onClick={() => handleBookClass(session)}
                    disabled={session.status === 'full'}
                    className={`
                      w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300
                      ${session.status === 'full' 
                        ? 'border-stone-300 text-stone-400 cursor-not-allowed dark:border-stone-800 dark:text-stone-700' 
                        : 'border-stone-300 text-stone-900 hover:bg-stone-900 hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black shadow-lg'}
                    `}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 flex justify-center">
             <p className="text-[10px] text-stone-400 dark:text-stone-600 uppercase tracking-[0.3em]">Powered by Fitcolatam</p>
        </div>
      </div>
    </section>
  );
};