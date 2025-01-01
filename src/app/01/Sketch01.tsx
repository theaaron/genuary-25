'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function Sketch01() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {

      p.setup = () => {
        const canvas = p.createCanvas(600, 400)
        canvas.parent(containerRef.current!)
      }

      p.draw = () => {
        p.background(0);
        p.fill(255);
        drawLines();
      }

      const drawLines = () => {
        p.stroke(155);
        for (let i = 0; i < p.width; i += 10) {
          p.line(i, p.height, i, -p.height);
        }
      }







    }

    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])

  return <div ref={containerRef}></div>
}