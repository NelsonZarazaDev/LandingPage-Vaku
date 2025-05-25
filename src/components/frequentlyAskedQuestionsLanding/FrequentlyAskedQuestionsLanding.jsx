import React, { useState } from "react";
import Lottie from "lottie-react";
import alert from "../../assets/images/alert.json";
import flecha from "../../assets/images/flecha.webp";

import { motion, AnimatePresence } from "framer-motion";

export default function FrequentlyAskedQuestionsLanding() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <motion.h1
        className="text-center text-xl lg:text-4xl font-bold text-text-h1 my-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Preguntas frecuentes
      </motion.h1>

      <div>
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          const variants = {
            hidden: {
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              },
            },
          };

          // Variantes para animar el contenido que aparece y desaparece
          const contentVariants = {
            hidden: { opacity: 0, height: 0, overflow: "hidden" },
            visible: {
              opacity: 1,
              height: "auto",
              overflow: "visible",
              transition: { duration: 0.3, ease: "easeInOut" },
            },
            exit: { opacity: 0, height: 0, overflow: "hidden", transition: { duration: 0.3, ease: "easeInOut" } },
          };

          return (
            <motion.div
              key={index}
              className={`no-marker p-4 box-shadow-card rounded-2xl font-bold mb-2 lg:mb-4 shadow-xl/30 ${
                isOpen ? "open:border-black/10 open:bg-gray-100" : ""
              }`}
              initial="hidden"
              animate="visible"
              variants={variants}
            >
              <summary
                onClick={() => toggleOpen(index)}
                className="text-sm leading-6 font-semibold text-gray-900 select-none flex items-center cursor-pointer justify-between"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") toggleOpen(index);
                }}
              >
                <div className="flex items-center">
                  <div className="w-8 mx-4">
                    <Lottie animationData={alert} />
                  </div>

                  <p className="font-bold">{item.question}</p>
                </div>

                <motion.img
                  src={flecha}
                  alt=""
                  className="w-4"
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </summary>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="mx-4 mt-3 text-sm text-black font-semibold"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={contentVariants}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}

const faqs = [
  {
    question: "¿Puedo registrar a mis hijos?",
    answer:
      "No. Solo el personal autorizado puede registrar nuevos niños en el sistema para mantener la integridad y seguridad de la información.",
  },
  {
    question: "¿La aplicación me dice qué vacunas faltan?",
    answer:
      "Sí. Vaku te muestra el historial de vacunas aplicadas y te notifica las que aún están pendientes, según la edad del niño.",
  },
  {
    question: "¿Recibiré notificaciones cuando se acerque una vacuna?",
    answer:
      "¡Así es! Te enviaremos recordatorios por correo electrónico tanto cuando se acerque una dosis como si hay un retraso.",
  },
  {
    question: "¿Quién puede modificar los datos de los niños?",
    answer:
      "Solo el personal autorizado puede realizar cambios. Si necesitas actualizar algún dato, contacta con tu centro de salud.",
  },
  {
    question: "¿Mis datos están seguros en Vaku?",
    answer:
      "Sí. Utilizamos protocolos de seguridad y cifrado para proteger toda la información personal y médica registrada.",
  },
  {
    question: "¿La app me dice cuándo fue la última vacuna?",
    answer:
      "Exactamente. Puedes consultar el historial completo de vacunas aplicadas, incluyendo la fecha y tipo de cada dosis.",
  },
  {
    question: "¿Qué hago si me atrasé en una vacuna?",
    answer:
      "No te preocupes. Recibirás una notificación y podrás acercarte al centro de salud más cercano para actualizar el esquema de vacunación.",
  },
  {
    question: "¿Puedo usar Vaku desde el celular?",
    answer:
      "Claro. Vaku está optimizada para funcionar desde cualquier dispositivo, ya sea móvil, tablet o computadora.",
  },
];
