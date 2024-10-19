import React, { useEffect, useRef, useState} from 'react';

function Play() {

  const [rotate, setRotate] = useState(0);
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle-180);
    })
  })

  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.5" className='w-full relative h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")] bg-cover bg-center'>
          <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='flex items-center justify-center w-[15vw] rounded-full h-[15vw] bg-zinc-100'>
              <div className='blackGola relative w-2/3 rounded-full h-2/3 bg-zinc-900'>
                <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                 <div className='w-10 rounded-full h-10 bg-zinc-100'></div>
                </div>
              </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] rounded-full h-[15vw] bg-zinc-100'>
              <div className='blackGola relative flex items-center justify-center w-2/3 rounded-full h-2/3 bg-zinc-900'>
              <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full h-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                 <div className='w-10 rounded-full h-10 bg-zinc-100'></div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Play