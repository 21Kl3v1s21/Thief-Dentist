import { services } from "@/data/data";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-sky-300 py-20 px-4">
      <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-8 text-sky-700">Our Dental Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We offer a full range of dental care services to keep your smile healthy and beautiful.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, idx) => (
            <ServiceCard key={idx} title={service.title} description={service.description} icon={<service.icon />} />
          ))}
        </div>
      </div>
    </section>
  )
}