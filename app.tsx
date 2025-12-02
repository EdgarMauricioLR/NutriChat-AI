import React from 'react';
import { Hero } from './components/hero';
import { Features } from './components/features';
import { HowItWorks } from './components/how_it_works';
import { Testimonials } from './components/testimonials_text';
import { VideoTestimonials } from './components/testimonials_video';
import { ComparisonSection } from './components/comparison_section';
import { ContactForm } from './components/contact_form';
import { LiveViewers } from './components/live_viewers';
import { FloatingCTA } from './components/floating_cta';
import { FoodGallery } from './components/food_gallery';
import { MessageCircle } from 'lucide-react';

// Header fijo con efecto glassmorphism
const Header: React.FC = () => (
  <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-2xl text-gray-900 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center text-white">
          <MessageCircle size={20} />
        </div>
        NutriChat<span className="text-whatsapp-green">AI</span>
      </div>
      <nav className="hidden lg:flex gap-8 text-gray-600 font-medium text-sm">
        {/* Enlaces apuntando a las secciones específicas con los textos solicitados */}
        <a href="#how-it-works" className="hover:text-whatsapp-green transition-colors">¿Cómo funciona?</a>
        <a href="#features" className="hover:text-whatsapp-green transition-colors">¿Por qué elegir NutriChat AI?</a>
        <a href="#testimonials" className="hover:text-whatsapp-green transition-colors">Lo que dicen nuestros usuarios</a>
      </nav>
      <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all shadow-md">
        Iniciar Sesión
      </button>
    </div>
  </header>
);

// Footer simple
const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 font-bold text-2xl mb-6">
         <div className="w-8 h-8 bg-whatsapp-green rounded-lg flex items-center justify-center text-white">
          <MessageCircle size={20} />
        </div>
        NutriChat AI
      </div>
      <p className="text-gray-400 mb-8 max-w-md mx-auto">
        Ayudando a miles de personas con diabetes a disfrutar de la comida sin culpa ni riesgos.
      </p>
      <div className="text-sm text-gray-500">
        © {new Date().getFullYear()} NutriChat AI. Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        {/* Parte 1: Hero */}
        <Hero />
        
        {/* Parte 2: Cómo funciona (Fondo Blanco) */}
        <HowItWorks />

        {/* Parte 3: Galería de Comida (Fondo Gris, slider en móvil) */}
        <FoodGallery />
        
        {/* Parte 4: Beneficios / Por qué elegir (Fondo Blanco) */}
        <Features />
        
        <Testimonials />
        <VideoTestimonials />
        <ComparisonSection />
        
        {/* Sección de Contacto y CTA */}
        <section className="py-20 bg-gradient-to-b from-green-50 to-green-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                   <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">¿Listo para comer delicioso?</h2>
                   <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                      Déjanos tu correo para empezar o recibir novedades.
                   </p>
                </div>
                
                <ContactForm />
            </div>
        </section>
      </main>
      <LiveViewers />
      <FloatingCTA />
      <Footer />
    </div>
  );
}

export default App;