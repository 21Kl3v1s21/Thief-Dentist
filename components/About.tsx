import Image from 'next/image';
import Link from 'next/link';

export default function About() {
    return (
        <section id="about" className="w-full mx-auto px-4 bg-sky-300 py-10" >
            <div className="flex flex-col md:flex-row gap-8 items-start" data-aos='fade-down' data-aos-delay='500'>
                {/* Left Side: About Dr. Jane Doe */}
                <div className="flex-1 flex flex-col items-center md:items-start pt-20">
                    <Image
                        src="/images/denist-pfp.jpg"
                        alt="Dr. Jane Doe"
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-white shadow-lg"
                    />
                    <h2 className="text-3xl font-semibold mb-4 text-sky-600 text-left">About Dr. Jane Doe</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Dr. Jane Doe is a highly experienced dentist dedicated to providing exceptional dental care to her patients. With years of experience and a passion for dentistry, she ensures every patient receives personalized and gentle treatment.
                    </p>
                    <div className="flex gap-4 mt-6 items-center justify-center text-center">
                        <Link
                            href="/dentist"
                            className="bg-white text-sky-700 font-semibold px-5 py-2 rounded shadow hover:bg-sky-100 transition"
                            >
                            The Dentist
                        </Link>
                        <Link
                            href="/office"
                            className="bg-white text-sky-700 font-semibold px-5 py-2 rounded shadow hover:bg-sky-100 transition cursor-pointer"
                        >
                            Our Office
                        </Link>
                    </div>
                </div>
                {/* Right Side: About Our Dental Office */}
                <div className="flex-1 flex flex-col items-center md:items-start pt-10 md:pt-20 w-full">
                    <Image
                        src="/images/office.jpg"
                        alt="Dental Office"
                        width={500}
                        height={400}
                        className="w-full max-w-xs sm:max-w-sm md:max-w-full h-48 sm:h-64 md:h-130 rounded-lg mb-4 object-cover border-4 border-white shadow-lg"
                    />
                    <h2 className="text-2xl font-semibold mb-4 text-sky-600 text-left w-full">About Our Dental Office</h2>
                    <p className="text-gray-700 leading-relaxed w-full">
                        Our office is equipped with state-of-the-art technology to ensure the highest quality of care. We strive to create a welcoming and relaxing environment for all our patients, making your dental visits as comfortable and stress-free as possible.
                    </p>
                </div>
            </div>
        </section>
    )
}