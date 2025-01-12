import { RiReactjsLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { FaAws } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({

  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
import {
    SiPython,
    SiDjango,
    SiPostman,
    SiPostgresql,
    SiMysql,
    SiNumpy,
    SiPandas,
    SiMongodb
  } from "react-icons/si";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24" id="Technologies">
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial = {{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        
        className="flex flex-wrap items items-center justify-center gap-4">
         <motion.div 
         variants={iconVariants(2.5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <SiPython className="text-7xl text-blue-500" />
         </motion.div>
         <motion.div 
         variants={iconVariants(3)}
         initial="initial"
         animate="animate"
          className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <SiDjango className="text-7xl text-green-500" />
         </motion.div>
         {/* <div className="rounded-2xl boredre-4 border-neutral-800 p-4">
         <img src="https://fastapi.tiangolo.com/img/logo.png" alt="FastAPI" className="w-32 h-auto" />
         </div> */}
         <motion.div 
        
         variants={iconVariants(4)}
         initial="initial"
         animate="animate"
         className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <SiNumpy className="text-7xl text-indigo-400" />
         </motion.div>
         <motion.div 
         variants={iconVariants(5)}
         initial="initial"
         animate="animate"
          
          className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <SiPandas className="text-7xl text-white" />
         </motion.div>
          <motion.div 
         variants={iconVariants(6)}
         initial="initial"
         animate="animate"
          className="rounded-2xl boredre-4 border-neutral-800 p-1">
          <SiPostman className="text-7xl text-orange-600" />
          </motion.div> 
         <motion.div 
         variants={iconVariants(7)}
         initial="initial"
         animate="animate"
         
         className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <SiMysql className="text-7xl text-blue-400" />
         </motion.div>
         <motion.div 
         variants={iconVariants(7.5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <SiPostgresql className="text-7xl text-blue-600" /> 
         </motion.div>
         <motion.div 
         variants={iconVariants(8)}
         initial="initial"
         animate="animate"
         
         className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <SiMongodb className="text-7xl text-blue-600" /> 
         </motion.div>
         <motion.div 
         variants={iconVariants(8.5)}
         initial="initial"
         animate="animate"
          className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <FaAws className="text-7xl text-amber-500" />
         </motion.div>

         <motion.div 
         variants={iconVariants(9)}
         initial="initial"
         animate="animate"
         className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <RiReactjsLine className="text-7xl text-cyan-400" />
         </motion.div>
         <motion.div 
         variants={iconVariants(9.5)}
         initial="initial"
         animate="animate"
         className="rounded-2xl boredre-4 border-neutral-800 p-1">
         <RiGithubLine className="text-7xl text-orange-400" />
         </motion.div>

        </motion.div>
    </div>
  )
}

export default Technologies