"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [toggleForm, setToggleForm] = useState(false);
  return (
    <>
        <a href="/" className="logo">Alexander.</a>
                {/* DESKTOP */}
            <nav className='hidden lg:block'>
                <Link href="/" className='navbar-links'>Home</Link>
                <Link href="/" className='navbar-links'>Über mich</Link>
                <Link href="/" className='navbar-links'>Download CV</Link>
                <Link href="/" className='navbar-links'>Projekte</Link>
                <button  className='navbar-links'>Kontakt</button>
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
                            <Link href="/" onClick={() => setToggleDropdown(false)} className='dropdown_link'>Kontakt</Link>
                        </div>
                    )}
                </div>
            </nav>
    </>
  )
}

export default Navbar