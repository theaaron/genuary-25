'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function Sketch05() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {
     const w = 90;
     const h = 700;

      p.setup = () => {
        const canvas = p.createCanvas(400, 600, p.WEBGL)
        canvas.parent(containerRef.current!)
        p.rectMode('center')
      }

      p.draw = () => {
        p.background(0);
        drawRect();
      }

     
      function drawRect() {
        p.push();
        p.rotateX(p.TWO_PI*(7/8));
        p.push()
        p.rotateY(p.TWO_PI/2.75);
        for (let i = 0; i < p.width*1.5; i+=w) {
          for (let j = 0; j < p.width*1.5; j+=w) {
            const noiseVal = p.noise(i, j, p.frameCount/200);
            const rVal1 = p.map(p.noise(i, j, p.frameCount/300), 0, 1, 0, 30);
            const gVal1 = p.map(p.noise(i+1000, j, p.frameCount/300), 0, 1, 100, 255);
            const bVal1 = p.map(p.noise(i+2000, j, p.frameCount/300), 0, 1, 100, 255);
            const rVal2 = p.map(p.noise(i, j, p.frameCount/300), 0, 1, 200, 255);
            const gVal2 = p.map(p.noise(i+9000, j, p.frameCount/300), 0, 1, 60, 90);
            const bVal2 = p.map(p.noise(i+21000, j, p.frameCount/300), 0, 1, 120, 150);
            p.push();
            p.translate(i, 500, j)
            const hVal = p.map((p.sin(p.frameCount/20)*h)*noiseVal, -h, h, h*.25, h*1.25);
            p.fill(rVal1, gVal1, bVal1)
            p.stroke(rVal2, gVal2, bVal2)
            p.box(w*.8, hVal, w*.8)
            p.pop();
          }
        }
        p.pop();
        p.pop();
      }


    }

    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])

  return <div ref={containerRef}></div>
}