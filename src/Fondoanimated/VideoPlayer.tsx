import React, { useEffect, useRef } from 'react';

const MatrixEffect: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const columns = canvas.width = window.innerWidth;
    const rows = canvas.height = window.innerHeight;

    const characters = 'ChuchiPG882KPG20';
    const fontSize = 16;
    const columnsCount = columns / fontSize;
    const drops: number[] = Array.from({ length: columnsCount }).fill(0);

    function drawMatrix() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; 
        ctx.fillRect(0, 0, columns, rows);

        ctx.fillStyle = '#1447e6'; 
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > rows && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
        }
    }

    const intervalId = setInterval(drawMatrix, 50); 

    return () => {
        clearInterval(intervalId); 
    };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
    };

export default MatrixEffect;

