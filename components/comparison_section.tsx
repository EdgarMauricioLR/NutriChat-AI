import React from 'react';
import { X, Check } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const sinNutriChat = [
    "Miedo constante a que suba el azúcar.",
    "Comida aburrida e insípida.",
    "Estrés revisando etiquetas en cada compra.",
    "Sensación de restricción permanente.",
    "Repitiendo los mismos alimentos siempre."
  ];

  const conNutriChat = [
    "Certeza total en cada bocado que das.",
    "Sabores nuevos y deliciosos cada día.",
    "Tu asistente NutriChat hace el trabajo difícil por ti.",
    "Sensación de libertad y normalidad en tus comidas.",
    "Variedad infinita de recetas seguras."
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Recupera el placer de comer
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Deja atrás las restricciones y empieza a disfrutar con seguridad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card Negativa */}
          <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
            <h3 className="text-xl font-bold text-red-800 mb-6 flex items-center gap-2">
              <span className="bg-red-200 p-1 rounded">🚫</span> Sin NutriChat AI
            </h3>
            <ul className="space-y-4">
              {sinNutriChat.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card Positiva */}
          <div className="bg-green-50 rounded-3xl p-8 border border-green-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
            <h3 className="text-xl font-bold text-green-800 mb-6 flex items-center gap-2">
              <span className="bg-green-200 p-1 rounded">🥗</span> Con NutriChat AI
            </h3>
            <ul className="space-y-4 relative z-10">
              {conNutriChat.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-800 font-medium">
                  <div className="bg-white rounded-full p-0.5 shadow-sm">
                    <Check className="text-whatsapp-green flex-shrink-0" size={16} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};