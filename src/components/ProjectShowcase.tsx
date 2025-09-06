import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROYECTOS } from '../data/projects';
import { CardApp } from './cards/CardApp';
import { CardWeb } from './cards/CardWeb';

// Tipo local para los filtros disponibles en la UI
type FilterType = 'all' | 'app' | 'web';

// Componente: ProjectShowcase
// Descripción (español):
// - Muestra una lista filtrable de proyectos (apps y webs).
// - Permite filtrar por tipo (todas, apps, webs) y muestra los resultados en una
//   cuadrícula responsiva con animaciones de entrada/salida usando Framer Motion.
// - Cada proyecto se renderiza como `CardApp` (si es app) o `CardWeb` (si es web).
export const ProjectShowcase = () => {
    // Estado: filtro actualmente activo
    const [filter, setFilter] = useState<FilterType>('all');

    // filteredProjects: memoizamos el resultado para evitar cálculos innecesarios
    // - Si filter === 'app' devolvemos solo proyectos cuyo projectType sea 'App Móvil Nativa'
    // - Si filter === 'web' devolvemos solo proyectos cuyo projectType sea 'Sitio Web'
    // - Si filter === 'all' devolvemos todos los proyectos
    const filteredProjects = useMemo(() => {
        if (filter === 'app') {
            return PROYECTOS.filter(p => p.projectType === 'App Móvil Nativa');
        }
        if (filter === 'web') {
            return PROYECTOS.filter(p => p.projectType === 'Sitio Web');
        }
        return PROYECTOS;
    }, [filter]);

    // Componente interno: botón de filtro reutilizable
    // Props:
    // - filterType: tipo de filtro al que corresponde el botón
    // - text: texto visible en el botón
    const FilterButton = ({ filterType, text }: { filterType: FilterType, text: string }) => (
        <button
            onClick={() => setFilter(filterType)}
            className={`px-4 py-2 text-sm font-semibold border rounded-full transition-colors duration-300 ${
                filter === filterType
                    ? 'bg-emerald-400 border-emerald-400 text-gray-950'
                    : 'border-gray-600 text-gray-300 hover:bg-gray-800'
            }`}
        >
            {text}
        </button>
    );

    return (
        <div>
            {/* Controles de filtro: botones para seleccionar la vista */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
                <FilterButton filterType="all" text="Todos" />
                <FilterButton filterType="app" text="Apps Móviles" />
                <FilterButton filterType="web" text="Páginas Web" />
            </div>

            {/*
                Grid responsiva de proyectos con animación:
                - `motion.div layout` permite transiciones suaves cuando cambian
                  las posiciones de los elementos en la rejilla.
                - `AnimatePresence` envuelve los items para animar entrada/salida
                  cuando el array `filteredProjects` cambia.
            */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredProjects.map(proyecto => (
                        <motion.div
                            key={proyecto.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Render condicional: CardApp para apps, CardWeb para webs */}
                            {proyecto.projectType === 'App Móvil Nativa' 
                                ? <CardApp {...proyecto} />
                                : <CardWeb {...proyecto} />
                            }
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};