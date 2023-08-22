import React from 'react'

import Image from 'next/image'

const Projects = () => {
  return (
    <section className='relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center bg-black'>
        <Image
            priority
            fill
            quality={100}
            className='hidden md:block pointer-events-none select-none z-0'
            src={"/assets/images/blueNeonBg.jpg"}
            alt='Hero Phone Image'
            style={{objectFit: 'cover', objectPosition: '95%'}}
        />


        <div className='relative z-10 pt-3 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto flex flex-col lg:flex-row'>
            <div className='max-w-2xl px-4 flex flex-col gap-8 md:max-xl:bg-black/60 md:max-xl:rounded-lg'>
                <h1 className='-ml-2 text-5xl md:text-7xl font-semibold text-white'>
                    Meine Projekte<span className='md:text-purple-500 md:text-7xl'>.</span>
                </h1>
                <p className='text-white text-base max-w-xl md:text-xl'>
                Seit Beginn meiner Programmier-Reise habe ich viel gelernt und eigene Projekte entwickelt. Ich arbeite selbstständig, liebe neue Herausforderungen und wachse mit jedem Code, den ich schreibe. Hier sind einige meiner Werke.
                </p>


            </div>

            <div className="grid grid-cols-2 gap-4 m-4">
            <div>
                <a href="/">
                    <Image src="/assets/images/HandLens.png" alt="Description for image 1" width={500} height={500} className='rounded-xl'/>
                </a>
            </div>
            <div>
                <a href="/">
                    <Image src="/assets/images/AiMakingMoney.jpg" alt="Description for image 1" width={500} height={500} className='rounded-xl'/>
                </a>
            </div>
            <div>
                <a href="/">
                    <Image src="/assets/images/PersonTalkingAi.jpg" alt="Description for image 1" width={500} height={500} className='rounded-xl'/>
                </a>
            </div>
            <div>
                <a href="/">
                    <Image src="/assets/images/TeachingAi.jpg" alt="Description for image 1" width={500} height={500} className='rounded-xl'/>
                </a>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects