import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Modal } from './Modal';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
  isPrivacyOpen: boolean;
  setIsPrivacyOpen: (open: boolean) => void;
  isTermsOpen: boolean;
  setIsTermsOpen: (open: boolean) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  isDark, 
  toggleTheme,
  isPrivacyOpen,
  setIsPrivacyOpen,
  isTermsOpen,
  setIsTermsOpen
}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen font-sans bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-50 transition-colors duration-700 selection:bg-stone-900 selection:text-white dark:selection:bg-white dark:selection:text-black">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <main className="relative min-h-[80vh]">
        {children}
      </main>

      <Footer 
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
      />

       {/* Modals for Policies */}
      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)}
        title="Aviso de Privacidad"
      >
        <p><strong>Responsable de la protección de sus datos personales</strong></p>
        <p>FitForm, con domicilio en P.º de los Tamarindos 90, Bosques de las Lomas, Ciudad de México, es responsable del tratamiento de sus datos personales.</p>
        <br/>
        <p><strong>¿Para qué fines recabamos y utilizamos sus datos personales?</strong></p>
        <p>Sus datos personales serán utilizados para las siguientes finalidades necesarias para el servicio que solicita: Gestión de reservas de clases, procesamiento de pagos, notificación de cambios en horarios, y contacto de emergencia.</p>
      </Modal>

      <Modal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)}
        title="Términos y Condiciones"
      >
        <p><strong>Política de Cancelación</strong></p>
        <p>Todas las clases deben cancelarse con al menos 10 horas de anticipación.</p>
        <br/>
        <p><strong>Pagos</strong></p>
        <p>No aceptamos pagos en efectivo. Únicamente tarjetas de crédito o débito a través de nuestra plataforma.</p>
      </Modal>
    </div>
  );
};