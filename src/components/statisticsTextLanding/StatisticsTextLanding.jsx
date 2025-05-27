import React from "react";
import Graph from "../graphLanding/GraphLanding";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StatisticsTextLanding() {
  const [ref, inView] = useInView({
    triggerOnce: true,  // Solo se anima la primera vez que entra en vista
    threshold: 0.3,     // Se activa cuando el 30% está visible
  });

  // Variantes para la animación
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const graphVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 0.3 } },
  };

  return (
    <div
      ref={ref}
      className="lg:flex w-full h-full lg:justify-center lg:items-center space-y-6 lg:space-y-0 lg:space-x-10 px-4"
    >
      <motion.div
        className="lg:w-2/4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={textVariants}
      >
        <h1 className="text-text-h1 text-xl md:text-3xl font-bold my-2 lg:pt-4">
          ¿Y si la próxima dosis no se olvidara jamás?
        </h1>
        <p className="text-base md:text-lg leading-relaxed">
          En la última década, la cobertura de vacunación ha disminuido en
          Latinoamérica y Colombia, debido a barreras de acceso,
          desinformación y el impacto de la pandemia.
        </p>
      </motion.div>

      <motion.div
        className="lg:w-2/4 h-64 md:h-72 lg:pt-4"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={graphVariants}
      >
        <Graph />
      </motion.div>
    </div>
  );
}
