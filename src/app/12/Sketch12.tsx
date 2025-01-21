'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function Sketch12() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {
     
      const arr: number[][] = []
      p.setup = () => {
        const canvas = p.createCanvas(400, 600, p.WEBGL)
        canvas.parent(containerRef.current!)

      }

      p.draw = () => {
        p.background(0);


        p.fill('green')
        p.sphere(50, 24, 24)
      }
    

     



    }

    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])

  return <div ref={containerRef}></div>
}