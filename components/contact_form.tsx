import React, { useState } from 'react';
import { Button } from './ui/button';

export const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    // Regex más estricto para validar correos reales (incluyendo dominio y extensión)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Por favor, introduce un correo electrónico válido (ej. nombre@dominio.com).');
      return;
    }

    // Aquí iría la lógica real de envío a backend.
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000); 
    setEmail('');
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-whatsapp-dark p-6 text-center">
        <h3 className="text-2xl font-bold text-white">Únete a NutriChat AI</h3>
        <p className="text-green-100 mt-2">Recibe novedades y acceso anticipado.</p>
      </div>
      
      <div className="p-8">
        {isSubmitted ? (
          <div className="text-center py-10 animate-fade-in">
            <div className="w-16 h-16 bg-green-100 text-whatsapp-green rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-gray-900">¡Suscrito!</h4>
            <p className="text-gray-600 mt-2">Gracias por unirte a nuestra comunidad saludable.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError('');
                }}
                className={`w-full px-4 py-3 rounded-xl border ${error ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-whatsapp-green focus:border-transparent outline-none transition-all`}
                placeholder="tu@email.com"
              />
              {error && <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>}
            </div>

            <Button type="submit" fullWidth className="mt-4 text-lg">
              Suscribirse
            </Button>
            <p className="text-xs text-center text-gray-400 mt-2">No compartiremos tu información con nadie.</p>
          </form>
        )}
      </div>
    </div>
  );
};