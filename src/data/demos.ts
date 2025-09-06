import type { Demo } from './types.ts';

export const DEMOS: Demo[] = [
    {
        id: 'demo-perfumes',
        cliente: 'Demo Tienda de Perfumes',
        descripcion: 'Diseño moderno y apetitoso enfocado en la presentación.',
        videoDesktopSrc: '/videos/demos/principerfumpc.mp4',
        videoMobileSrc: '/videos/demos/principerfummv.mp4',
    },
    {
        id: 'demo-gym',
        cliente: 'Demo Gimnasio y Fitness',
        descripcion: 'Diseño clasico de gimnasio enfocado en sus servicio y en enlistar a los visitantes a que se inscriban.',
        videoDesktopSrc: '/videos/demos/urbangympc.mp4',
        videoMobileSrc: '/videos/demos/urbangymmv.mp4',
    },
    {
        id: 'demo influencer-fitness',
        cliente: 'Demo Influencer de Fitness',
        descripcion: 'Portafolio minimalista para centrado en conseguir seguidores y fama.',
        videoDesktopSrc: '/videos/demos/serdeseablepc.mp4',
        videoMobileSrc: '/videos/demos/serdeseablemv.mp4',
    },
    {
        id: 'demo-hero-dinamico',
        cliente: 'Gastro Bar Weed-Friendly/Demo Hero Dinámico',
        descripcion: 'Este es un ejemplo real de un demo para un cliente, enfocado en una Hero Section que cambia su contenido (promociones, imágenes, texto) automáticamente según el día de la semana.',
        videoDesktopSrc: '/videos/demos/principalorganicapc.mp4',
        videoMobileSrc: '/videos/demos/principalorganicamv.mp4',
        tituloVariaciones: 'Explora las Variaciones Diarias',
        variaciones: [
            { id: 1, nombre: 'Variación 1 Lunes)', videoDesktopSrc: '/videos/demos/lunesorganicapc.mp4', videoMobileSrc: '/videos/demos/lunesorganicamv.mp4' },
            { id: 2, nombre: 'Variación 2 Martes)', videoDesktopSrc: '/videos/demos/martesorganicapc.mp4', videoMobileSrc: '/videos/demos/martesorganicamv.mp4' },
            { id: 3, nombre: 'Variación 3 Miércoles)', videoDesktopSrc: '/videos/demos/principalorganicapc.mp4', videoMobileSrc: '/videos/demos/principalorganicamv.mp4' },
            { id: 4, nombre: 'Variación 4 Jueves)', videoDesktopSrc: '/videos/demos/juevesorganicapc.mp4', videoMobileSrc: '/videos/demos/juevesorganicamv.mp4' },
            { id: 5, nombre: 'Variación 5 Viernes)', videoDesktopSrc: '/videos/demos/viernesorganicapc.mp4', videoMobileSrc: '/videos/demos/viernesorganicamv.mp4' },
        ]
    },
];