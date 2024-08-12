import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const P5Background = () => {
  const myRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const p5 = require('p5');
      
      const Sketch = (p) => {
        let particles = [];
        let flowfield;
        const inc = 0.1;
        const scl = 20; 
        let cols, rows;
        let zoff = 0;

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight).parent(myRef.current);
          cols = p.floor(p.width / scl);
          rows = p.floor(p.height / scl);
          flowfield = new Array(cols * rows);
          
          for (let i = 0; i < 1000; i++) { 
            particles[i] = new Particle(p);
          }
          p.background(255); 
        };

        p.draw = () => {
          let yoff = 0;
          for (let y = 0; y < rows; y++) {
            let xoff = 0;
            for (let x = 0; x < cols; x++) {
              const index = x + y * cols;
              const angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
              const v = p.createVector(p.cos(angle), p.sin(angle));
              v.setMag(1);
              flowfield[index] = v;
              xoff += inc;
            }
            yoff += inc;
          }
          zoff += 0.0003;

          for (let i = 0; i < particles.length; i++) {
            particles[i].follow(flowfield);
            particles[i].update();
            particles[i].edges();
            particles[i].show();
          }
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };

        class Particle {
          constructor(p) {
            this.p = p;
            this.pos = p.createVector(p.random(p.width), p.random(p.height));
            this.vel = p.createVector(0, 0);
            this.acc = p.createVector(0, 0);
            this.maxSpeed = 2;
            this.prevPos = this.pos.copy();
          }

          follow(vectors) {
            const x = p.floor(this.pos.x / scl);
            const y = p.floor(this.pos.y / scl);
            const index = x + y * cols;
            const force = vectors[index];
            this.applyForce(force);
          }

          applyForce(force) {
            this.acc.add(force);
          }

          update() {
            this.vel.add(this.acc);
            this.vel.limit(this.maxSpeed);
            this.pos.add(this.vel);
            this.acc.mult(0);
          }

          show() {
            p.stroke(0, 50); 
            p.strokeWeight(1); 
            p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
            this.updatePrev();
          }

          updatePrev() {
            this.prevPos.x = this.pos.x;
            this.prevPos.y = this.pos.y;
          }

          edges() {
            if (this.pos.x > p.width) {
              this.pos.x = 0;
              this.updatePrev();
            }
            if (this.pos.x < 0) {
              this.pos.x = p.width;
              this.updatePrev();
            }
            if (this.pos.y > p.height) {
              this.pos.y = 0;
              this.updatePrev();
            }
            if (this.pos.y < 0) {
              this.pos.y = p.height;
              this.updatePrev();
            }
          }
        }
      };

      const myP5 = new p5(Sketch, myRef.current);
      return () => myP5.remove(); 
    }
  }, []);

  return <div ref={myRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
};

export default P5Background;
