import React, { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export const FloatingCTA: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroButton = document.getElementById('hero-cta-button');
      
      if (heroButton) {
        const rect = heroButton.getBoundingClientRect();
        // Si el botón del hero está por encima de la ventana (scroll hacia abajo)
        // O si está muy abajo (aunque esto es menos probable en uso normal)
        // Queremos mostrar el flotante cuando el del hero NO es visible.
        
        // Verificamos si la parte inferior del botón ha subido por encima de la pantalla
        // o si simplemente no está intersectando.
        // Una forma sencilla es ver si top < 0
        if (rect.bottom < 0) {
            setShow(true);
        } else {
            setShow(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed right-0 top-1/2 transform -translate-y-1/2 z-40 transition-transform duration-500 ease-in-out ${
        show ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="bg-whatsapp-green hover:bg-green-600 text-white p-4 rounded-l-2xl shadow-xl flex items-center gap-2 font-bold group"
      >
        <MessageCircle size={24} className="animate-pulse" />
        <span className="hidden group-hover:inline-block whitespace-nowrap text-sm">
          Probar NutriChat
        </span>
      </button>
    </div>
  );
};