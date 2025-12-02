import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Carlos Méndez",
    role: "Diabetes Tipo 2",
    quote: "¡Increíble! NutriChat me enseñó a hacer una pizza con base de coliflor que sabe deliciosa. Ya no extraño la comida chatarra.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Laura Gómez",
    role: "Prediabética",
    quote: "Facilita mi vida con la dieta. Antes me frustraba no saber qué comer cuando salía, ahora NutriChat me da opciones al momento.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Sofía Ruiz",
    role: "Madre de niño diabético",
    quote: "¡Encontré el postre favorito de mi hijo sin azúcar! Los brownies de aguacate que sugirió NutriChat fueron un éxito total.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-gray-600">
            Personas reales disfrutando de comida real gracias a NutriChat AI.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-whatsapp-green ring-offset-2" 
                />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};