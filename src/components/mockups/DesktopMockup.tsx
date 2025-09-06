import React from 'react';

// Componente: DesktopMockup
// Explicación en español:
// - Este componente actúa como un "marco" visual que simula un monitor de escritorio.
// - Recibe `children` (contenido React) y lo coloca dentro de un área con relación
//   de aspecto 16:9 (clase `aspect-video`). El contenido puede ser una imagen, un
//   video, un iframe o cualquier demo que quieras mostrar dentro del mockup.
// - No gestiona estado; es puramente presentacional.
export const DesktopMockup = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full max-w-2xl mx-auto">
            {/* Marco principal del monitor: fondo, bordes redondeados y sombras */}
            <div className="relative bg-gray-800 rounded-t-2xl shadow-2xl shadow-emerald-900/30 border-x-4 border-t-4 border-gray-900 overflow-hidden">
                {/* Área interna con relación de aspecto 16:9 donde se inserta el contenido */}
                <div className="aspect-video">
                    {/* children: el componente padre inyecta aquí su contenido visual */}
                    {children}
                </div>
            </div>

            {/* Pie visual del monitor: una banda y una peana central que simulan la base */}
            <div className="h-4 w-full bg-gray-900"></div>
            <div className="h-3 w-40 mx-auto bg-gray-800 rounded-b-lg"></div>
        </div>
    );
};