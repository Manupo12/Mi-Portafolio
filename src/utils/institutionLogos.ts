// src/utils/institutionLogos.ts
// FECHA: 10 de septiembre de 2025
// DESCRIPCIÓN: Mapeo centralizado de logos. CORREGIDO para funcionar en producción.

// [CAMBIO] Añadimos opciones a glob para que nos devuelva la URL final del archivo procesado, no la ruta original.
// eager: true -> Importa los módulos inmediatamente.
// import: 'default' -> Nos da directamente la URL final como un string.
const logos: Record<string, string> = import.meta.glob('/src/assets/institutions/*.{svg,png,jpg,jpeg,webp}', { 
    eager: true,
    import: 'default' 
});

export const LOGO_MAP: Map<string, string> = new Map();

// Rellenamos el mapa dinámicamente.
for (const path in logos) {
    const fileName = path.split('/').pop()?.split('.')[0];
    if (fileName) {
        // Ahora, "logos[path]" contiene la ruta final y correcta, como "/assets/sena.a1b2c3d4.svg"
        LOGO_MAP.set(fileName, logos[path]);
    }
}