'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function Sketch07() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {
     
      const arr: number[][] = []
      p.setup = () => {
        const canvas = p.createCanvas(400, 600)
        canvas.parent(containerRef.current!)
        for (let i = 0; i < 100; i++) {
          arr.push([p.random(255), p.random(255), p.random(255), p.random(255), p.random(255)])
        }
      }

      p.draw = () => {
        p.background(0);
       
      }
    

     



    }

    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])

  return <div ref={containerRef}></div>
}