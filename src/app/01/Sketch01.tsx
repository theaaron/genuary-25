'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'

export default function Sketch01() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {
      const rad = 100;
      let centerX: number;
      let centerY: number;
      const lineHeight = 25;
      const numOfLines = 100;
      const randomTransX: number[] = [];
      const randomTransY: number[] = [];
      const colors: p5.Color[] = [];
      let ballX = 0;
      let ballY = 0;

      p.setup = () => {
        const canvas = p.createCanvas(600, 400)
        canvas.parent(containerRef.current!)
        centerX = p.width/2;
        centerY = p.height/2;
        for (let i = 0; i < 15; i++) {
          randomTransX[i] = p.random(-p.width, p.width);
          randomTransY[i] = p.random(-p.height, p.height);
          colors[i] = p.color(p.random(255), p.random(255), p.random(255), p.random(255));
        }

      }

      p.draw = () => {
        p.background(0);
        p.fill(255);
        drawLines();
        for (let i = 0; i < 15; i++) {
          drawDiagLines(randomTransX[i], randomTransY[i], colors[i])
          drawNegDiagLines(randomTransX[i], randomTransY[i], colors[i]);
        }
        const noiseScale = 0.005;
        
        ballX = p.noise(p.frameCount * noiseScale) * p.width/4;
        ballY = p.noise((p.frameCount + 1000) * noiseScale) * p.height/4;
        
        p.push();
        p.translate(ballX, ballY);
        drawCircle(p.color(186, 225, 255, 255), true);
        p.constrain(ballX, 0+rad, p.width-rad);
        p.constrain(ballY, 0+rad, p.height-rad);

      }

      const drawLines = () => {


        p.stroke(60, 255);
        for (let i = 0; i < p.width; i += 10) {
          p.line(i, 0, i, p.height);
        }
      }

      const drawDiagLines = (tx: number, ty: number, col: p5.Color) => {
        const lnHt = p.height/4;
        const noiseScale = 0.01;
        const noiseAmount = 20;
        p.push();
        p.translate(tx, ty);
        
        for (let i = 0; i < p.width/1.5; i+=p.width/60) {
            p.stroke(col);
            p.strokeWeight(5);
            
            // Create noise for both start and end points
            const startNoiseX = p.noise(i * noiseScale, p.frameCount * noiseScale) * noiseAmount;
            const startNoiseY = p.noise(i * noiseScale, (p.frameCount + 1000) * noiseScale) * noiseAmount;
            const endNoiseX = p.noise((i + 1000) * noiseScale, p.frameCount * noiseScale) * noiseAmount;
            const endNoiseY = p.noise((i + 2000) * noiseScale, (p.frameCount + 1000) * noiseScale) * noiseAmount;
            
            // Draw line with noise-affected coordinates
            p.line(
                i + startNoiseX, 
                i + startNoiseY, 
                i + endNoiseX, 
                i + lnHt + endNoiseY
            );
        }
        p.pop();
    }

    const drawNegDiagLines = (tx: number, ty: number, col: p5.Color) => {
      const lnHt = p.height/4;
      const noiseScale = 0.01;
      const noiseAmount = 20;
      p.push();
      p.translate(tx, ty);
      
      for (let i = p.width; i > 0; i-=p.width/60) {
          p.stroke(col);
          p.strokeWeight(5);
          
          const startNoiseX = p.noise(i * noiseScale, p.frameCount * noiseScale) * noiseAmount;
          const startNoiseY = p.noise(i * noiseScale, (p.frameCount + 1000) * noiseScale) * noiseAmount;
          const endNoiseX = p.noise((i + 1000) * noiseScale, p.frameCount * noiseScale) * noiseAmount;
          const endNoiseY = p.noise((i + 2000) * noiseScale, (p.frameCount + 1000) * noiseScale) * noiseAmount;
          

          p.line(
              i + startNoiseX, 
              -i + startNoiseY, 
              i + endNoiseX, 
              -i + lnHt + endNoiseY
          );
      }
      p.pop();
  }

      const drawCircle = (col: p5.Color, isNoisy: boolean) => {
        p.stroke(col);
        p.strokeWeight(1);
        const noiseScale = 0.02;
        const noiseAmount = 20
        for (let i = 0; i < numOfLines; i++) {
          const angle = (p.TWO_PI/numOfLines) * i;
          const x = centerX + rad * p.cos(angle);
          const y = centerY + rad * p.sin(angle);
          let noiseX = 0.0;
          let noiseY = 0.0;
          p.noiseSeed(p.random());
          if (isNoisy) {
            noiseX = p.noise(p.cos(angle) + p.frameCount * noiseScale) * noiseAmount;
            noiseY = p.noise(p.sin(angle) + p.frameCount * noiseScale + 1000) * noiseAmount;
          }

          p.push();
          p.line(x + noiseX, y + noiseY + lineHeight, x + noiseX, y + noiseY - lineHeight)
          p.pop()
        }
      }
      





    }

    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])

  return <div ref={containerRef}></div>
}