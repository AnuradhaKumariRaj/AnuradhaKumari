import profilepic from "../assets/profilepic.jpg";
import { HERO_CONTENT } from "../constants"
import { motion } from "framer-motion";
import pdf from '../pdf/resume.pdf';
import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4
     lg:mb-35" id = "home">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:item-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-3xl font-thin tracking-tight lg:mt-16 lg:tex-8xl"> 
                    Anuradha Kumari 
                    </motion.h1>
                    
                    <motion.span 
                    variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-yellow-300 via-slate-500 to-orange-500
                     bg-clip-text text-3xl tracking-tight text-transparent"> 
                        Full Stack Developer
                         </motion.span>
                         <motion.p 
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                         className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                            <div className="flex justify-center mt-4">
                                <a href={pdf} download="resume.pdf" className="inline-block border border-yellow-500 text-yellow-500 font-semibold py-2 px-4 rounded hover:bg-yellow-500 hover:text-white transition"
>
                                Download Resume
                                </a>
                            </div>
                        </motion.p>
                        
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                <motion.img 
                initial={{ x:100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="rounded-2xl" src={profilepic} alt="AnuradhaKumari" />
                </div>
            </div>
        </div>
     </div>
     
  )
}

export default Hero