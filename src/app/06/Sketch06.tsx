'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function Sketch06() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {
     

      p.setup = () => {
        const canvas = p.createCanvas(400, 600, p.WEBGL);
        canvas.parent(containerRef.current!);
        
      }
      
      p.draw = () => {
        p.background(30);
        p.stroke(100, 100, 200)
        drawSky();
        repeatGrass();
       
      }
    

function drawSky() {
  for (let i = -p.width; i < p.width; i += 10) {
    for (let j = -p.height; j < p.height; j += 10) {
      // Use noise to generate a value between 0 and 1
      const noiseVal = p.noise(i * 0.005, j * 0.005, p.frameCount * 0.01);
      
      // Map the noise value to a range for blue (100-200)
      const blueValue = p.map(noiseVal, 0, 1, 100, 200);
      const redValue = p.map(noiseVal, 0, 1, 30, 120);
      const greenValue = p.map(noiseVal, 0, 1, 30, 100);
      
      p.fill(redValue, greenValue, blueValue);
      p.stroke(redValue, greenValue, blueValue);
      p.strokeWeight(10);
      p.point(i, j, -10);
    }
  }
}


function drawGrass() {
  for (let i = -p.width; i < p.width; i += 10) {

    const noiseVal = p.noise(i, 0, p.frameCount/300);
    const redNoiseVal = p.noise(i+500, 0, p.frameCount/100);
    const blueNoiseVal = p.noise(i+1000, 0, p.frameCount/100);
    const greenNoiseVal = p.noise(i+1500, 0, p.frameCount/100);
    const yVal = p.map(noiseVal, 0, 1, -10, 100);
    const bVal = p.map(blueNoiseVal, 0, 1, 20, 40);
    const rVal = p.map(redNoiseVal, 0, 1, 20, 60);
    const gVal = p.map(greenNoiseVal, 0, 1, 40, 150);
    const newCol = p.color(rVal, gVal, bVal)
    p.fill(newCol);
    p.stroke(newCol);
    p.strokeWeight(8);
    p.point(i, yVal, 5);
  }
}

function repeatGrass() {
  p.push();
  p.translate(0, p.height/4);
  for (let i = 0; i < 30; i++) {
    p.translate(0, 10, 0);
    drawGrass();
  }
  p.pop();
}



    }

    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])

  return <div ref={containerRef}></div>
}