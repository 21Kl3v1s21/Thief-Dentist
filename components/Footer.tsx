import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sky-700 text-white py-5 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src='/dent-thief.png' alt='logo' width={40} height={40}/>
            <span className="text-xl font-semibold"> SmileBright Dental</span>
          </div>
          <p className="text-sm text-white/80">
           Friendly, modern dental care for the whole family. Located in the heart of Toothville.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-white/90">
            <li><Link href="/#hero" className="hover:underline">Home</Link></li>
            <li><Link href="/#about" className="hover:underline">About</Link></li>
            <li><Link href="/#gallery" className="hover:underline">Gallery</Link></li>
            <li><Link href="/#services" className="hover:underline">Services</Link></li>
            <li><Link href="/#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <ul className="space-y-3 text-white/90 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> 123 Smile Street, Toothville, TX
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:info@smilebright.com" className="hover:underline">info@smilebright.com</a>
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-300"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-white/70 mt-10">
        © {new Date().getFullYear()} SmileBright Dental. All rights reserved to Klevis.
      </div>
    </footer>
  );
}