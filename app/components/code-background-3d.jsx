'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJSBackground = () => {
    const mountRef = useRef(null);
    const sceneRef = useRef(null);
    const rendererRef = useRef(null);
    const animationFrameRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 50, 300);
        sceneRef.current = scene;

        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            150
        );
        camera.position.z = 120;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        rendererRef.current = renderer;
        mountRef.current.appendChild(renderer.domElement);
        const particleCount = 150;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);
        const opacities = new Float32Array(particleCount);

        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const radius = Math.random() * 300;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI;

            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);
            velocities[i3] = (Math.random() - 0.5) * 0.8;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.8;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.8;

            sizes[i] = Math.random() * 12 + 2;
            opacities[i] = Math.random() * 0.8 + 0.2;
        }

        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
        particles.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

        const codeSymbols = ['</>',  '{}', '()', '[]', '=>', '++'];
        
        const textures = [];
        
        for (let symbol of codeSymbols) {
            const canvas = document.createElement('canvas');
            canvas.width = 128;
            canvas.height = 128;
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = '#ADD8E6';
            context.font = 'bold 64px monospace';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.fillText(symbol, 64, 64);
            
            textures.push(new THREE.CanvasTexture(canvas));
        }

        const textureIndices = new Float32Array(particleCount);
        for (let i = 0; i < particleCount; i++) {
            textureIndices[i] = Math.floor(Math.random() * textures.length);
        }
        particles.setAttribute('textureIndex', new THREE.BufferAttribute(textureIndices, 1));

        const vertexShader = `
      attribute float size;
      attribute float opacity;
      attribute float textureIndex;
      varying float vOpacity;
      varying float vTextureIndex;
      
      void main() {
        vOpacity = opacity;
        vTextureIndex = textureIndex;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

        const fragmentShader = `
      uniform sampler2D pointTextures[${codeSymbols.length}];
      varying float vOpacity;
      varying float vTextureIndex;
      
      void main() {
        vec4 textureColor = texture2D(pointTextures[0], gl_PointCoord);
        
        ${Array.from({ length: codeSymbols.length - 1 }, (_, i) => `
        if(vTextureIndex > ${i}.5 && vTextureIndex < ${i + 1}.5) {
          textureColor = texture2D(pointTextures[${i + 1}], gl_PointCoord);
        }
        `).join('')}
        
        vec3 color = mix(
          vec3(0.68, 0.85, 0.9),
          vec3(0.4, 0.7, 1.0),
          gl_FragCoord.y / 1000.0
        );
        gl_FragColor = vec4(color, textureColor.a * vOpacity * 0.7);
      }
    `;

        const uniformsObject = {
            pointTextures: { value: textures }
        };

        const material = new THREE.ShaderMaterial({
            uniforms: uniformsObject,
            vertexShader,
            fragmentShader,
            blending: THREE.AdditiveBlending,
            depthTest: false,
            transparent: true,
            vertexColors: false
        });

        const particleSystem = new THREE.Points(particles, material);
        scene.add(particleSystem);

        const animate = () => {
            animationFrameRef.current = requestAnimationFrame(animate);

            const positions = particles.attributes.position.array;
            const time = Date.now() * 0.0005;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;

                positions[i3] += velocities[i3] * Math.cos(time + i * 0.02);
                positions[i3 + 1] += velocities[i3 + 1] + Math.sin(time + i * 0.01) * 0.02;
                positions[i3 + 2] += velocities[i3 + 2] * Math.sin(time + i * 0.02);

                const distance = Math.sqrt(
                    positions[i3] ** 2 +
                    positions[i3 + 1] ** 2 +
                    positions[i3 + 2] ** 2
                );

                if (distance > 300) {
                    positions[i3] *= 0.2;
                    positions[i3 + 1] *= 0.2;
                    positions[i3 + 2] *= 0.2;
                }
            }

            particles.attributes.position.needsUpdate = true;
            camera.position.x = Math.sin(time * 0.3) * 20;
            camera.position.y = Math.cos(time * 0.2) * 20;
            camera.lookAt(scene.position);
            particleSystem.rotation.y += 0.0015;
            particleSystem.rotation.x += 0.0008;
            particleSystem.rotation.z += 0.0003;

            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
            material.dispose();
            textures.forEach(texture => texture.dispose());
            particles.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: -1,
                pointerEvents: 'none',
            }}
        />
    );
};

export default ThreeJSBackground;