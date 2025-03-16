'use client'
import { motion } from "framer-motion"

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  }

  return (
    <motion.main 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex-1 p-3 md:p-6 overflow-hidden"
    >
      <section className="max-w-4xl mx-auto bg-neutral-950/80 rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border-2 border-blue-700">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-blue-800 mb-4 md:mb-6"
        >
          Sobre mí
        </motion.h2>
        <div className="space-y-4 md:space-y-6 h-[calc(100%-4rem)] overflow-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <motion.div
            custom={0}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-base md:text-lg text-gray-300 leading-relaxed "
            >
              ¡Hola! Soy Mario Muñoz, pero me pueden decir <motion.span 
                className="text-red-700"
                initial={{ color: "#0000ff" }}
                animate={{ color: ["#0000ff", "#0000ff", "#0000ff"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >Chuchi</motion.span>. Tengo 21 años y soy un estudiante universitario de Perú con una pasión por la tecnología y el aprendizaje continuo.
            </motion.p>
          </motion.div>
z
          <motion.div
            custom={1}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-xl md:text-2xl font-semibold text-blue-700 mb-2 md:mb-3"
            >
              Educación
            </motion.h3>
            <motion.div 
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-neutral-950 p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-blue-700"
            >
              <h4 className="font-medium text-lg md:text-xl mb-1 text-white">Universidad Nacional San Luis Gonzaga</h4>
              <p className="text-gray-300 text-sm md:text-base">Ingeniería de Sistemas</p>
              <p className="text-gray-300 text-sm md:text-base">2023 - Presente</p>
            </motion.div>
          </motion.div>

          <motion.div
            custom={2}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-xl md:text-2xl font-semibold text-blue-700 mb-2 md:mb-3"
            >
              Hobbies e Intereses
            </motion.h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-neutral-950/80 p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-blue-700"
              >
                <h4 className="font-medium text-base md:text-lg mb-2 text-blue-600">Tiempos libres</h4>
                <p className="text-gray-300 text-sm md:text-base">
                  Disfruto mucho jugar Videojuegos en mis tiempos libres con mis amigos. Me gusta practicar muay thay de vez en cuando y conectar con la naturaleza
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-neutral-950/80 p-3 md:p-4 rounded-lg md:rounded-xl border-2 border-blue-700"
              >
                <h4 className="font-medium text-base md:text-lg mb-2 text-blue-600">Programación</h4>
                <p className="text-gray-300 text-sm md:text-base">
                  La programación es uno de mis intereses más grandes en esta vida ya que busco dominar los mayores languages posibles.
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            custom={3}
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3 
              whileHover={{ x: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="text-xl md:text-2xl font-semibold text-blue-700 mb-2 md:mb-3"
            >
              Idiomas
            </motion.h3>
            <div className="flex flex-wrap gap-3 md:gap-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 px-4 py-2 rounded-lg md:rounded-xl border-2 border-blue-700 bg-neutral-950/80"
              >
                <span className="font-medium text-sm md:text-base text-white">Español</span>
                <span className="text-gray-300 ml-2 text-sm md:text-base">Nativo</span>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-gray-50 px-4 py-2 rounded-lg md:rounded-xl border-2 border-blue-700 bg-neutral-950/80"
              >
                <span className="font-medium text-sm md:text-base text-white">Inglés</span>
                <span className="text-gray-300 ml-2 text-sm md:text-base">Básico</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
}