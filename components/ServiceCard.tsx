"use client";

import { ReactNode } from 'react'
import { useState } from 'react'

type Props = {
  title: string
  description: string
  icon: ReactNode
}

export default function ServiceCard({ title, description, icon }: Props) {
  const[flipped, setFlipped] = useState(false)

  return (
    <div className={`flip-card w-full aspect-[4/2.5] max-w-xs mx-auto ${flipped ? 'is-flipped' : ''}`}
      onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner relative w-full h-full">

        {/* Front */}
        <div className="flip-card-front bg-white border shadow-md flex flex-col justify-center items-center text-center">
          <div className="text-4xl text-sky-600 mb-4">{icon}</div>
          <h3 className="text-xl font-semibold text-sky-700">{title}</h3>
        </div>

        {/* Back */}
        <div className="flip-card-back bg-sky-600/50 text-ember-600 border shadow-md flex items-center justify-center text-center">
          <p className="text-sm">{description}</p>
        </div>

      </div>
    </div>
  )
}