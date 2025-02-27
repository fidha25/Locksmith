import { useEffect, useRef } from "react";

const WaveBackground = ({ position = "bottom" }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight / 4;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let waveHeight = 40;
    let waveSpeed1 = 1.2;
    let waveSpeed2 = 0.2;
    let waveSpeed3 = 1;
    let waveLength = 0.01;

    const drawWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const createGradient = (color) => {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        return gradient;
      };

      const gradients = [
        createGradient("rgba(135, 206, 235, 0.8)"),
        createGradient("rgb(221, 160, 221, 1)"),
        createGradient("rgba(144, 238, 144, 0.8)")
      ];

      const waveSpeeds = [waveSpeed1, waveSpeed2, waveSpeed3];
      const waveHeights = [waveHeight, waveHeight * 0.8, waveHeight * 0.6];

      waveSpeeds.forEach((speed, index) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        for (let x = 0; x < canvas.width; x++) {
          let y =
            Math.sin(x * waveLength + speed * performance.now() / (1000 + index * 200)) *
              waveHeights[index] +
            canvas.height / 2;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fillStyle = gradients[index];
        ctx.fill();
      });
    };

    const animate = () => {
      drawWave();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div
      className={`absolute left-0 w-full ${position === "bottom" ? "bottom-0" : "top-0"}`}
      style={{ zIndex: -1 }}
    >
      <canvas ref={canvasRef} className="w-full h-32" />
    </div>
  );
};

export default WaveBackground;
