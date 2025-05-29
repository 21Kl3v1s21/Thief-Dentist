import React from 'react'
import Image from 'next/image'

export default function Dentist() {
  return (
    <section
      id="dentist"
      className="min-h-screen flex items-center justify-center bg-sky-50 px-4 py-16"
    >
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white p-8 rounded-xl shadow-xl">
        {/* Left Column: Photo */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/denist-pfp.jpg"
            alt="Dr. Jane Smith"
            width={220}
            height={220}
            className="rounded-full border-4 border-white shadow-lg mb-6 object-cover"
          />
          <h2 className="text-3xl font-bold text-sky-700 mb-2">Dr. Jane Smith, DDS</h2>
          <p className="text-gray-700 text-center md:text-left">
            Board-certified dentist with over 15 years of experience in family and cosmetic dentistry. Known for
            providing gentle, personalized care to patients of all ages.
          </p>
        </div>

        {/* Right Column: Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-sky-600 mb-2">Education & Credentials</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Doctor of Dental Surgery (DDS), University of Dental Medicine</li>
              <li>Member, American Dental Association</li>
              <li>Certified in Invisalign and Teeth Whitening</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-sky-600 mb-2">Philosophy</h3>
            <p className="text-gray-700">
              Dr. Smith believes in building long-term relationships with her patients and helping them achieve
              healthy, beautiful smiles in a relaxed, supportive environment.
            </p>
          </div>

          <div className="bg-sky-100 rounded-lg p-4">
            <h3 className="text-xl font-semibold text-sky-600 mb-2">Contact</h3>
            <p className="text-gray-700">
              To schedule an appointment, call{' '}
              <a href="tel:+15551234567" className="text-sky-600 hover:underline">
                (555) 123-4567
              </a>{' '}
              or email{' '}
              <a href="mailto:info@dentistwebsite.com" className="text-sky-600 hover:underline">
                info@dentistwebsite.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
