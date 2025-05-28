'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // scrolling down
        setShowNavbar(false)
      } else {
        // scrolling up
        setShowNavbar(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-sky-500 text-white p-4 flex items-center justify-between`}
    >
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/dent-thief.png" alt="Dentist Logo" width={48} height={48} />
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className="md:hidden flex flex-col justify-center items-center"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>

     {/* Desktop Menu: links + button in one flex container */}
    <div className="hidden md:flex items-center gap-4 justify-center flex-1 text-center">
      <Link
        className=" relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:-bottom-1"
        href="/"
      >
        Home
      </Link>
      <Link className=" relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:-bottom-1" href="/#about">About</Link>
      <Link className=" relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:-bottom-1" href="/services">Services</Link>
      <Link className=" relative after:content-[''] after:block after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full after:absolute after:left-0 after:-bottom-1" href="/contact">Contact</Link>

      {/* Book Button — 1rem (ml-4) from links */}
      <Link href="/appointment" className="ml-10">
        <button className="bg-white text-sky-700 font-semibold px-4 py-2 rounded hover:bg-gray-100 hover:text-underline transition cursor-pointer">
          Book
        </button>
      </Link>
    </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-sky-500 flex flex-col gap-4 p-4 md:hidden z-50">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link href="/appointment" onClick={() => setMenuOpen(false)}>
          <span className="bg-white text-sky-700 px-4 py-2 rounded font-semibold text-center block">
            Book
          </span>
        </Link>

        </div>
      )}
    </nav>
  )
}
