import React, { useState } from 'react';
import { PricingPackage, PackageType } from '../types';
import { Button } from './Button';
import { Check, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const STANDARD_PACKAGES: PricingPackage[] = [
  { id: 's-trial', name: 'Intro', price: 330, validityDays: 7, perClass: 330 },
  { id: 's-1', name: '1 Clase', price: 390, validityDays: 30, perClass: 390 },
  { id: 's-5', name: '5 Clases', price: 1850, validityDays: 40, perClass: 370, isPopular: true },
  { id: 's-8', name: '8 Clases', price: 2800, validityDays: 45, perClass: 350 },
  { id: 's-15', name: '15 Clases', price: 4950, validityDays: 60, perClass: 330 },
];

const PM_PACKAGES: PricingPackage[] = [
  { id: 'pm-1', name: '1 Clase PM', price: 330, validityDays: 30, perClass: 330 },
  { id: 'pm-4', name: '4 Clases PM', price: 1200, validityDays: 40, perClass: 300 },
  { id: 'pm-8', name: '8 Clases PM', price: 2240, validityDays: 45, perClass: 280, isPopular: true },
  { id: 'pm-15', name: '15 Clases PM', price: 3750, validityDays: 60, perClass: 250 },
];

export const Pricing: React.FC = () => {
  const [type, setType] = useState<PackageType>(PackageType.STANDARD);
  const packages = type === PackageType.STANDARD ? STANDARD_PACKAGES : PM_PACKAGES;
  const navigate = useNavigate();

  const handleBuy = (pkg: PricingPackage) => {
    navigate(`/checkout?package=${pkg.id}&price=${pkg.price}&name=${encodeURIComponent(pkg.name)}`);
  };

  return (
    <section id="pricing" className="py-32 bg-stone-50 dark:bg-stone-950 relative z-30 transition-colors duration-700">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-200/50 via-stone-50 to-stone-50 dark:from-stone-800/20 dark:via-stone-950 dark:to-stone-950 pointer-events-none transition-colors duration-700"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light text-stone-900 dark:text-white mb-8 text-center transition-colors duration-500">
            Comienza tu <span className="font-bold border-b-2 border-stone-300 dark:border-white/20 pb-1">transformación</span>
          </h2>
          
          <div className="glass-panel p-1 rounded-full flex gap-1">
            <button
              onClick={() => setType(PackageType.STANDARD)}
              className={`px-8 py-3 text-[10px] uppercase font-bold tracking-[0.2em] rounded-full transition-all duration-500 ${
                type === PackageType.STANDARD ? 'bg-stone-900 text-white dark:bg-white dark:text-black shadow-lg' : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Standard
            </button>
            <button
              onClick={() => setType(PackageType.PM)}
              className={`px-8 py-3 text-[10px] uppercase font-bold tracking-[0.2em] rounded-full transition-all duration-500 ${
                type === PackageType.PM ? 'bg-stone-900 text-white dark:bg-white dark:text-black shadow-lg' : 'text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
              }`}
            >
              Paquetes PM
            </button>
          </div>
          
          <div className={`mt-4 overflow-hidden transition-all duration-500 ${type === PackageType.PM ? 'h-6 opacity-100' : 'h-0 opacity-0'}`}>
             <p className="text-[10px] text-stone-500 dark:text-stone-400 uppercase tracking-widest text-center">
              11:00 AM — 8:00 PM
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`
                relative w-full md:w-[280px] p-8 rounded-3xl border transition-all duration-500 group flex flex-col
                ${pkg.isPopular 
                  ? 'bg-stone-900 border-stone-900 text-white dark:bg-white/10 dark:border-white/30 dark:shadow-[0_0_40px_rgba(255,255,255,0.1)] scale-105 z-10' 
                  : 'bg-white/60 border-stone-200 hover:border-stone-400 dark:bg-stone-900/40 dark:border-white/5 dark:hover:border-white/20 dark:hover:bg-stone-800/40'}
                backdrop-blur-md
              `}
            >
              {pkg.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-black text-[9px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" /> Popular
                </div>
              )}
              
              <div className="text-center mb-8 flex-grow">
                <h3 className={`text-sm font-bold uppercase tracking-[0.2em] mb-4 ${pkg.isPopular ? 'text-white' : 'text-stone-900 dark:text-white'}`}>{pkg.name}</h3>
                <div className={`flex items-start justify-center mb-2 ${pkg.isPopular ? 'text-white' : 'text-stone-900 dark:text-white'}`}>
                  <span className="text-lg mt-1">$</span>
                  <span className="text-4xl font-light">{pkg.price.toLocaleString()}</span>
                </div>
                <p className="text-[10px] text-stone-400 uppercase tracking-widest">
                  ${pkg.perClass} / clase
                </p>
              </div>

              <ul className={`space-y-4 mb-8 border-t pt-8 ${pkg.isPopular ? 'border-white/20' : 'border-stone-200 dark:border-white/10'}`}>
                <li className="flex items-center gap-3 text-xs text-stone-400 dark:text-stone-300">
                  <div className={`p-1 rounded-full ${pkg.isPopular ? 'bg-white/20' : 'bg-stone-200 dark:bg-white/10'}`}><Check className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-stone-900 dark:text-white'}`} /></div>
                  <span>Vigencia: {pkg.validityDays} días</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-stone-400 dark:text-stone-300">
                  <div className={`p-1 rounded-full ${pkg.isPopular ? 'bg-white/20' : 'bg-stone-200 dark:bg-white/10'}`}><Check className={`w-3 h-3 ${pkg.isPopular ? 'text-white' : 'text-stone-900 dark:text-white'}`} /></div>
                  <span>Amenities incluidos</span>
                </li>
              </ul>

              <Button 
                variant={pkg.isPopular ? 'primary' : 'glass'} 
                fullWidth 
                className={pkg.isPopular ? '!bg-white !text-black border-none dark:bg-white dark:text-black' : ''}
                onClick={() => handleBuy(pkg)}
              >
                Comprar Ahora
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};