import React from "react";
import functionalities from "../../assets/images/functionalities.webp";
import Lottie from "lottie-react";
import Bell from "../../assets/images/Bell.json";
import location from "../../assets/images/location.json";
import edit from "../../assets/images/edit.json";
import report from "../../assets/images/report.json";
import star from "../../assets/images/star.json";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineItems = [
  { label: "Recordatorios de vacunas", icon: Bell },
  { label: "Localización de centros de vacunación", icon: location },
  { label: "Gestión de vacunación para los niños", icon: edit },
  { label: "Historial de vacunas", icon: report },
  { label: "Nuevas dosis", icon: star, last: true },
];

export default function FunctionalitiesLanding() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animación de la línea que crece de arriba a abajo
  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: "100%", transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animación de cada item: fade + slide desde la derecha
  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="h-full">
      <div className="bg-funcionality rounded-2xl p-2 px-5 lg:px-10 flex justify-end items-center h-auto relative overflow-hidden">
        <div className="w-full hidden md:block">
          <img src={functionalities} alt="funcionalidades" />
        </div>

        <div className="w-full flex flex-col items-end relative">
          <motion.div
            className="w-full text-center lg:text-end text-xl lg:text-3xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <p>
              Todo lo que necesitas,
              <br />
              en un solo lugar
            </p>
          </motion.div>

          <div ref={ref} className="relative flex flex-col items-end w-full">
            {/* Línea blanca que crece */}
            <motion.div
              className="absolute w-1 bg-white top-0 left-[calc(100%-1.3rem)] lg:left-[calc(100%-1.5rem)] z-0"
              initial="hidden"
              animate={controls}
              variants={lineVariants}
            ></motion.div>

            {/* Items animados */}
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-3 lg:mb-9 last:mb-0"
                custom={index}
                initial="hidden"
                animate={controls}
                variants={itemVariants}
              >
                <p className="text-white text-end mr-2 lg:mr-6 font-semibold">
                  {item.label}
                </p>

                <div
                  className={`w-10 h-10 md:w-10 md:h-10 rounded-full z-10 flex items-center justify-center ${
                    item.last
                      ? "bg-white"
                      : "bg-white border-4 border-white"
                  }`}
                >
                  <Lottie animationData={item.icon} loop className="w-full h-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
