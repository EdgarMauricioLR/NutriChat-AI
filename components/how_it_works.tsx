import React from 'react';
import { MessageSquare, Zap, Smile } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    { 
      num: '01', 
      title: 'Escribe lo que te apetece', 
      text: 'Simplemente abre el chat y dile a NutriChat tu antojo. Por ejemplo: "Quiero una malteada de fresa".',
      icon: <MessageSquare size={24} />
    },
    { 
      num: '02', 
      title: 'NutriChat crea tu alternativa', 
      text: 'Nuestra IA analiza los ingredientes y te da una receta segura para diabéticos al instante.',
      icon: <Zap size={24} />
    },
    { 
      num: '03', 
      title: '¡Disfruta de tu comida!', 
      text: 'Prepara tu platillo sin culpa y disfruta de todo el sabor cuidando tu salud.',
      icon: <Smile size={24} />
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Cómo funciona?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Tener una dieta saludable nunca fue tan fácil. Solo necesitas tu celular.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
             <img 
               src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
               alt="Comida saludable" 
               className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
             />
          </div>
          <div className="lg:w-1/2">
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 group hover:bg-gray-50 hover:shadow-md p-4 rounded-xl transition-all duration-300">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-whatsapp-green text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};