
export interface Media {
    type: 'image' | 'video';
    src: string;
    alt: string;
    orientation?: 'portrait' | 'landscape';
}


export interface Project {
    id: string;
    titulo: string;
    subtitulo: string;
    descripcion: string; 
    link: string;
    tags: string[]; 
    startDate?: string;
    projectType: string; 
    status?: string;
    playStoreUrl?: string | null;
    githubUrl?: string | null;
    liveUrl?: string | null;
    technologies: string[]; 
    media: Media[]; 
    contenido: string[]; 


    iconSrc?: string;         
    thumbnailSrc?: string;    
    videoPreviewSrc?: string; 
}

export interface DemoVariation {
    id: number;
    nombre: string;
    videoDesktopSrc: string;
    videoMobileSrc: string;
}

export interface Demo {
    id: string;
    cliente: string;
    descripcion: string;

    videoDesktopSrc: string;
    videoMobileSrc: string;

    tituloVariaciones?: string; 
    variaciones?: DemoVariation[]; 
}

export interface Certification {
    titulo: string;
    institucion: string; 
    fecha: string;     
    thumbnailSrc: string; 
    pdfSrc: string;       
    institutionLogos: string[];
    

}