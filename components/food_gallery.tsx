import React from 'react';

const foodItems = [
  {
    title: "Brownie de Aguacate",
    desc: "El postre chocolateado perfecto sin azúcar.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Pizza de Coliflor",
    desc: "Crujiente, deliciosa y sin harina refinada.",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Hamburguesa Low-Carb",
    desc: "Pan de almendra y carne magra.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Tacos Saludables",
    desc: "Tortilla de nopal y rellenos frescos.",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const FoodGallery: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50 border-y border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Título de la sección */}
        <div className="text-center mb-12">
          <span className="text-whatsapp-green font-bold tracking-wider uppercase text-sm">
            Alternativas Reales
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6 leading-tight">
            Olvida la comida de hospital, <br/>
            <span className="relative inline-block">
               come rico y saludable
               <svg className="absolute w-full h-3 -bottom-1 left-0 text-green-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
               </svg>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            No tienes que renunciar a tus platillos favoritos. NutriChat te enseña cómo transformarlos.
          </p>
        </div>

        {/* Estilos inline para ocultar scrollbar en todos los navegadores */}
        <style>{`
          .hide-scroll::-webkit-scrollbar {
            display: none;
          }
          .hide-scroll {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>

        {/* 
           Layout Responsivo:
           - Mobile: Flex + overflow-x-auto (Carrusel horizontal de tarjetas) 
           - Desktop: Grid (Tarjetas verticales estándar)
        */}
        <div className="
          flex gap-4 overflow-x-auto snap-x snap-mandatory 
          pb-8 -mx-4 px-6 /* Márgenes negativos para que el scroll llegue al borde de la pantalla */
          md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible md:pb-0 md:mx-0 md:px-0
          hide-scroll
        ">
          {foodItems.map((item, idx) => (
            <div 
              key={idx} 
              className="
                flex-shrink-0 
                w-72 sm:w-80 md:w-auto /* Ancho fijo en móvil, auto en desktop */
                snap-center 
                bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300
                overflow-hidden group border border-gray-100
              "
            >
              {/* Contenedor de Imagen - Altura controlada */}
              <div className="h-48 md:h-56 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Contenido Texto */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicador visual de deslizamiento solo para móvil */}
        <div className="md:hidden flex justify-center mt-2 gap-2 opacity-60">
            <span className="text-sm text-gray-400 animate-pulse flex items-center gap-1">
              Desliza para descubrir <span className="text-lg">→</span>
            </span>
        </div>

      </div>
    </section>
  );
};