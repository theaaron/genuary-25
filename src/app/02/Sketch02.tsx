'use client'

import { useEffect, useRef } from 'react'
import p5 from 'p5'
import { start } from 'repl'

export default function Sketch02() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const sketch = (p: p5) => {
      const shape = new Shape(50, 100);


      p.setup = () => {
        const canvas = p.createCanvas(400, 600, p.WEBGL)
        canvas.parent(containerRef.current!)
      }

      p.draw = () => {
        p.fill(255)
        p.translate(0, -100, 0);
        p.rotateX(p.TWO_PI*0.22);
        
        p.push();
        p.rotateZ((p.frameCount/100));
        let startCol = p.color(150 + (p.sin(p.frameCount/10)*30), 30 + (p.cos(p.frameCount/10)*30), 200 + (p.cos(p.frameCount/10)*30));
        let endCol = p.color(30 + (p.sin(p.frameCount/10)*30), 15 + (p.sin(p.frameCount/10)*30), 90 + (p.sin(p.frameCount/10)*30));

        p.stroke(p.color(p.sin(p.frameCount/10)*255, p.cos(p.frameCount/11)*255, p.cos(p.frameCount/9)*255));
        repeatShapes(startCol, endCol);
        p.pop();

      }

      function repeatShapes(beginningCol: p5.Color, endCol: p5.Color) {
        for (let i = 0; i < 10; i++) {
          p.push();
          p.translate(0, 0, i*-30)
          const scaleFactor = p.map(i, 0, 9, 0, 2);
          p.scale(scaleFactor)
          let newCol = p.lerpColor(beginningCol, endCol, i/9)
          drawShape(newCol);
          p.pop();
        }
      }

      function drawShape(col: p5.Color) {

        p.fill(col);
        p.beginShape();
        for (let i = 0; i < shape.coords.length; i++) {
          let x = shape.coords[i][0]
          let y = shape.coords[i][1]
          let z = shape.coords[i][2]
          p.curveVertex(x, y, z);
        }
        p.endShape();
      }

    }

    const p5Instance = new p5(sketch)
    return () => p5Instance.remove()
  }, [])

  return <div ref={containerRef}></div>
}


class Shape {
  coords: number[][];
  numPoints: number;
  rad: number;

  constructor(numPoints: number, rad: number ) {
    let coords: number[][] = []
    this.numPoints = numPoints;
    this.rad = rad;
    coords[0] = [0, 1, 0];

    for (let i = 0; i < numPoints; i++) {
      const angle = (i * 2 * Math.PI) / numPoints;
      const x = 0 + (rad*(Math.random()*1.5)) * Math.cos(angle);
      const y = 0 + rad * Math.sin(angle);
      const z = 0 + (Math.random() * 25);
      coords.push([x, y, z]);
    }
    coords.push([0, 0, 0])
    let beginningState = coords[1]
    let endState = coords[coords.length-2]
    console.log(endState);
    coords[0] = endState;
    coords[coords.length-1] = beginningState;

    this.coords = coords;
  }
}