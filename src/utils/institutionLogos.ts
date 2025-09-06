

// Usamos importación dinámica con Vite para obtener las rutas de las imágenes.
const logos = import.meta.glob('/src/assets/institutions/*.{svg,png,jpg,jpeg,webp}');

export const LOGO_MAP: Map<string, string> = new Map();

// Rellenamos el mapa dinámicamente.
for (const path in logos) {
    const fileName = path.split('/').pop()?.split('.')[0];
    if (fileName) {
        LOGO_MAP.set(fileName, path);
    }
}