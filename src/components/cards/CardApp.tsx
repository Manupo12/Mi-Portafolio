import React from 'react';
import type { Project } from '../../data/types';

// Componente: CardApp
// Descripción (español): Tarjeta reutilizable para mostrar un proyecto de tipo
// aplicación móvil. Recibe un objeto `project` que cumple la interfaz Project.
// Se muestra icono, título, descripción, estado (badge) y etiquetas.
export const CardApp = (project: Project) => {
    // Determinamos si el proyecto está publicado para ajustar la badge
    const isPublished = project.status === 'Publicado';
    const badgeText = isPublished ? 'Publicado' : 'En Desarrollo';
    // badgeClasses aplica estilos diferentes según el estado
    const badgeClasses = isPublished 
        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' 
        : 'bg-sky-500/20 text-sky-300 border-sky-500/30';

    return (
        // Enlace que envuelve toda la tarjeta; conserva diseño flex-column
        <a href={project.link} className="relative group block bg-gray-900/50 border border-gray-700/60 rounded-xl p-6 h-full flex flex-col hover:bg-gray-800/60 hover:-translate-y-1 transition-all duration-300">
            {/* Badge de estado: se muestra solo si `project.status` existe */}
            {project.status && (
                <div className={`absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full border ${badgeClasses}`}>{badgeText}</div>
            )}

            {/* Contenido principal: icono, título y descripción */}
            <div className="flex-grow">
                {project.iconSrc && <img src={project.iconSrc} alt={`Icono de ${project.titulo}`} className="w-14 h-14 rounded-lg mb-4" />}
                <h3 className="font-bold text-lg text-white group-hover:text-emerald-400 transition-colors">{project.titulo}</h3>
                <p className="text-sm text-gray-400 mt-2 line-clamp-3">{project.descripcion}</p>
            </div>

            {/* Etiquetas/tags: se renderiza una por cada tag si existen */}
            <div className="flex flex-wrap gap-2 pt-4 mt-4 border-t border-gray-800">
                {project.tags?.map((tag: string) => (
                    <span key={tag} className="text-xs font-semibold text-emerald-300 bg-emerald-900/50 px-2 py-1 rounded-full">{tag}</span>
                ))}
            </div>
        </a>
    );
};