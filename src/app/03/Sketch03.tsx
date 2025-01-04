'use client'
import { useEffect, useRef } from 'react'
import p5 from 'p5'
export default function Sketch03() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {
      const arr: number[][] = []
      p.setup = () => {
        const canvas = p.createCanvas(400, 600, p.WEBGL)
        canvas.parent(containerRef.current!)
        for (let i = 0; i < 100; i++) {
          arr.push([p.random(255), p.random(255), p.random(255), p.random(255), p.random(255)])
        }
      }
      p.draw = () => {
        p.background(15);
        for (let i = 0; i < arr.length; i++) {
          p.fill( arr[i][1], arr[i][2], arr[i][3])
          p.stroke( arr[i][0], arr[i][2], arr[i][4])
          p.rectMode('center')
          p.push();
          p.translate(0, 0, -400);
          p.rotateX(p.TWO_PI/4);
          p.push();
          const z = p.map(arr[i][2], 0, 255, -250, 250);
          p.translate(0, 0, z);
          p.push();
          p.translate(0, 0, p.sin(p.frameCount/60)*(z/.5));
          p.rect(p.map(arr[i][0], 0, 255, -p.width/2, p.width/2), p.map(arr[i][1], 0, 255, -p.height/2, p.height/2), arr[i][2], arr[i][3]);
          p.pop();
          p.pop();
          p.pop();
        }
      }
    }
    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])
  return <div ref={containerRef}></div>
}