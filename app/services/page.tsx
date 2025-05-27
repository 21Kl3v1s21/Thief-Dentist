import ServiceCard from '@/components/ServiceCard'

const services = [
  { title: "Teeth Cleaning", description: "Routine and deep cleaning" },
  { title: "Dental Implants", description: "Restore missing teeth" },
  { title: "Braces & Invisalign", description: "Orthodontic solutions" },
]

export default function ServicesPage() {
  return (
    <div>
      <h2 className="text-3xl font-semibold">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-4 mt-4">
        {services.map((s, idx) => <ServiceCard key={idx} {...s} />)}
      </div>
    </div>
  )
}
