import React from 'react';
import { Heart, Clock, ShieldCheck, ChefHat } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center">
    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-whatsapp-green mb-6 shadow-sm mx-auto">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir NutriChat AI?
          </h2>
          <p className="text-gray-600">
            No sacrifiques el sabor por tu salud. Nuestra tecnología entiende tus gustos y tus necesidades médicas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<ShieldCheck size={28} />}
            title="100% Seguro"
            desc="Todas las recetas están validadas para mantener un índice glucémico bajo y evitar picos de azúcar."
          />
          <FeatureCard 
            icon={<Clock size={28} />}
            title="Respuesta Inmediata"
            desc="Sin búsquedas eternas en Google. Escribe lo que quieres y recibe la receta en segundos."
          />
          <FeatureCard 
            icon={<ChefHat size={28} />}
            title="Alternativas Reales"
            desc="Transformamos desde comida casera hasta postres y hamburguesas usando sustitutos inteligentes."
          />
          <FeatureCard 
            icon={<Heart size={28} />}
            title="Salud a Largo Plazo"
            desc="Aprende a comer lo que te gusta de forma saludable sin sentir que estás a dieta."
          />
        </div>
      </div>
    </section>
  );
};