import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-white dark:bg-stone-950 py-32 z-10 rounded-t-[3rem] -mt-10 border-t border-stone-200 dark:border-white/5 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_-20px_60px_rgba(0,0,0,0.5)] transition-colors duration-700">
      <div className="container mx-auto px-6">
        
        {/* Concept Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="relative z-10">
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-6">El Concepto</h2>
            <h3 className="text-4xl md:text-6xl text-stone-900 dark:text-white font-light leading-tight mb-8 transition-colors duration-500">
              No es solo ejercicio.<br />
              <span className="font-bold">Es un ritual.</span>
            </h3>
            <p className="text-stone-600 dark:text-stone-400 leading-loose font-light mb-8 max-w-md text-justify transition-colors duration-500">
              FitForm nace de la necesidad de elevar el estándar. Rompemos la monotonía del gimnasio tradicional introduciendo una atmósfera inmersiva donde la luz, el sonido y el movimiento se sincronizan.
              <br /><br />
              Nuestro método <strong>"Strong Pilates"</strong> desafía la gravedad y tu resistencia. 50 minutos diseñados quirúrgicamente para quemar hasta 500 calorías mientras reconectas contigo mismo.
            </p>
            
            <div className="flex gap-12 border-t border-stone-200 dark:border-white/10 pt-8 transition-colors duration-500">
               <div>
                  <span className="block text-4xl font-bold text-stone-900 dark:text-white mb-2 transition-colors duration-500">50</span>
                  <span className="text-[10px] uppercase tracking-widest text-stone-500">Minutos</span>
               </div>
               <div>
                  <span className="block text-4xl font-bold text-stone-900 dark:text-white mb-2 transition-colors duration-500">500+</span>
                  <span className="text-[10px] uppercase tracking-widest text-stone-500">Calorías</span>
               </div>
            </div>
          </div>
          
          <div className="relative group perspective-1000">
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-blue-200 dark:from-purple-500/20 dark:to-blue-500/20 blur-[60px] rounded-full opacity-60 transition-colors duration-700"></div>
             <div className="relative aspect-[3/4] overflow-hidden rounded-2xl glass-panel-dark border-0 transform transition-transform duration-700 group-hover:rotate-y-2">
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1740&auto=format&fit=crop" 
                  alt="Pilates Concentration" 
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:scale-105 transition-all duration-1000 grayscale hover:grayscale-0"
                />
             </div>
          </div>
        </div>

        {/* Philosophy Block - Reverse */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute inset-0 bg-gradient-to-tr from-stone-200 to-stone-300 dark:from-stone-500/20 dark:to-white/10 blur-[60px] rounded-full opacity-40 transition-colors duration-700"></div>
             <div className="relative aspect-video overflow-hidden rounded-2xl glass-panel-dark border-0">
                <img 
                  src="https://images.unsplash.com/photo-1552674605-5d226f5abdff?q=80&w=1740&auto=format&fit=crop" 
                  alt="FitForm Equipment" 
                  className="w-full h-full object-cover opacity-90 dark:opacity-80 hover:scale-105 transition-all duration-1000"
                />
             </div>
          </div>

          <div className="order-1 lg:order-2">
             <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-stone-400 dark:text-stone-500 mb-6">El Espacio</h2>
             <h3 className="text-3xl md:text-5xl text-stone-900 dark:text-white font-light leading-tight mb-8 transition-colors duration-500">
               Diseñado para <br/>
               <span className="font-bold">el enfoque total.</span>
             </h3>
             <ul className="space-y-6">
                {[
                  { title: "Bajo Impacto", desc: "Protege tus articulaciones mientras construyes fuerza real." },
                  { title: "Alta Intensidad", desc: "Intervalos diseñados para maximizar la quema calórica." },
                  { title: "Mindfulness", desc: "Meditación final para integrar el esfuerzo físico y mental." }
                ].map((item, i) => (
                  <li key={i} className="glass-panel p-6 rounded-xl hover:bg-white dark:hover:bg-white/5 transition-all duration-300">
                    <h4 className="text-stone-900 dark:text-white font-bold uppercase tracking-wider text-sm mb-2">{item.title}</h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm font-light">{item.desc}</p>
                  </li>
                ))}
             </ul>
          </div>
        </div>

      </div>
    </section>
  );
};