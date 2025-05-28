'use client'
import { useEffect } from "react"
import Image from "next/image"
import 'glightbox/dist/css/glightbox.min.css'

export default function Gallery() {
  useEffect(() => {
    import('glightbox').then(({ default: GLightbox }) => {
      const lightbox = GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
      })
      return () => lightbox.destroy()
    })
  }, [])

  return (
    <section id="gallery" className="py-16 px-4 bg-sky-500/50">
      <div className="max-w-6xl mx-auto" data-aos='fade-down' data-aos-delay='100'>
        <h2 className="text-3xl font-semibold text-center mb-10">Our Clinic & Smiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <a
              key={img}
              href={`/images/gallery/gallery-${img}.jpg`}
              className="glightbox relative block w-full aspect-[4/3] overflow-hidden rounded-xl shadow-lg shadow-sky-500/50 hover:shadow-white hover:shadow-2xl transition duration-300"
              data-gallery="clinic-gallery"
            >
              <Image
                src={`/images/gallery/gallery-${img}.jpg`}
                alt={`Gallery image ${img}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
