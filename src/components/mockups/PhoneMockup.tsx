import React from 'react';

// Componente: PhoneMockup
// Explicación en español:
// - Propósito: mostrar un "mockup" o marco con forma de teléfono alrededor del
//   contenido pasado como `children` (imagen, video, iframe, demo, etc.).
// - Uso: se importa y se coloca contenido dentro del componente, por ejemplo:
//     <PhoneMockup>
//       <img src="..." />
//     </PhoneMockup>
// - No recibe props adicionales; solo `children` que se renderiza en el interior.
// - Aspecto y comportamiento: se usan utilidades Tailwind para definir tamaño,
//   relación de aspecto, bordes redondeados, sombras y recortes para que el
//   contenido se ajuste al marco del teléfono.
export const PhoneMockup = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full max-w-[250px] md:max-w-[300px] mx-auto">
            {/* Cuerpo del teléfono: relación de aspecto parecida a un móvil */}
            <div className="relative aspect-[9/19.5] bg-gray-800 rounded-[40px] shadow-2xl shadow-emerald-900/30 border-4 border-gray-900 overflow-hidden">
                {/* Área interna con padding (inset-2) y esquinas interiores redondeadas */}
                <div className="absolute inset-2 rounded-[32px] overflow-hidden">
                    {/* children: aquí se inyecta el contenido visual desde el componente padre */}
                    {children}
                </div>
                {/* Elemento decorativo superior centrado que simula la parte superior del teléfono */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-6 bg-gray-900 rounded-b-lg"></div>
            </div>
        </div>
    );
};