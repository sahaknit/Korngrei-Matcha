"use client" // this is a client component

import React, { useEffect, useRef, ReactNode } from "react"
interface Props {
  offset?: string
  children?: ReactNode
  // any props that come into the component
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0")
            entry.target.classList.add("animate-slideUpCubiBezier")
          }
        })
      },
      { rootMargin: offset }
    )

    const currentRef = ref.current; // Capture ref.current to use in the cleanup function

    if (currentRef) {
      observer.observe(currentRef)
    }

    // BEST PRACTICE: Add a cleanup function to disconnect the observer
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    }
  }, [offset]) // <-- FIX: The dependency array now includes 'offset'

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  )
}