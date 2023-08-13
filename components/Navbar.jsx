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
                <Link href="/" className='navbar-links'>Download CV</Link>
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

        {toggleForm && (
                <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center z-50'>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <div className='flex justify-end items-start mb-6button'>
                            <Image 
                                src="/assets/images/x.png"
                                width={30}
                                height={30}
                                alt='close icon'
                                onClick={() => setToggleForm(false)}
                                className='cursor-pointer'
                            />
                        </div>
                        
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum excepturi laudantium delectus quia facilis, reiciendis ipsum voluptatibus iusto sint alias, debitis aperiam odit blanditiis libero animi, non asperiores obcaecati maiores!</p>

                    </div>
                </div>
                )}
    </>
  )
}

export default Navbar