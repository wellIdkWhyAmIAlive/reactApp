import React from 'react'

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full p-20  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black leading-5'>
      <h1 className='text-[2.3vw] leading-[2.7vw] tracking-tight'>
        You're the best person that ive met in my life. <br />
        I might get annoying sometimes(i mean most of the times) but still you handle me pretty well everytime hehehe.<br />
        jab bhi koi problem hoti hai ya moral support ki zarurat hoti hai tab tu hamesha help karti hai yr.
        <br /> tu bhale hi kitne bhi kharab mood me ho gaaliya deke bhi sab acche chize acche se samjhati 
        <br /> aur waise mujhe nhi lagta batane ki zarurat hai but meri baate dil pe mt liya kar mai to mazak masti me kuch bhi bol deta hu
        <br /> aur agar kabhi gussa ho jaye to ek baar meri idiotic shakal yaad kar lena aaur fir sochna ki maiiss chutiye se gussa hu (i know its a very useless meaningless and what not approach to solving this problem but im dumb so shut the fuck up)
      </h1>
      <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
        <div className='w-1/2'>
          <h1 className='text-[3vw] font-regular'>
            My creation
          </h1>
          <h3 className='text-[2vw] font-regular leading-none pt-10'>
            ye jo niche chiz hai khelne ke liye
            halat kharab ho gyi hai wo banate banate i'm dead <br />
            aur ye tere bhi dimaag me aa rha hoga ki ye kyu banaya hai faaltu me jyada kuch kaam ka bhi nhi hai, hai na?
            <br /> SHUT UP dont ask me stupid questions chup chap dekh le jo hai wo
          </h3>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl bg-[url("./assets/Rash.jpg")] bg-cover bg-top'></div>
      </div>
    </div>
  )
}

export default About;