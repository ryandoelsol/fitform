import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate auth
    navigate(from, { replace: true });
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="absolute inset-0 bg-stone-50 dark:bg-stone-950 -z-10"></div>
       {/* Ambient blobs */}
      <div className="fixed top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-stone-200 dark:bg-stone-800/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md animate-fade-up">
        <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Volver
        </Link>

        <div className="glass-panel-dark p-10 rounded-3xl shadow-2xl">
          <div className="text-center mb-10">
            <h1 className="text-2xl font-light text-stone-900 dark:text-white mb-2">Bienvenido a <span className="font-bold">FITFORM</span></h1>
            <p className="text-stone-500 text-xs uppercase tracking-widest">Inicia sesión para reservar</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 pl-4">Email</label>
              <input 
                type="email" 
                required
                className="w-full bg-stone-100 dark:bg-white/5 border border-transparent focus:border-stone-500 dark:focus:border-white/20 rounded-full px-6 py-4 text-sm outline-none transition-all dark:text-white"
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-stone-500 pl-4">Contraseña</label>
              <input 
                type="password" 
                required
                className="w-full bg-stone-100 dark:bg-white/5 border border-transparent focus:border-stone-500 dark:focus:border-white/20 rounded-full px-6 py-4 text-sm outline-none transition-all dark:text-white"
                placeholder="••••••••"
              />
            </div>

            <Button fullWidth type="submit" className="mt-4">
              Entrar
            </Button>
          </form>

          <div className="mt-8 text-center space-y-4">
            <Link to="/register" className="block text-xs text-stone-500 hover:text-stone-900 dark:hover:text-white transition-colors">
              ¿No tienes cuenta? <span className="font-bold underline decoration-stone-300">Regístrate aquí</span>
            </Link>
            <a href="#" className="block text-[10px] text-stone-400 hover:text-stone-900 dark:hover:text-white transition-colors">
              Olvidé mi contraseña
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};