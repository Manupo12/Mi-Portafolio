import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import type { Media } from '../data/types';
import { PhoneMockup } from './mockups/PhoneMockup'; // Importamos el mockup de React

// Interfaz de props del componente
interface ProjectGalleryProps {
    media: Media[]; // Array de items multimedia (imágenes y/o videos)
    projectType: string; // Prop que indica el tipo de proyecto (p.ej. 'App Móvil Nativa')
}

export const ProjectGallery = ({ media, projectType }: ProjectGalleryProps) => {
    // Estado local que controla el índice abierto por el lightbox (-1 = cerrado)
    const [index, setIndex] = useState(-1);

    // Si no hay media, no renderizamos nada (defensa temprana)
    if (!media || media.length === 0) {
        return null;
    }

    // slides: convertimos los items de tipo 'image' al formato esperado por Lightbox
    // - filtramos solo imágenes ya que el lightbox aquí está configurado para imagenes
    // - calculamos width/height basados en la orientación para un layout más correcto
    const slides = media
        .filter(item => item.type === 'image')
        .map(item => ({
            type: "image" as const,
            src: item.src,
            alt: item.alt,
            width: item.orientation === 'portrait' ? 1080 : 1920,
            height: item.orientation === 'portrait' ? 2400 : 1080,
        }));

    // Determinamos si el proyecto es una app nativa para usar un layout distinto
    const isAppProject = projectType === 'App Móvil Nativa';

    return (
        <div>
            {/* Renderizado condicional según tipo de proyecto */}
            {isAppProject ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                    {media.map((item, i) => (
                        <div
                            key={item.src}
                            className="cursor-pointer group"
                            onClick={() => setIndex(i)}
                        >
                            <div className="transition-transform duration-300 group-hover:scale-105">
                                <PhoneMockup>
                                    {item.type === 'video' ? (
                                        // Reproducimos videos en bucle y en silencio para preview
                                        <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                                    ) : (
                                        <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                                    )}
                                </PhoneMockup>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4">
                    {media.map((item, i) => (
                        <div
                            key={item.src}
                            className={`
                                rounded-lg overflow-hidden border border-gray-700 shadow-lg cursor-pointer
                                hover:shadow-emerald-900/50 transition-all duration-300 group
                                ${i === 0 && item.orientation === 'portrait' ? 'row-span-2' : ''}
                                ${i === 0 && item.orientation === 'landscape' ? 'col-span-full md:col-span-2' : ''}
                            `}
                            onClick={() => setIndex(i)}
                        >
                             <div className="relative w-full h-full overflow-hidden">
                                {item.type === 'video' ? (
                                    <video src={item.src} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                ) : (
                                    <img src={item.src} alt={item.alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Lightbox: muestra solo las imágenes (slides calculadas arriba). */}
            <Lightbox
                open={index >= 0}
                close={() => setIndex(-1)}
                slides={slides}
                index={index}
            />
        </div>
    );
};