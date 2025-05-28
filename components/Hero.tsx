'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative text-white mt-20 py-34 px-4 overflow-hidden">
      {/* Full-Width Background Image */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src="/images/bg-hero.jpg"
          alt="Dental background"
          fill
          className="object-cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-sky-700/60" />
      </div>

      {/* Constrained content inside */}
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 z-10" data-aos="fade-down" data-aos-delay="100">
        {/* Left Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4">SmileBright Dental</h1>
          <p className="text-lg mb-6">
            Trusted dental care for the whole family — gentle, affordable, and always with a smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/appointment"
              className="bg-white text-sky-700 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition hover:bg-sky-100"
            >
              Book an Appointment
            </a>
            <a
              href="#about"
              className="border border-white px-6 py-3 rounded hover:bg-white hover:text-sky-700 transition"
              onClick={(e) => {
                e.preventDefault()
                const el = document.getElementById('about')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/images/dentist.jpg"
            alt="Dentist smiling"
            width={550}
            height={500}
            className="rounded-xl shadow-lg object-contain"
          />
        </div>
      </div>
    </section>
  )
}
