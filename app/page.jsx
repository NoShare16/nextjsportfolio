import Image from 'next/image'

const Home = () => {
  return (

    <section className='relative w-full min-h-screen md:h-screen flex md:block flex-col justify-center bg-black'>
        <Image
            priority
            fill
            quality={100}
            className='hidden md:block pointer-events-none select-none z-0'
            src={"/assets/images/HeroPhone.png"}
            alt='Hero Phone Image'
            style={{objectFit: 'cover', objectPosition: '95%'}}
        />


        <div className='relative z-10 pt-3 md:pt-0 md:top-1/4 lg:top-1/3 max-w-7xl mx-auto'>
            <div className='max-w-2xl px-4 flex flex-col gap-8 md:max-xl:bg-black/60 md:max-xl:rounded-lg'>
                <h1 className='-ml-2 text-5xl md:text-7xl font-semibold text-white'>
                    Alexander Wirschke
                </h1>
                <p className='text-white text-lg max-w-xl'>
                Hallo, ich bin Alex und bin 23 Jahre alt. Ich liebe Programmieren und arbeite gerne mit Javascript, Tailwind CSS, NextJS und Python. Zurzeit bin ich auf der Suche nach spannenden Projekten und Möglichkeiten, bei denen ich meine Fähigkeiten und Leidenschaft für die Programmierung einbringen kann.
                </p>
            </div>
            {/* Download CV Button */}
            <div className='mt-3 flex justify-start ml-3'>
            <a href="/assets/images/LebenslaufAugust2023.pdf" download className='download-cv '>Lebenslauf runterladen</a>
            </div>
        </div>
    </section>
  )
}

export default Home