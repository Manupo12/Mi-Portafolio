// src/components/AnimateOnScroll.jsx
// Componente: AnimateOnScroll
// Descripción (español): Envuelve contenido para animarlo cuando entra en el viewport
// usando Framer Motion. No modifica el contenido, solo añade una animación de
// aparición desde abajo con desvanecimiento.
// Props:
//   - children: contenido React/JSX que será animado cuando entre en pantalla.
// Notas:
//   - Este componente distribuye la responsabilidad de estilo al contenido
//     hijo; solo controla la animación (posición y opacidad).
//   - Framer Motion debe estar instalado en el proyecto para que funcione.
import { motion } from "framer-motion";

export default function AnimateOnScroll({ children }) {
  // Se devuelve un contenedor animado (<motion.div>) con las siguientes claves:
  // - initial: estado inicial antes de la animación (invisible y desplazado hacia abajo)
  // - whileInView: estado objetivo cuando el elemento entra en el viewport
  // - viewport: configuración de cuándo y con qué frecuencia se activa la animación
  // - transition: duración y easing de la animación
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Inicia invisible y 50px más abajo
      whileInView={{ opacity: 1, y: 0 }} // Anima a visible y a su posición original
      viewport={{ once: true, amount: 0.2 }} // Dispara la animación una sola vez al alcanzarse 20% de visibilidad
      transition={{ duration: 0.7, ease: "easeOut" }} // Duración y tipo de interpolación
    >
      {children}
    </motion.div>
  );
}