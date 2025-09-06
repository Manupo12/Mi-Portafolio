# Portafolio Personal de Manuel Villanueva

![Captura de pantalla del Portafolio](https://via.placeholder.com/1200x600.png?text=Añade+aquí+una+captura+de+pantalla+de+tu+sitio)
Este es el repositorio del código fuente de mi portafolio personal, una single-page application (SPA) diseñada para mostrar mis habilidades, proyectos y mi trayectoria como desarrollador de software especializado en el ecosistema Android Nativo y el desarrollo web moderno.

**[➡️ Ver el sitio en vivo](httpsd://URL-DE-TU-SITIO-DESPLEGADO.com)**
---

## ✨ Características Principales

- **Diseño Moderno y Responsivo:** Interfaz oscura con acentos de color verde, totalmente adaptada para una visualización perfecta en dispositivos móviles y de escritorio.
- **Experiencia de Usuario Inmersiva:** Cada sección principal ocupa la totalidad de la pantalla, creando un flujo de navegación enfocado y elegante, apoyado por un scroll suave nativo.
- **Animaciones de Alto Rendimiento:**
  - Una animación de perfil personalizada y artística (el "Ecualizador Orgánico") que refleja mis pasiones, creada con SVG y Framer Motion.
  - Componentes que aparecen suavemente a medida que se hacen visibles en pantalla, gracias a la Intersection Observer API manejada por Framer Motion.
- **Arquitectura de Datos Centralizada:** La información de proyectos y habilidades se gestiona en archivos TypeScript dedicados (`/src/data`), separando el contenido de la lógica de presentación para un mantenimiento y escalabilidad sencillos.
- **Optimización y Rendimiento:** Construido con Astro para un rendimiento óptimo, enviando cero JavaScript al cliente por defecto y cargando componentes interactivos solo cuando son necesarios (`Astro Islands`).

---

## 🛠️ Stack Tecnológico

Este proyecto fue construido utilizando un stack de tecnologías modernas, enfocado en la experiencia de desarrollo y el rendimiento final.

| Categoría | Tecnología |
| :--- | :--- |
| **Framework Principal** | Astro |
| **UI y Componentes** | React |
| **Estilos** | Tailwind CSS (v4+) |
| **Animación** | Framer Motion |
| **Iconos** | Lucide React |
| **Tipado de Datos** | TypeScript |
| **Despliegue Planeado** | Vercel / Netlify |

---

## 🚀 Instalación y Uso Local

Si deseas ejecutar este proyecto en tu máquina local, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Manupo12/tu-repositorio.git](https://github.com/Manupo12/tu-repositorio.git)
    cd tu-repositorio
    ```
    2.  **Instalar dependencias:**
    (Se requiere [Node.js](https://nodejs.org/) v18 o superior)
    ```bash
    npm install
    ```

3.  **Ejecutar el servidor de desarrollo:**
    Esto iniciará el sitio en modo de desarrollo en `http://localhost:4321`.
    ```bash
    npm run dev
    ```

4.  **Construir para producción:**
    Esto generará una versión optimizada del sitio en la carpeta `dist/`.
    ```bash
    npm run build
    ```

---

## 📁 Estructura de Archivos

El proyecto sigue una estructura de carpetas intuitiva y organizada: