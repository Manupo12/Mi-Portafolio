
import type { Project } from './types.ts';

export const PROYECTOS: Project[] = [
    {
        id: 'opita-go',
        titulo: 'Opita GO',
        subtitulo: 'Guía de rutas de buseta para Neiva',
        descripcion: "App nativa para Android que guía a los usuarios por las rutas de busetas de Neiva, con funcionamiento offline y planificación de viajes.",
        link: "/proyectos/opita-go",
        tags: ["Kotlin", "MVVM", "Hilt", "Room", "MapLibre"],
        startDate: '2024 - Presente',
        projectType: 'App Móvil Nativa', 
        status: 'Publicado',
        iconSrc: '/images/proyectos/opita-go/icon.webp', 
        playStoreUrl: 'https://play.google.com/store/apps/details?id=com.manup.opitago',
        githubUrl: null,
        liveUrl: null,
        technologies: ["Kotlin", "Android Nativo", "MVVM (Model-View-ViewModel)", "Dagger Hilt", "Kotlin Coroutines & StateFlow", "Room Database", "SharedPreferences", "Navigation Component", "ViewBinding", "Material Components", "MapLibre GL Native", "MapTiler", "GeoJSON", "Google Play Billing", "Google AdMob", "Gradle (Kotlin DSL)"],
        media: [
            { type: 'video', src: '/videos/opita-go/opitago.mp4', alt: 'Video demo de Opita Go', orientation: 'landscape' },
            { type: 'image', src: '/images/proyectos/opita-go/screenshot1.jpg', alt: 'Captura de pantalla de Opita Go 1', orientation: 'portrait' },
            { type: 'image', src: '/images/proyectos/opita-go/screenshot2.jpg', alt: 'Captura de pantalla de Opita Go 2', orientation: 'portrait' },
        ],
        contenido: [
            'La ciudad de Neiva carecía de una herramienta digital centralizada y fácil de usar para navegar el sistema de transporte público. Opita Go soluciona este problema, proporcionando una guía visual interactiva de las rutas de autobuses, permitiendo a los usuarios planificar sus viajes de manera eficiente, incluso sin conexión a internet.',
            'La aplicación está construida siguiendo la arquitectura MVVM, utilizando Hilt para inyección de dependencias, Room para la base de datos local (lo que permite su funcionamiento offline) y MapLibre para la visualización de mapas de alto rendimiento a partir de datos GeoJSON.'
        ],
    },
    {
        id: 'ivon',
        titulo: 'I.V.O.N.',
        subtitulo: 'Plataforma colaborativa de reportes viales para Neiva',
        descripcion: "Aplicación nativa para Android que funciona como una plataforma colaborativa para reportar y visualizar eventos viales en Neiva.",
        link: "/proyectos/ivon",
        tags: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM", "Hilt"],
        startDate: '2024',
        projectType: 'App Móvil Nativa', 
        status: 'En Desarrollo',
        iconSrc: '/images/proyectos/ivon/logodesarrollo.png', 
        playStoreUrl: null,
        githubUrl: null,
        liveUrl: null,
        technologies: ["Kotlin", "Jetpack Compose", "MVVM", "Hilt", "Kotlin Coroutines & Flow", "Firebase Authentication", "Google Sign-In", "Cloud Firestore", "Firebase Storage", "osmdroid", "Google Play Services Location", "Coil", "Gradle con Kotlin DSL"],
        media: [
            { type: 'image', src: '/images/proyectos/ivon/screenshot1.png', alt: 'Video demo de IVON' },
            { type: 'image', src: '/images/proyectos/ivon/screenshot1.png', alt: 'Captura de pantalla de IVON 1', orientation: 'portrait' },
            { type: 'image', src: '/images/proyectos/ivon/screenshot1.png', alt: 'Captura de pantalla de IVON 2', orientation: 'portrait' },
        ],
        contenido: [
            'Moverse por Neiva puede ser impredecible. IVON aborda este problema permitiendo que la propia comunidad reporte y visualice en un mapa en vivo incidentes como huecos, retenes policiales y obras viales, promoviendo la fiabilidad de la información para una conducción más segura e informada.',
            'La app se desarrolla nativamente para Android con Kotlin y Jetpack Compose para una UI moderna y reactiva. Utiliza Firebase como un backend robusto, implementando un sistema de autenticación híbrido y aprovechando Firestore y Storage para la gestión de datos y multimedia en tiempo real.'
        ]
    },
    {
        id: 'web-vertrex',
        titulo: 'Plataforma Digital Vertrex S.C.',
        subtitulo: 'Plataforma web interactiva y motor de captación de clientes.',
        descripcion: "El sitio web oficial de Vertrex, evolucionado de un simple portafolio a una plataforma digital completa con un enfoque en la persuasión y la conversión.",
        link: "/proyectos/web-vertrex",
        tags: ["Desarrollo Web", "Diseño UX/UI", "Marketing Digital", "Lead Generation"],
        startDate: '2025',
        projectType: 'Sitio Web', 
        status: 'Lanzado y en Mejora Continua',
        
        
        thumbnailSrc: '/images/proyectos/vertrex/thumbnail.webp', 
        videoPreviewSrc: '/images/videos/vertrex/preview.mp4', 
        
        playStoreUrl: null,
        githubUrl: 'https://github.com/Manupo12/Vertrex-Website',
        liveUrl: 'https://vertrex-website.vercel.app',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwindcss', 'Framer Motion', 'react-icons', 'react-type-animation', 'Embla Carousel', 'Web3Forms', 'Vercel'],
        media: [{ type: 'video', src: '/videos/opita-go/opitago.mp4', alt: 'Video demo de Opita Go', orientation: 'landscape' },],
        contenido: [
            'Vertrex S.C. requería una presencia digital que reflejara su enfoque moderno y multifacético. El desafío era construir una plataforma web que sirviera como núcleo para soluciones digitales, captación de clientes y futuras verticales de negocio.',
        ],
    },
];