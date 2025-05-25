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
      className="w-full h-[14%] lg:h-1/4 p-4 flex justify-around grayscale bg-white"
    >
      {[lasVacunas, logoSalud, objetivoSostenible].map((logo, index) => (
        <motion.img
          key={index}
          src={logo}
          alt={`logo-${index}`}
          className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 * index, duration: 0.5 }}
        />
      ))}
    </motion.div>
  );
}
