import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-4 bg-blue-500 text-white flex gap-4">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/services">Services</Link>
      <Link href="/appointment">Book</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  )
}
