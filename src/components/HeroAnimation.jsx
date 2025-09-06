// src/components/HeroAnimation.jsx
// Componente: HeroAnimation
// Descripción (español):
// - Componente presentacional pequeño que renderiza un contenedor circular
//   con un gradiente y una animación de entrada. Está pensado como un acento
//   visual en la sección hero de la página.
// - Emplea `framer-motion` para declarar animaciones (sin manejar estado interno).
// - No se cambia ninguna lógica ni valores; solo se añaden comentarios explicativos.

import { motion } from 'framer-motion';

export default function HeroAnimation() {
  // Estructura general:
  // - Usamos `<motion.div>` en lugar de `<div>` para aprovechar props de animación
  //   directamente en el elemento (initial, animate, exit, whileHover, etc.).
  // - El componente no recibe props; es completamente autocontenido.
  return (
    <motion.div
      className="w-full h-full rounded-full"
      // Estilos inline (visual): gradiente de verdes + sombra para efecto de brillo
      style={{
        background: 'linear-gradient(135deg, #10B981, #34D399, #A7F3D0)',
        boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' // Brillo verde
      }}

      // ANIMACIONES (Framer Motion):
      // - initial: estado desde el que parte la animación al montar el componente.
      //   Aquí empezamos con opacidad 0 y escala reducida (0.5) para un efecto de aparición.
      initial={{ opacity: 0, scale: 0.5 }}

      // - animate: estado final de la animación cuando el componente está montado.
      //   Se realiza la transición desde `initial` hasta `animate`.
      animate={{ opacity: 1, scale: 1 }}

      // - transition: controla la duración y el easing de la animación.
      //   `backOut` proporciona un pequeño rebote al finalizar.
      transition={{ duration: 0.8, ease: 'backOut' }}

      // INTERACCIONES (user-driven):
      // - whileHover: estado mientras el usuario mantiene el cursor sobre el elemento.
      //   Aquí aumentamos la escala y aplicamos una rotación ligera para feedback visual.
      whileHover={{ scale: 1.1, rotate: 15 }}

      // - whileTap: estado momentáneo cuando el usuario hace click/tap.
      //   Aquí reducimos la escala y giramos en sentido contrario para un efecto táctil.
      whileTap={{ scale: 0.9, rotate: -15 }}
    >
      {/* Este div está vacío deliberadamente; el interés está en el estilo y la animación */}
    </motion.div>
  );
}