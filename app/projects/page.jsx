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


        <div className='relative z-10 pt-3 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto flex justify-between'>
            <div className='max-w-2xl px-4 flex flex-col gap-8 md:max-xl:bg-black/60 md:max-xl:rounded-lg'>
                <h1 className='-ml-2 text-5xl md:text-7xl font-semibold text-white'>
                    Meine Projekte<span className='md:text-purple-500 md:text-7xl'>.</span>
                </h1>
                <p className='text-white text-lg max-w-xl'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore beatae sequi modi nisi suscipit amet quibusdam ullam. Dolorem non est atque veniam rerum voluptatum praesentium, quasi consequuntur distinctio repudiandae tempore.
                </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
            <div>
                <Image src="/assets/images/hoodedHacker.jpg" alt="Description for image 1" width={500} height={500} />
            </div>
            <div>
                <Image src="/assets/images/hoodedHacker.jpg" alt="Description for image 2" width={500} height={500} />
            </div>
            <div>
                <Image src="/assets/images/hoodedHacker.jpg" alt="Description for image 3" width={500} height={500} />
            </div>
            <div>
                <Image src="/assets/images/hoodedHacker.jpg" alt="Description for image 4" width={500} height={500} />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects