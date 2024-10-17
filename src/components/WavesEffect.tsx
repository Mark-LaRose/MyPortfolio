// src/components/WavesEffect.tsx
import React, { useEffect } from 'react';
import * as THREE from 'three';

const WavesEffect: React.FC = () => {
  useEffect(() => {
    const SEPARATION = 40, AMOUNTX = 130, AMOUNTY = 35;
    let container: HTMLDivElement | null;
    let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
    let particles: THREE.Sprite[] = [], particle: THREE.Sprite;
    let count = 0;
    let windowHalfX = window.innerWidth / 2;
    let windowHalfY = window.innerHeight / 2;

    function init() {
      container = document.getElementById('waves-container') as HTMLDivElement;
      if (container) {
        container.className += container.className ? ' waves' : 'waves';
      }

      camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.y = 150;
      camera.position.z = 300;
      camera.rotation.x = 0.35;

      scene = new THREE.Scene();

      const PI2 = Math.PI * 2;
      const material = new THREE.SpriteMaterial({
        color: 0x939393,
        map: new THREE.CanvasTexture(generateSprite(PI2))
      });

      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++] = new THREE.Sprite(material);
          particle.position.x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
          particle.position.z = iy * SEPARATION - (AMOUNTY * SEPARATION) - 10;
          scene.add(particle);
        }
      }

      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff, 1);
      container.appendChild(renderer.domElement);

      window.addEventListener('resize', onWindowResize, false);
    }

    function generateSprite(PI2: number) {
      const canvas = document.createElement('canvas');
      canvas.width = 16;
      canvas.height = 16;
      const context = canvas.getContext('2d');

      if (context) {
        context.beginPath();
        context.arc(8, 8, 8, 0, PI2, true);
        context.fillStyle = '#939393';
        context.fill();
      }

      return canvas;
    }

    function onWindowResize() {
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
      requestAnimationFrame(animate);
      render();
    }

    function render() {
      let i = 0;
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          particle = particles[i++];
          particle.position.y = (Math.sin((ix + count) * 0.3) * 50) + (Math.sin((iy + count) * 0.5) * 50);
          particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.3) + 1) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
        }
      }
      renderer.render(scene, camera);
      count += 5;
    }

    init();
    animate();
  }, []);

  return <div id="waves-container" className="waves-container" />;
};

export default WavesEffect;
