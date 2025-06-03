import { useEffect, useRef } from "react";

interface AnimatedGridProps {
  className?: string;
}

const AnimatedGrid = ({ className = "" }: AnimatedGridProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();

      mouseRef.current.x = (e.clientX - rect.left) / canvas.width;
      mouseRef.current.y = (e.clientY - rect.top) / canvas.height;
    };

    // Grid settings
    const gridSize = 40;
    const maxDistance = 150;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw interactive dots at grid intersections
      const mouseX = mouseRef.current.x * canvas.width;
      const mouseY = mouseRef.current.y * canvas.height;

      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const distance = Math.sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            const size = 2 + (1 - distance / maxDistance) * 3;

            // Create gradient effect
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 2);

            gradient.addColorStop(0, `rgba(139, 92, 246, ${opacity * 0.8})`);
            gradient.addColorStop(1, `rgba(139, 92, 246, 0)`);

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(x, y, size, 0, Math.PI * 2);
            ctx.fill();

            // Draw connecting lines to nearby affected dots
            for (let nx = x - gridSize; nx <= x + gridSize; nx += gridSize) {
              for (let ny = y - gridSize; ny <= y + gridSize; ny += gridSize) {
                if (
                  nx >= 0 &&
                  nx <= canvas.width &&
                  ny >= 0 &&
                  ny <= canvas.height
                ) {
                  const nearDistance = Math.sqrt(
                    (nx - mouseX) ** 2 + (ny - mouseY) ** 2,
                  );

                  if (nearDistance < maxDistance && (nx !== x || ny !== y)) {
                    const lineOpacity =
                      (1 - distance / maxDistance) *
                      (1 - nearDistance / maxDistance) *
                      0.5;

                    ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(nx, ny);
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-auto ${className}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    />
  );
};

export default AnimatedGrid;
