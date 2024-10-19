import React from 'react'
import { motion } from 'framer-motion'

function Marquee() {
  return (
    <div data-scroll data-scrool-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className="text-[20vw] leading-none tracking-tighter font-extrabold uppercase mb-7 pt-10 pr-20"
        >
          Happy Birthday
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }} // Animate to -200% for the second element
          transition={{ ease: "linear", repeat: Infinity, duration: 6 }}
          className="text-[20vw] leading-none tracking-tighter font-extrabold uppercase mb-7 pt-10 pr-20"
        >
          Happy Birthday
        </motion.h1>
        </div>
    </div>
  )
}

export default Marquee