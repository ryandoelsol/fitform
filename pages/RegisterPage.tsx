import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="absolute inset-0 bg-stone-50 dark:bg-stone-950 -z-10"></div>
      
      <div className="w-full max-w-md animate-fade-up">
        <Link to="/login" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver al Login
        </Link>

        <div className="glass-panel-dark p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-light text-stone-900 dark:text-white mb-2">Únete a <span className="font-bold">FITFORM</span></h1>
            <p className="text-stone-500 text-xs uppercase tracking-widest">Crea tu cuenta</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 pl-4">Nombre</label>
                <input required type="text" className="w-full bg-stone-100 dark:bg-white/5 border border-transparent focus:border-stone-500 dark:focus:border-white/20 rounded-full px-6 py-4 text-sm outline-none transition-all dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 pl-4">Apellido</label>
                <input required type="text" className="w-full bg-stone-100 dark:bg-white/5 border border-transparent focus:border-stone-500 dark:focus:border-white/20 rounded-full px-6 py-4 text-sm outline-none transition-all dark:text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 pl-4">Email</label>
              <input required type="email" className="w-full bg-stone-100 dark:bg-white/5 border border-transparent focus:border-stone-500 dark:focus:border-white/20 rounded-full px-6 py-4 text-sm outline-none transition-all dark:text-white" />
            </div>

            <div className="space-y-2">
               <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 pl-4">Teléfono</label>
               <input required type="tel" className="w-full bg-stone-100 dark:bg-white/5 border border-transparent focus:border-stone-500 dark:focus:border-white/20 rounded-full px-6 py-4 text-sm outline-none transition-all dark:text-white" />
             </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 pl-4">Contraseña</label>
              <input required type="password" className="w-full bg-stone-100 dark:bg-white/5 border border-transparent focus:border-stone-500 dark:focus:border-white/20 rounded-full px-6 py-4 text-sm outline-none transition-all dark:text-white" />
            </div>

            <Button fullWidth type="submit" className="mt-4">
              Crear Cuenta
            </Button>
          </form>
          
          <p className="mt-6 text-[10px] text-center text-stone-400 leading-relaxed">
            Al registrarte aceptas nuestros <button className="underline">Términos y Condiciones</button>.
          </p>
        </div>
      </div>
    </div>
  );
};