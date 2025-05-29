import React from "react"
import Image from "next/image"

const Office: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-sky-50 px-4 py-16">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-xl p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Image and Heading */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/office.jpg"
            alt="Dental Office"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-lg mb-6 object-cover"
          />
          <h1 className="text-3xl font-bold text-sky-700 mb-2">About Our Dental Office</h1>
          <p className="text-gray-700 text-center md:text-left">
            Proudly serving our community since 1995 with compassionate and high-quality care.
          </p>
        </div>

        {/* Right: Content Sections */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-sky-600 mb-2">Our History</h2>
            <p className="text-gray-700 mb-2">
              Established in 1995 by Dr. Jane Smith, our office began with a single-chair setup and a mission to provide
              compassionate dental care. Over the years, we’ve grown into a state-of-the-art facility equipped with the
              latest dental technologies.
            </p>
            <p className="text-gray-700">
              We’re proud to serve generations of families and value the lasting relationships we’ve built with our
              patients.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-sky-600 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to provide gentle, personalized dental care in a comfortable, welcoming setting. We help
              every patient achieve and maintain optimal oral health through education, prevention, and expert care.
            </p>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Office
