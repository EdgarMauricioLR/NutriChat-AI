import React from 'react';
import { Play } from 'lucide-react';

const VideoPlaceholder: React.FC<{ name: string; desc: string }> = ({ name, desc }) => (
  <div className="group relative w-full aspect-[9/16] bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:-translate-y-1">
    {/* Fondo simulado de video */}
    <div className="absolute inset-0 bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
        <Play fill="white" className="text-white ml-1" size={32} />
      </div>
    </div>
    
    {/* Overlay de información */}
    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
      <h4 className="text-white font-bold text-lg">{name}</h4>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  </div>
);

export const VideoTestimonials: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Historias Reales en Video
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escucha cómo NutriChat AI ha cambiado la forma de comer de nuestra comunidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <VideoPlaceholder 
            name="Familia Hernández" 
            desc="Cocinando postres seguros para el abuelo."
          />
          <VideoPlaceholder 
            name="Marta S." 
            desc="Mi experiencia reduciendo la glucosa en 3 meses."
          />
          <VideoPlaceholder 
            name="Roberto D." 
            desc="Adiós a la comida aburrida de dieta."
          />
        </div>
      </div>
    </section>
  );
};