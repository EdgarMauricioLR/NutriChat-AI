import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Bot } from 'lucide-react';
import { obtenerAlternativaSaludable } from '../services/gemini_service';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: string;
}

export const WhatsAppDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '🥗 ¡Hola! Soy NutriChat. Dime qué se te antoja hoy y te daré una versión segura y deliciosa.',
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll al final del chat cuando llega un mensaje nuevo
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || loading) return;

    const userText = input;
    setInput('');

    // 1. Agregar mensaje del usuario
    const userMsg: Message = {
      id: Date.now().toString(),
      text: userText,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setLoading(true);

    // 2. Llamar a la API de Gemini (NutriChat)
    const respuestaAI = await obtenerAlternativaSaludable(userText);

    // 3. Agregar respuesta de la IA
    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      text: respuestaAI,
      sender: 'ai',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, aiMsg]);
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-100 rounded-[30px] overflow-hidden shadow-2xl border-8 border-gray-800 h-[600px] flex flex-col relative">
      {/* Notch del teléfono (estético) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

      {/* Header estilo WhatsApp */}
      <div className="bg-whatsapp-dark p-4 pt-8 flex items-center gap-3 text-white z-10 shadow-sm">
        <div className="bg-white/20 p-2 rounded-full">
            <Bot size={24} className="text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-lg leading-tight">NutriChat AI</h3>
          <p className="text-xs text-green-100">En línea</p>
        </div>
      </div>

      {/* Área de mensajes con fondo típico de WhatsApp */}
      <div className="flex-1 bg-whatsapp-bg overflow-y-auto p-4 space-y-4" style={{ backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")', backgroundRepeat: 'repeat' }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] p-3 rounded-lg shadow-sm relative text-sm ${
                msg.sender === 'user'
                  ? 'bg-[#dcf8c6] rounded-tr-none' // Color mensaje usuario (verde claro)
                  : 'bg-white rounded-tl-none'     // Color mensaje IA (blanco)
              }`}
            >
              <p className="whitespace-pre-wrap text-gray-800">{msg.text}</p>
              <span className="text-[10px] text-gray-500 block text-right mt-1">
                {msg.timestamp}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
             <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm flex items-center gap-2">
                <Loader2 className="animate-spin text-whatsapp-green" size={16} />
                <span className="text-xs text-gray-500">NutriChat está escribiendo...</span>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input de mensajes */}
      <form onSubmit={handleSend} className="bg-gray-100 p-3 flex items-center gap-2 border-t border-gray-200">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu antojo..."
          className="flex-1 p-3 rounded-full border-none focus:ring-2 focus:ring-whatsapp-green outline-none text-sm shadow-inner"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="bg-whatsapp-dark text-white p-3 rounded-full hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};