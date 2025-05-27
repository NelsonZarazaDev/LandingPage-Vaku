import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import lasVacunas from "../../assets/images/lasVacunas.webp";
import logoSalud from "../../assets/images/logoSalud.webp";
import objetivoSostenible from "../../assets/images/objetivoSostenible.webp";

export default function BarLogosLanding() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="w-full flex items-center justify-center gap-6 grayscale bg-white my-8"
    >
      {[lasVacunas, logoSalud, objetivoSostenible].map((logo, index) => (
        <motion.img
          key={index}
          src={logo}
          alt={`logo-${index}`}
          className="h-auto max-w-1/5 lg:max-w-[12%] object-contain transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 * index, duration: 0.5 }}
        />
      ))}
    </motion.div>
  );
}
