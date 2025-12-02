import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

export const LiveViewers: React.FC = () => {
  const [viewers, setViewers] = useState(15);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Retraso inicial para que aparezca suavemente
    setTimeout(() => setIsVisible(true), 1000);

    // Inicializar entre 9 y 23
    setViewers(Math.floor(Math.random() * (23 - 9 + 1)) + 9);

    const interval = setInterval(() => {
      setViewers((prev) => {
        // Variación pequeña (-1, 0, +1)
        const change = Math.floor(Math.random() * 3) - 1;
        let next = prev + change;
        
        // Mantener dentro del rango 9-23
        if (next < 9) next = 9;
        if (next > 23) next = 23;
        
        return next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-40 animate-fade-in-up">
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg rounded-full px-4 py-2 flex items-center gap-3 transition-all hover:scale-105">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
        <div className="flex items-center gap-1.5">
          <Eye size={16} className="text-gray-600" />
          <span className="text-sm font-semibold text-gray-800 tabular-nums">
            {viewers} <span className="font-normal text-gray-500 hidden sm:inline">personas viendo ahora</span>
            <span className="font-normal text-gray-500 sm:hidden">viendo</span>
          </span>
        </div>
      </div>
    </div>
  );
};