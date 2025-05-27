import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import demoSoftware from "../../assets/images/demoSoftware.svg";

export default function ScopeLanding() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="space-y-6 md:space-y-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-full md:h-3/12 p-4 flex justify-center items-center"
      >
        <p className="md:w-3/4 text-justify md:text-center">
          Con <span className="font-LeckerliOne">Vaku</span>, puedes gestionar
          de forma fácil y segura el calendario de vacunación de tu hijo.
          Nuestra aplicación te permite llevar un control detallado de cada
          vacuna aplicada, registrar nuevas dosis, y recibir notificaciones
          personalizadas para que nunca olvides una fecha importante.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col-reverse lg:flex-row lg:h-3/5"
      >
        <div>
          <motion.img
          className="p-10 lg:p-0"
            src={demoSoftware}
            alt="Demo Software"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.5 }}
          />
        </div>
        <div className="w-full space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center lg:text-end text-text-h1">
            Al alcance de tu mano
          </h2>
          <p className="lg:text-end text-justify px-4">
            <span className="font-LeckerliOne">Vaku</span> nace como una
            herramienta diseñada para mejorar el acceso, el seguimiento y la
            cobertura de vacunación. Al digitalizar el calendario de
            vacunación, ayuda a las familias a cumplir con los esquemas a
            tiempo. Además, al centralizar la información en un solo lugar,
            reduce la pérdida de datos y fortalece la toma de decisiones tanto
            a nivel individual como institucional.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
