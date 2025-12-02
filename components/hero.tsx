import React from 'react';
import { WhatsAppDemo } from './whatsapp_demo';
import { Button } from './ui/button';
import { MessageCircle, CheckCircle, FlaskConical } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Columna de Texto */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-semibold">
                <CheckCircle size={16} /> IA Especializada en Diabetes
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm font-semibold">
                <FlaskConical size={16} /> Ingeniería de Alimentos Aplicada
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Satisface tus antojos <br/>
              <span className="text-whatsapp-green">sin subir tu glucosa</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              ¿Quieres pizza? ¿Una malteada? <strong>NutriChat AI</strong> te da recetas alternativas inmediatas por WhatsApp, seguras para diabéticos y con ingredientes que sí puedes comer.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button id="hero-cta-button" className="shadow-lg shadow-green-200/50">
                <MessageCircle size={20} /> Probar NutriChat
              </Button>
              <Button variant="outline">
                Ver Planes
              </Button>
            </div>
            
            <p className="text-xs text-gray-400 mt-4">
              * Pruébalo gratis aquí mismo en el demo interactivo.
            </p>
          </div>

          {/* Columna de Demo */}
          <div className="lg:w-1/2 w-full flex justify-center perspective-1000">
            <div className="relative w-full max-w-md">
               {/* Decoraciones de fondo */}
               <div className="absolute -top-10 -right-10 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
               <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
               
               <WhatsAppDemo />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};