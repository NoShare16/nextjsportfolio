import React from 'react'
import Image from 'next/image'


const About = () => {
  return (

    <section className='relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center bg-black'>
        <Image
            priority
            fill
            quality={100}
            className='hidden md:block pointer-events-none select-none z-0'
            src={"/assets/images/hoodedHacker.jpg"}
            alt='Hero Phone Image'
            style={{objectFit: 'cover', objectPosition: '95%'}}
        />


<div className='relative z-10 pt-3 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto'>
    <div className='max-w-2xl p-10  flex flex-col gap-8 md:bg-black/60 md:rounded-lg'>
        <h1 className='-ml-2 text-5xl md:text-7xl font-semibold text-white'>
            Über Mich!
        </h1>
        <p className='text-white text-lg md:text-xl max-w-xl md:leading-relaxed'>
            Als jemand, der in einer digitalisierten Welt aufgewachsen ist, war ich schon immer fasziniert von der Technologie und den endlosen Möglichkeiten, die sie bietet. Deshalb habe ich mich entschieden, meine Leidenschaft für das Programmieren zu einer beruflichen Fähigkeit zu machen. <br /> <br />
            In meiner Freizeit gehe ich zum Fitness, um gesund und fit zu bleiben, und ich spiele auch gerne ab und zu Videospiele, um mich zu entspannen. <br /> <br />
            Ich bin begeistert von der Herausforderung, Probleme mit dem Codieren zu lösen und elegante, effiziente Lösungen zu erstellen. Durch meine Leidenschaft und meine Fähigkeiten in der Programmierung bin ich überzeugt, dass ich einen wertvollen Beitrag zu jedem Projekt leisten kann.
        </p>
    </div>          
</div>

    </section>
  )
}

export default About