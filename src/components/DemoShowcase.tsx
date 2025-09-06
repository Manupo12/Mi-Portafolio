// ARCHIVO: src/components/DemoShowcase.tsx
// FECHA: 5 de septiembre de 2025
// DESCRIPCIÓN: Componente interactivo de React para mostrar una lista de demos,
// con soporte para demos simples y demos complejos que tienen varias variaciones.
//
// Comentarios generales (español):
// - Este componente renderiza una lista de "pestañas" (DEMOS) que el usuario puede
//   seleccionar. Cada demo tiene videos para escritorio y móvil. Algunos demos
//   pueden incluir "variaciones" (por ejemplo, distintos estados o flujos) que
//   permiten al usuario alternar entre versiones del video.
// - Para la experiencia visual se usan los mockups `DesktopMockup` y `PhoneMockup`.
// - Para animaciones de entrada/salida usamos `framer-motion` (AnimatePresence + motion).

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DEMOS } from '../data/demos';
import type { DemoVariation } from '../data/types';
import { PhoneMockup } from './mockups/PhoneMockup';
import { DesktopMockup } from './mockups/DesktopMockup';

export const DemoShowcase = () => {
    // Estado: índice del demo principal seleccionado en el array DEMOS
    const [activeDemoIndex, setActiveDemoIndex] = useState(0);
    
    // Estado: variación actualmente activa. 'general' significa la versión por defecto.
    // También puede contener el id numérico de una variación definida en DEMOS[i].variaciones
    const [activeVariationId, setActiveVariationId] = useState<number | 'general'>('general');

    // Referencia al demo actualmente activo (objeto extraído del array DEMOS)
    const activeDemo = DEMOS[activeDemoIndex];

    // currentVideos: por defecto contenemos las URLs (o paths) de los videos del demo activo
    // - desktop: video para mostrar dentro del mockup de escritorio
    // - mobile: video para mostrar dentro del mockup de teléfono
    let currentVideos = {
        desktop: activeDemo.videoDesktopSrc,
        mobile: activeDemo.videoMobileSrc,
    };

    // Si el usuario selecciona una variación distinta a 'general' y el demo tiene variaciones,
    // intentamos resolver la variación por id y sustituir los videos por los de esa variación.
    if (activeVariationId !== 'general' && activeDemo.variaciones) {
        const variation = activeDemo.variaciones.find(v => v.id === activeVariationId);
        if (variation) {
            currentVideos = {
                desktop: variation.videoDesktopSrc,
                mobile: variation.videoMobileSrc,
            };
        }
    }

    // handleSelectDemo: cambia el demo activo por índice y resetea la variación a 'general'.
    // - index: posición en el array DEMOS
    const handleSelectDemo = (index: number) => {
        setActiveDemoIndex(index);
        // Al cambiar de demo, volvemos a la vista general (no a una variación anterior)
        setActiveVariationId('general');
    };

    // handleSelectVariation: cambia la variación activa. Puede recibir:
    // - 'general' para volver a los videos por defecto del demo
    // - un objeto DemoVariation para seleccionar su id
    const handleSelectVariation = (variation: DemoVariation | 'general') => {
        if (variation === 'general') {
            setActiveVariationId('general');
        } else {
            setActiveVariationId(variation.id);
        }
    };

    return (
        <div className="w-full">
            {/*
                Pestañas de selección de demo principal:
                - Renderizamos un botón por cada demo localizado en DEMOS.
                - El estilo cambia cuando el botón corresponde al demo activo (activeDemoIndex).
            */}
            <div className="flex justify-center flex-wrap gap-3 mb-8">
                {DEMOS.map((demo, index) => (
                    <button
                        key={demo.id}
                        onClick={() => handleSelectDemo(index)}
                        className={`px-4 py-2 text-sm font-semibold border rounded-full transition-colors duration-300 ${
                            activeDemoIndex === index
                                ? 'bg-emerald-400 border-emerald-400 text-gray-950'
                                : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                        }`}
                    >
                        {demo.cliente}
                    </button>
                ))}
            </div>

            {/* Descripción del demo activo (texto resumen) */}
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12 min-h-[40px]">{activeDemo.descripcion}</p>

            {/*
                Mockups con animación de transición:
                - `AnimatePresence` + `motion.div` permite animar la entrada/salida
                  cuando `currentVideos.desktop` cambia.
                - La propiedad `key={currentVideos.desktop}` fuerza a React a desmontar
                  y volver a montar el bloque cuando la fuente del video cambia,
                  lo que es útil para reiniciar la reproducción o forzar re-render.
            */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentVideos.desktop} // clave importante para forzar recarga del bloque al cambiar video
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
                >
                    {/* Área grande: mockup de escritorio */}
                    <div className="lg:col-span-3">
                        <DesktopMockup>
                            {/* Video de escritorio: `autoPlay loop muted playsInline` para preview silenciosa */}
                            <video src={currentVideos.desktop} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
                        </DesktopMockup>
                    </div>

                    {/* Área pequeña: mockup de móvil */}
                    <div className="lg:col-span-2">
                        <PhoneMockup>
                            <video src={currentVideos.mobile} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
                        </PhoneMockup>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/*
                Sección opcional de variaciones:
                - Se muestra solo si el demo activo tiene `variaciones`.
                - Permite elegir entre la vista 'General' (videos por defecto) y
                  cada variación disponible (cada una con su propio video pair).
                - Usamos `AnimatePresence` y un pequeño delay para animar la aparición.
            */}
            {activeDemo.variaciones && activeDemo.variaciones.length > 0 && (
                <AnimatePresence>
                    <motion.div 
                        className="text-center mt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        {/* Título de la sección de variaciones */}
                        <h4 className="text-lg font-bold text-white mb-4">{activeDemo.tituloVariaciones}</h4>
                        <div className="flex justify-center flex-wrap gap-3">
                            {/* Botón 'General' que restaura los videos por defecto */}
                            <button
                                onClick={() => handleSelectVariation('general')}
                                className={`px-4 py-2 text-xs font-semibold border rounded-full transition-colors duration-300 ${
                                    activeVariationId === 'general'
                                        ? 'bg-sky-400 border-sky-400 text-gray-950'
                                        : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                                }`}
                            >
                                General
                            </button>

                            {/* Botones para cada variación definida en el demo */}
                            {activeDemo.variaciones.map((variation) => (
                                <button
                                    key={variation.id}
                                    onClick={() => handleSelectVariation(variation)}
                                    className={`px-4 py-2 text-xs font-semibold border rounded-full transition-colors duration-300 ${
                                        activeVariationId === variation.id
                                            ? 'bg-sky-400 border-sky-400 text-gray-950'
                                            : 'border-gray-600 text-gray-300 hover:bg-gray-800'
                                    }`}
                                >
                                    {variation.nombre}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}
        </div>
    );
};