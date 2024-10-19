import { motion } from "framer-motion";
import React from 'react';

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-0.3' className='w-full h-screen bg-zinc-900 pt-0'>
        <div className="textstructure mt-16 px-20">
          {["Happiest", "Birthday", "Nocturnal!"].map((item, index)=>{
            return (
            <div className='masker'>
              <div className="w-fit flex items-center">
                {index===1 &&(<motion.div initial={{width: 0}} animate={{width: "15vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1, delay: 0.5}} className='pic w-[15vw] h-[7.2vw] bg-green-500 mr-1 rounded-md'></motion.div>)}
                <h1 className={`uppercase text-[11vw] font-extrabold leading-[8.2vw] tracking-tighter ${item === "Nocturnal!" ? "text-[#fc1e1e]" : ""}`}>
                  {item}
                </h1>
              </div>
            </div>
            );
          })}
        </div>
        <div className="textstructure mt-5 px-20">
        <div className='masker'>
                <h1 className=' text-[2vw] font-regular leading-none tracking-tighter'>Thanks for being my<br /> <span className='text-[#15ff00]'>greatest</span> and <span className='text-[#00ffbb]'>bestest</span> friend, idiot!</h1>
            </div>
        </div>
    </div>
  )
}

export default LandingPage