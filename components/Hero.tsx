import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden sticky top-0 z-0 bg-stone-100 dark:bg-stone-950 transition-colors duration-700">
      {/* Background with animated gradients - Adjusted for Light Mode */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-purple-300/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 animate-blob transition-colors duration-700"></div>
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-stone-300/40 dark:bg-stone-700/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-2000 transition-colors duration-700"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-blue-200/30 dark:bg-blue-900/10 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 animate-blob animation-delay-4000 transition-colors duration-700"></div>
        
        {/* Subtle Image Overlay */}
        <div className="absolute inset-0 opacity-10 dark:opacity-40 mix-blend-overlay transition-opacity duration-700">
             <img 
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop" 
                alt="Pilates texture" 
                className="w-full h-full object-cover grayscale"
             />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-100/50 dark:via-stone-950/50 to-stone-100 dark:to-stone-950 transition-colors duration-700"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl mt-20 flex flex-col items-center">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
          <span className="inline-block py-1 px-3 rounded-full border border-stone-900/10 dark:border-white/20 bg-white/30 dark:bg-white/5 backdrop-blur-md text-stone-600 dark:text-white/80 text-[10px] font-bold uppercase tracking-[0.3em] mb-8 transition-all duration-500">
            Bosques de las Lomas
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl lg:text-9xl text-stone-900 dark:text-white font-light tracking-tight mb-8 animate-fade-up opacity-0 leading-[0.9] transition-colors duration-500" style={{ animationDelay: '0.4s' }}>
          STRONG <br />
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-stone-900 via-stone-600 to-stone-400 dark:from-white dark:via-stone-200 dark:to-stone-500">PILATES</span>
        </h1>
        
        <p className="text-stone-600 dark:text-stone-300 text-sm md:text-lg max-w-lg mx-auto mb-12 leading-relaxed font-light tracking-wide animate-fade-up opacity-0 transition-colors duration-500" style={{ animationDelay: '0.6s' }}>
          Una experiencia sensorial que fusiona la precisión del control con la fuerza bruta. 
          <span className="block mt-2 italic text-stone-500 dark:text-white/60">Esculpe cuerpo. Libera mente.</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <Button onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth'})}>
            Reservar Clase
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth'})}>
            Descubre Más
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-pulse opacity-50">
        <div className="h-16 w-[1px] bg-gradient-to-b from-transparent via-stone-900 dark:via-white to-transparent transition-colors duration-500"></div>
      </div>
    </section>
  );
};