"use client";
import { useEffect, useState } from "react";
import { FaTooth } from "react-icons/fa";

export default function BackToTopButton() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setShow(window.scrollY > 400)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }

    if(!show) return null

    return (
        <button onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-10 bg-sky-600 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition"
        aria-label='Back to Top'>
            <FaTooth/>
        </button>
    )
}