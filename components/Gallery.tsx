import Image from 'next/image'

export default function Gallery() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Our Clinic & Smiles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div key={img} className="overflow-hidden rounded-xl shadow">
              <Image
                src={`/images/gallery-${img}.jpg`}
                alt={`Gallery image ${img}`}
                width={400}
                height={300}
                className="object-cover w-full h-60 hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
