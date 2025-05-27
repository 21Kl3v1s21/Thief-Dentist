'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', message: '' })

  return (
    <form className="space-y-4 max-w-md">
      <input
        className="w-full p-2 border"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <textarea
        className="w-full p-2 border"
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  )
}
