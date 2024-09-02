'use client'

import { useState } from 'react'

export default function ProfileImage() {
  const [key, setKey] = useState(0)

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setKey(prevKey => prevKey + 1)
    window.location.reload()
  }

  return (
    <a href="/" onClick={handleClick}>
      <img
        key={key}
        src="/StrawberrySoph.jpg"
        alt="StrawberrySoph"
        className="w-36 h-36 rounded-full border-4 border-[#d02f2f] cursor-pointer"
        width="150"
        height="150"
        style={{ aspectRatio: "150/150", objectFit: "cover" }}
      />
    </a>
  )
}