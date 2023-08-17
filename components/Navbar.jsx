"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);
  return (
    <>
        <section className='header'>
        <a href="/" className="logo">Alexander.</a>
                {/* DESKTOP */}
            <nav className='hidden lg:block'>
                <Link href="/" className='navbar-links'>Home</Link>
                <Link href="/" className='navbar-links'>Über mich</Link>
                <a href="/assets/images/LebenslaufAugust2023.pdf" download className='navbar-links'>Download CV</a>
                <Link href="/" className='navbar-links'>Projekte</Link>
                <button  className='navbar-links' onClick={() => setToggleForm((prev) => !prev)}>Kontakt</button>
            </nav>

                {/* MOBILE */}
            <nav className='lg:hidden flex relative'>
                <div className='flex'>
                    <Image
                        src="/assets/images/menu.png"
                        width={30}
                        height={30}
                        alt='menu'
                        className='bg-white rounded'
                        onClick={() => setToggleDropdown((prev) => !prev)}
                    />

                    {toggleDropdown && (
                        <div className='dropdown'>
                            <Link href="/" onClick={() => setToggleDropdown(false)} className='dropdown_link'>Über Mich</Link>
                            <Link href="/" onClick={() => setToggleDropdown(false)} className='dropdown_link'>Lebenslauf</Link>
                            <Link href="/" onClick={() => setToggleDropdown(false)} className='dropdown_link'>Projects</Link>
                            <button onClick={() => {setToggleDropdown(false); setToggleForm(true);}} className='dropdown_link'>Kontakt</button>
                        </div>
                    )}
                </div>
            </nav>
        </section>

        {/* FORM */}

        {toggleForm && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50'>

                    {/* DESKTOP */}
                    <div className="bg-transparent rounded-lg shadow-md relative hidden lg:block w-4/6 h-4/6">

                        <div className='flex justify-end items-start'>
                            <Image 
                                src="/assets/images/x.png"
                                width={30}
                                height={30}
                                alt='close icon'
                                onClick={() => setToggleForm(false)}
                                className='cursor-pointer bg-white/90 rounded'
                            />
                        </div>
                        
                        <div className='flex justify-between px-5 py-3 h-full w-full'>
                            {/* Nachricht Block */}
                            <div className='bg-gray-900 text-whitesmoke w-3/6 rounded-l-lg'>
                                <div className='flex justify-center py-6'>
                                    <h2 className='font-semibold text-3xl'>Nachricht</h2>
                                </div>

                                <form action="https://formsubmit.co/alex.wirschke18@gmail.com" method='POST'>
                                    <div className='input-div'>
                                        <input type="text" placeholder='Name' name='Name' required className='input-all'/>
                                    </div>

                                    <div className='input-div'>
                                        <input type="email" placeholder='Email' name='Email' required className='input-all'/>
                                    </div>

                                    <div className='input-div'>
                                        <input type="text" placeholder='Betreff' name='Betreff' required className='input-all'/>
                                    </div>

                                    <div className='input-div'>
                                        <textarea placeholder='Nachricht' name="Nachricht" id="" cols="30" rows="10" required className='input-all'></textarea>
                                    </div>

                                    <div className='flex justify-center py-6'>
                                    <button type="submit" className="send-button">SENDEN</button>
                                    </div>
                                </form>
                            </div>

                            {/* Kontakt Block */}
                            <div className='bg-zinc-900 text-whitesmoke w-3/6 rounded-r-lg flex flex-col h-full'>
                                <div className='flex justify-center py-6'>
                                    <h2 className='font-semibold text-3xl'>Kontakt Info</h2>
                                </div>

                                <div className='w-full flex flex-col'>
                                    <div className='flex justify-start text-2xl mt-32 px-6'>
                                        <Image 
                                            src="/assets/logos/bxl-gmail.svg"
                                            width={30}
                                            height={30}
                                            alt='mail icon'
                                            className='bg-white rounded-lg'
                                        />
                                        <Link href="mailto:alex.wirschke18@gmail.com" className='px-3'>alex.wirschke18@gmail.com</Link>
                                    </div>

                                    <div className='flex justify-start text-2xl mt-32 px-6'>
                                        <Image 
                                            src="/assets/logos/bxs-phone.svg"
                                            width={30}
                                            height={30}
                                            alt='phone icon'
                                            className='bg-white rounded-lg'
                                        />
                                        <Link href="tel:+4917693502946" className='px-3'>+49 176 93502946</Link>
                                    </div>

                                    <div className='flex justify-start text-2xl mt-32 px-6'>
                                        <Image 
                                            src="/assets/logos/bxl-linkedin.svg"
                                            width={30}
                                            height={30}
                                            alt='linked in icon'
                                            className='bg-white rounded-lg'
                                        />
                                        <Link href="https://www.linkedin.com/in/alex-wirschke-0551b8250/" target="_blank" rel="noopener noreferrer" className='px-3'>Linked In</Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>



                    {/* MOBILE */}
                    <div className='lg:hidden bg-transparent p-8 rounded-lg shadow-md relative w-full h-full mt-16'>

                        <div className='flex justify-end items-start'>
                            <Image 
                                src="/assets/images/x.png"
                                width={30}
                                height={30}
                                alt='close icon'
                                onClick={() => setToggleForm(false)}
                                className='cursor-pointer bg-white rounded'
                            />
                        </div>

                        <div className='bg-gray-900 text-whitesmoke w-full rounded-lg'>
                                <div className='flex justify-center py-6'>
                                    <h2 className='font-semibold text-xl'>Nachricht</h2>
                                </div>

                                <form action="https://formsubmit.co/alex.wirschke18@gmail.com" method='POST'>
                                    <div className='input-div'>
                                        <input type="text" placeholder='Name' name='Name' required className='input-all-mobile'/>
                                    </div>

                                    <div className='input-div'>
                                        <input type="email" placeholder='Email' name='Email' required className='input-all-mobile'/>
                                    </div>

                                    <div className='input-div'>
                                        <input type="text" placeholder='Betreff' name='Betreff' required className='input-all-mobile'/>
                                    </div>

                                    <div className='input-div'>
                                        <textarea placeholder='Nachricht' name="Nachricht" id="" cols="30" rows="5" required className='input-all-mobile'></textarea>
                                    </div>

                                    <div className='flex justify-center py-6'>
                                    <button type="submit" className="send-button">SENDEN</button>
                                    </div>
                                </form>

                                <div className='flex justify-around pb-6'>
                                    <div>
                                        <Link href="mailto:alex.wirschke18@gmail.com">
                                            <Image 
                                                src="/assets/logos/bxl-gmail.svg"
                                                width={30}
                                                height={30}
                                                alt='mail icon'
                                                className='bg-white rounded-lg'
                                            />                                        
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="tel:+4917693502946">
                                            <Image 
                                                src="/assets/logos/bxs-phone.svg"
                                                width={30}
                                                height={30}
                                                alt='phone icon'
                                                className='bg-white rounded-lg'
                                            />                                       
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="https://www.linkedin.com/in/alex-wirschke-0551b8250/" target="_blank" rel="noopener noreferrer">
                                            <Image 
                                                src="/assets/logos/bxl-linkedin.svg"
                                                width={30}
                                                height={30}
                                                alt='linked in icon'
                                                className='bg-white rounded-lg'
                                            />                                        
                                        </Link>
                                    </div>
                                </div>
                            </div>

                    </div>
                </div>
                )}
    </>
  )
}

export default Navbar