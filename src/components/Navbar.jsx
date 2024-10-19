import React from 'react'

function Navbar() {
  return (
    <div className='fized z-[999] w-full px-20 pt-10 flex justify-between items-center pb-none'>
       <div className="logo">
        <h3 className='font-Poppins text-[1.6vw]'>
            Rashii
        </h3>
       </div>
       {/* <div className='links flex gap-10'>
            {["Services", "Our Work", "About", "Contact"].map((item,index) => (
                <a key={index} className={`text-lg capitalize font-light ${index === 3 && "ml-32"}`}>{item}</a>
            ))}
       </div> */}
    </div>
    
  )
}

export default Navbar