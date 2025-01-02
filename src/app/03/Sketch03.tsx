'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function Sketch03() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {
     
      p.setup = () => {
        const canvas = p.createCanvas(600, 400)
        canvas.parent(containerRef.current!)
      }

      p.draw = () => {
        p.background(30);
       
      }

     



    }

    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])

  return <div ref={containerRef}></div>
}