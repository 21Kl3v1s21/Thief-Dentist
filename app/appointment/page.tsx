'use client'

import { useState } from 'react'

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    service: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Appointment booked:\n${JSON.stringify(form, null, 2)}`)
    // Here, you'd typically send data to an API or external service
  }

  return (
    <div className="max-w-md mx-auto py-10">
      <h2 className="text-3xl font-semibold mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border p-2 rounded"
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
        />
        <input
          className="w-full border p-2 rounded"
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="w-full border p-2 rounded"
          type="date"
          name="date"
          required
          value={form.date}
          onChange={handleChange}
        />
        <select
          className="w-full border p-2 rounded"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
        >
          <option value="">Select a Service</option>
          <option value="Teeth Cleaning">Teeth Cleaning</option>
          <option value="Dental Implants">Dental Implants</option>
          <option value="Braces / Invisalign">Braces / Invisalign</option>
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
