import { GoogleGenAI } from "@google/genai";

// Inicializamos el cliente de Gemini con la API Key del entorno.
// NOTA: En producción real, estas llamadas deberían pasar por un backend propio para no exponer la Key.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Función que toma un antojo del usuario y devuelve una alternativa apta para diabéticos.
 * Utiliza el modelo gemini-2.5-flash para respuestas rápidas.
 */
export const obtenerAlternativaSaludable = async (antojo: string): Promise<string> => {
  try {
    const modelo = "gemini-2.5-flash";
    
    // Instrucciones del sistema actualizadas para la personalidad de "NutriChat".
    const instruccionSistema = `
      Eres "NutriChat", una asistente nutricionista experta en diabetes que vive en una interfaz de chat.
      Tu objetivo es recibir el nombre de una comida poco saludable (ej. "Malteada de chocolate", "Pizza") 
      y devolver inmediatamente una receta alternativa deliciosa pero segura para diabéticos (baja en índice glucémico, sin azúcar refinada).
      
      Reglas de respuesta:
      1. Tu tono es profesional pero cálido y empático.
      2. Usa formato de chat/WhatsApp (emojis son bienvenidos).
      3. La estructura debe ser:
         - Saludo breve (ej: "¡Hola! 🥗 NutriChat tiene una opción para ti...").
         - Lista de ingredientes (con viñetas).
         - Pasos de preparación muy breves.
      4. Mantén la respuesta concisa (menos de 150 palabras).
    `;

    const promptUsuario = `Quiero comer esto: ${antojo}. Dame una alternativa segura.`;

    const response = await ai.models.generateContent({
      model: modelo,
      contents: promptUsuario,
      config: {
        systemInstruction: instruccionSistema,
        temperature: 0.7, // Creatividad balanceada
      },
    });

    return response.text || "Lo siento, tuve un problema pensando en una receta. ¿Podrías intentar con otro platillo?";
  } catch (error) {
    console.error("Error al conectar con Gemini:", error);
    return "Ocurrió un error de conexión. Por favor revisa tu internet e intenta de nuevo.";
  }
};