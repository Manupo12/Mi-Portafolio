// src/utils/institutionLogos.ts
// FECHA: 11 de septiembre de 2025
// DESCRIPCIÓN: Mapeo explícito y robusto de logos de instituciones.

// [CAMBIO] Importamos cada logo de forma individual y explícita.
// Astro/Vite procesará estas imágenes y nos dará la ruta final correcta.
import senaLogo from '../assets/institutions/sena.png';


// [CAMBIO] Creamos el mapa manualmente. Es más claro y menos propenso a errores.
export const LOGO_MAP: Map<string, typeof senaLogo> = new Map([
    ['sena', senaLogo],
    // Nota para futuros desarrolladores:
    // Si añades un nuevo logo en el futuro, solo tienes que:
    // 1. Añadir el archivo en 'src/assets/institutions/'.
    // 2. Importarlo aquí arriba.
    // 3. Añadir una nueva línea al mapa aquí abajo.
]);