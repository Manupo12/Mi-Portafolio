import React from 'react';
import type { Project } from '../../data/types';

// Componente: CardWeb (explicación en español)
// - Muestra una tarjeta para un proyecto web con miniatura y un video de
//   previsualización que se reproduce al hover (vista previa).
// - Recibe un objeto `project` que cumple la interfaz `Project`.
// - No modifica el DOM ni gestiona estado; solo renderiza según las props.
export const CardWeb = (project: Project) => {
    // Estado derivado del prop `status` para mostrar una badge visual
    const isPublished = project.status === 'Publicado';
    const badgeText = isPublished ? 'Publicado' : 'En Desarrollo';
    // Clases CSS para la badge según el estado (Tailwind utilities)
    const badgeClasses = isPublished 
        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
        : 'bg-sky-500/20 text-sky-300 border-sky-500/30';
    
    return (
        // Enlace que envuelve toda la tarjeta; mantiene la estructura y estilos
        <a href={project.link} className="relative group block bg-gray-900/50 border border-gray-700/60 rounded-xl h-full flex flex-col overflow-hidden hover:bg-gray-800/60 transition-all duration-300">
            {/* Contenedor superior: imagen miniatura y video de previsualización superpuestos */}
            <div className="relative w-full aspect-video">
                {/* Imagen miniatura: visible por defecto, se oculta con opacity al hover */}
                <img src={project.thumbnailSrc} alt={`Thumbnail de ${project.titulo}`} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0" />
                {/* Video de preview: oculto por defecto (opacity:0) y aparece al hover (opacity:100).
                    - loop y muted permiten reproducción automática silenciosa en algunos navegadores.
                    - playsInline evita fullscreen automático en móviles. */}
                <video src={project.videoPreviewSrc} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 group-hover:opacity-100"></video>
            </div>
            {/* Contenido textual: título, descripción y tags */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Badge: se renderiza solo si project.status existe */}
                {project.status && (
                    <div className={`absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full border ${badgeClasses}`}>{badgeText}</div>
                )}
                <div className="flex-grow">
                    {/* Título del proyecto con efecto de color al hover del grupo */}
                    <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">{project.titulo}</h3>
                    {/* Descripción con limitador visual (`line-clamp-2`) */}
                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">{project.descripcion}</p>
                </div>
                {/* Lista de tags: se mapean si existen */}
                <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-800">
                    {project.tags?.map((tag: string) => (
                        <span key={tag} className="text-xs font-semibold text-emerald-300 bg-emerald-900/50 px-2 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>
        </a>
    );
};