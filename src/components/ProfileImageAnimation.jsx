// src/components/ProfileImageAnimation.jsx - CONCEPTO FINAL: ECUALIZADOR ORGÁNICO
// Descripción completa (español):
// - Este componente renderiza una imagen de perfil en el centro rodeada por un
//   anillo de barras que se comportan como un ecualizador. Las barras ondulan
//   con el tiempo usando valores de animación reactivas de Framer Motion.
// - La implementación aprovecha `useTime` (señal de tiempo) y `useTransform`
//   para mapear el tiempo a alturas de barra. Cada barra obtiene una fase distinta
//   según su índice, creando la sensación de onda circular.

import React from 'react';
import { motion, useTime, useTransform } from 'framer-motion';

// --- CONFIGURACIÓN ---
// Comentarios sobre las constantes visuales:
// - NUM_BARS: número de barras alrededor del círculo. Debe ser constante para
//   que los hooks (useTransform) se llamen en el mismo orden en cada render.
// - BAR_WIDTH: ancho visual de cada barra (en unidades SVG)
// - BAR_BASE_HEIGHT: altura mínima/base de cada barra
// - BAR_AMP_HEIGHT: altura adicional máxima que puede aportar la onda
// - RADIUS: distancia desde el centro donde se posicionan las barras (radio)
const NUM_BARS = 48; // Número de barras alrededor del círculo (más = más fluidez)
const BAR_WIDTH = 4; // Ancho de cada barra
const BAR_BASE_HEIGHT = 10; // Altura base de las barras
const BAR_AMP_HEIGHT = 15; // Amplitud adicional que aporta la ondulación
const RADIUS = 120; // Radio del círculo donde se posicionan las barras

// --- EL COMPONENTE ---
// Props:
// - src: ruta/URL de la imagen de perfil
// - alt: texto alternativo para la imagen
const ProfileImageAnimation = ({ src, alt }) => {
  // useTime: devuelve un MotionValue que representa el tiempo (ms) en contínuo.
  // No es un número plano; es una señal reactiva que puede ser usada con useTransform.
  const time = useTime();

  return (
    // Contenedor principal: centra el área y define tamaño responsivo
    <div className="relative w-64 h-64 md:w-72 md:h-72 flex items-center justify-center">

      {/*
        SVG animado que contiene todas las barras.
        - viewBox centrado (-150 -150 300 300) hace que el (0,0) sea el centro del SVG.
        - initial/animate/transition aplican una animación de entrada global al SVG.
      */}
      <motion.svg
        className="absolute w-full h-full"
        viewBox="-150 -150 300 300"
        // Animación de entrada (fade + escala)
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <g>
          {Array.from({ length: NUM_BARS }).map((_, i) => {
            // Para cada barra creamos un MotionValue derivado (wave) que depende del tiempo.
            // useTransform toma la señal `time` y la mapea mediante una función.
            // IMPORTANTE: `useTransform` devuelve un MotionValue; lo usamos directamente
            // como valor reactivo en la propiedad `height` del <motion.rect>.
            const wave = useTransform(
              time,
              (t) => {
                // angle: posición angular de la barra alrededor del círculo (radianes)
                const angle = (i / NUM_BARS) * Math.PI * 2; // ángulo alrededor del círculo
                // phase: desplazamiento temporal de la onda (controla velocidad)
                const phase = (t / 1000) * 2; // controla la velocidad de la onda
                // Calculamos la altura como una sinusoide desplazada y normalizada
                // El término (0.5 + 0.5 * sin(...)) hace que el resultado esté en [0,1]
                // y luego lo escalamos a [BAR_BASE_HEIGHT, BAR_BASE_HEIGHT + BAR_AMP_HEIGHT]
                return BAR_BASE_HEIGHT + BAR_AMP_HEIGHT * (0.5 + 0.5 * Math.sin(angle - phase));
              }
            );

            return (
              <motion.rect
                key={i}
                // Transformación: rotamos la barra según su índice y la trasladamos
                // hacia afuera por `RADIUS`. La rotación coloca la barra a lo largo
                // del radio y la translate la posiciona a la distancia adecuada.
                transform={`rotate(${(i / NUM_BARS) * 360}) translate(${RADIUS}, 0)`}
                x={-BAR_WIDTH / 2}
                // y centra la barra verticalmente respecto a su base
                y={-BAR_BASE_HEIGHT / 2}
                width={BAR_WIDTH}
                // height acepta MotionValue (wave) para animación reactiva
                height={wave}
                rx="2" // Bordes redondeados para suavizar visualmente las barras
                fill="url(#gradient)"
              />
            );
          })}
        </g>

        {/* Gradiente usado como relleno de las barras (verde a esmeralda) */}
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34D399" /> {/* emerald-400 */}
            <stop offset="100%" stopColor="#10B981" /> {/* emerald-500 */}
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Imagen de perfil: queda centrada sobre el SVG
          - whileHover: ligera escala para feedback al pasar el cursor
          - transition: uso de muelle (spring) para una interacción natural
      */}
      <motion.img
        src={src}
        alt={alt}
        className="relative h-56 w-56 rounded-full object-cover shadow-2xl z-10 border-4 border-gray-800"
        whileHover={{ scale: 1.025 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
      />
    </div>
  );
};

export default ProfileImageAnimation;