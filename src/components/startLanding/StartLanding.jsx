import doctorLanding from "../../assets/images/doctorLanding.webp";
import alerta from "../../assets/images/notify.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function StartLanding() {
  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true });

  return (
    <>
      <div className="flex flex-col items-center lg:px-25">
        {/* Imagen del doctor con animación */}
        <motion.div
          ref={imgRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative my-4 w-full h-3/5 overflow-y-hidden flex flex-col items-center"
        >
          <img
            className="md:h-[30rem] lg:h-[30rem] relative top-15 md:top-20 lg:top-20 drop-shadow-[5px_5px_21px_rgba(21,154,156,0.45)] md:drop-shadow-[8px_-7px_72px_rgba(21,154,156,0.45)]"
            src={doctorLanding}
            alt="doctorLanding"
          />

          {/* Notificación superior izquierda */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imgInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="hidden md:w-52 lg:w-90 lg:flex absolute top-20 left-5 lg:top-40 lg:left-20 bg-notify text-black px-4 py-2 rounded-lg shadow-lg"
          >
            <div className="w-8 h-9 rounded-md mr-2 p-0.5 flex items-center justify-center bg-colorbluedark">
              <Lottie animationData={alerta} />
            </div>
            <div>
              <p className="font-semibold">No olvides tu vacuna</p>
              <p>Hoy es la aplicación de tu vacuna!! 🫶🏾</p>
            </div>
          </motion.div>

          {/* Notificación inferior derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={imgInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="hidden w-90 md:flex absolute bottom-15 right-24 lg:bottom-15 lg:right-24 bg-notify text-black px-4 py-2 rounded-lg shadow-lg"
          >
            <div className="w-8 h-9 rounded-md mr-2 p-0.5 flex items-center justify-center bg-colorbluedark">
              <Lottie animationData={alerta} />
            </div>
            <div>
              <p className="font-semibold">No olvides tu vacuna</p>
              <p>Hoy es la aplicación de tu vacuna!! 🫶🏾</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Texto principal animado */}
        <motion.div
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-5 lg:px-30 text-center md:mt-10 space-y-8"
        >
          <h1 className="text-text-h1 text-4xl font-bold">
            Más vacunas, menos preocupaciones
          </h1>
          <p>
            Vacunarse es un acto de amor y responsabilidad. Es una manera
            sencilla, pero poderosa, de proteger a quienes más queremos:
            nuestros hijos, nuestros abuelos, nuestras amistades y a toda la
            comunidad. Las vacunas salvan vidas. Nos cuidan de enfermedades que
            pueden parecer del pasado, pero que siguen al acecho si dejamos de
            prevenir.
          </p>
        </motion.div>
      </div>
    </>
  );
}
