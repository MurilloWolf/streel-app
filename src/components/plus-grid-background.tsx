"use client";

import { useEffect, useRef } from "react";

export function PlusGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };
    window.addEventListener("mouseout", handleMouseLeave);

    const draw = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth follow mouse or wander automatically
      if (mouseX > 0 && mouseY > 0) {
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;
      } else {
        targetX +=
          (canvas.width / 2 +
            Math.sin(time * 0.5) * (canvas.width / 3) -
            targetX) *
          0.02;
        targetY +=
          (canvas.height / 2 +
            Math.cos(time * 0.3) * (canvas.height / 3) -
            targetY) *
          0.02;
      }

      const spacing = 40;
      const size = 6;
      const cols = Math.ceil(canvas.width / spacing);
      const rows = Math.ceil(canvas.height / spacing);

      ctx.lineWidth = 2;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing;
          const y = j * spacing;

          const distX = Math.abs(x - targetX);
          const distY = Math.abs(y - targetY);

          const thickness = spacing * 1.2;

          // Cross shape intensity
          const intensityX = Math.max(0, 1 - distX / thickness);
          const intensityY = Math.max(0, 1 - distY / thickness);

          // Fade out from center
          const distFromCenter = Math.sqrt(distX * distX + distY * distY);
          const fadeOut = Math.max(0, 1 - distFromCenter / 600);

          const crossIntensity = Math.max(intensityX, intensityY) * fadeOut;

          // Subtle wave for the rest of the grid
          const wave =
            (Math.sin(x * 0.01 + time) + Math.cos(y * 0.01 + time)) * 0.5 + 0.5;
          const baseIntensity = wave * 0.15;

          const intensity = Math.max(crossIntensity, baseIntensity);

          // Colors: Light blue/gray to Dark slate
          const r = 203 - (203 - 71) * intensity;
          const g = 213 - (213 - 85) * intensity;
          const b = 225 - (225 - 105) * intensity;
          const a = 0.15 + intensity * 0.4; // Base opacity 0.2 (20%), max opacity 0.6 (60%)

          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;

          ctx.beginPath();
          ctx.moveTo(x - size, y);
          ctx.lineTo(x + size, y);
          ctx.moveTo(x, y - size);
          ctx.lineTo(x, y + size);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-transparent pointer-events-none">
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
}
