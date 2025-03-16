'use client'
import Image from "next/image"
import { FaGithub, FaInstagram, FaTiktok, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const SideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024) 
    }
    
    
    checkIfMobile()
    
    
    window.addEventListener('resize', checkIfMobile)
    
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  const socialLinks = [
    { icon: <FaTiktok/>, url: 'https://www.tiktok.com/@chuchipr7'},
    { icon: <FaGithub/>, url: 'https://github.com/ChuchiPr'},
    { icon: <FaInstagram/>, url: 'https://www.instagram.com/chuchi0015/'},
    { icon: <FaLinkedin/>, url: 'https://www.linkedin.com/in/mario-mu%C3%B1oz-928338347/'},
  ]

  return (
    <>
      
      {isMobile && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 bg-blue-700 text-white p-3 rounded-full shadow-xl lg:hidden flex items-center justify-center w-14 h-14"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </motion.button>
      )},
      
      
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-black z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
      </AnimatePresence>

      
      <AnimatePresence>
        {(!isMobile || (isMobile && isSidebarOpen)) && (
          <motion.div 
            initial={isMobile ? { y: 500 } : { x: -300 }}
            animate={{ x: 0, y: 0 }}
            exit={isMobile ? { y: 500 } : { x: -300 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
            className={`fixed lg:relative ${isMobile ? 'h-auto max-h-[75vh] w-full bottom-0 left-0 rounded-t-[30px] shadow-2xl pb-20' : 'h-screen w-3/4 md:w-1/2 lg:w-1/4 top-0 left-0'} bg-neutral-950/80 border-2 border-blue-700 z-40 flex flex-col items-center justify-center ${isMobile ? 'px-6 pt-8 pb-20 overflow-auto' : 'p-4'}`}
          >
            
            {isMobile && (
              <div className="w-16 h-1.5 bg-blue-500 rounded-full mb-6 -mt-2"></div>
            )}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 260 }}
          className="relative"
        >
          <Image 
            src="/Perfil.jpg" 
            alt="Foto de perfil" 
            width={350} 
            height={350} 
            className="w-20 md:w-34 lg:w-45 h-auto rounded-full border-2 border-blue-700 shadow-lg hover:scale-105 transition-transform duration-300 bg-auto lg:h-85 bg-center bg-no-repeat"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-2 md:space-y-3 mt-4 md:mt-6"
        >
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">Mario Muñoz</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">Chuchi<span className="text-blue-700">PG</span></h2>
          <p className="text-base md:text-lg lg:text-xl text-white">
            Estudiante de <span className="text-blue-700 font-semibold">Ingeniería de Sistemas</span>
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 md:gap-6 mt-6 md:mt-8"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl md:text-3xl text-white hover:text-blue-700 transition-colors duration-300"
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-center"
        >
          <p className="text-sm text-white mt-4 md:mt-6">
            FT. Diseñado y Desarrollado por <a href="https://miguelvivar.github.io/" className="text-blue-700" target="_blank">Miguel Vivar</a>
          </p>
          <p className="text-sm text-white mt-4 md:mt-6">
            &copy; {new Date().getFullYear()} ChuchiPG. Todos los Derechos Reservados.
          </p>
        </motion.footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SideBar