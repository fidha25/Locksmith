


// // // import { useEffect, useState } from "react";

// // // export default function SnowfallBackground() {
// // //   const [flakes, setFlakes] = useState([]);
// // //   const maxFlakes = 100;
// // //   let flakeCount = 0;

// // //   useEffect(() => {
// // //     function createSnowflake(initial) {
// // //       if (flakeCount >= maxFlakes) return;

// // //       const size = Math.random() * 10 + 5; // Reduced size
// // //       const startX = Math.random() * window.innerWidth;
// // //       const startY = initial ? Math.random() * window.innerHeight : -size;
// // //       const speed = Math.random() * 1 + 0.5; // Further reduced speed
// // //       const sway = Math.random() * 2 - 1;

// // //       const newFlake = {
// // //         id: flakeCount++,
// // //         text: "❄", // Snowflake character
// // //         size,
// // //         x: startX,
// // //         y: startY,
// // //         speed,
// // //         sway,
// // //         opacity: Math.random() * 0.8 + 0.2,
// // //       };
// // //       setFlakes((prev) => [...prev, newFlake]);
// // //     }

// // //     function moveSnowflakes() {
// // //       setFlakes((prevFlakes) =>
// // //         prevFlakes.map((flake) => {
// // //           let y = flake.y + flake.speed;
// // //           let x = flake.x + flake.sway * 2;

// // //           if (y > window.innerHeight) {
// // //             y = -20;
// // //             x = Math.random() * window.innerWidth;
// // //           }

// // //           return { ...flake, x, y };
// // //         })
// // //       );

// // //       if (flakeCount < maxFlakes) {
// // //         createSnowflake(false);
// // //       }
// // //     }

// // //     for (let i = 0; i < 50; i++) {
// // //       createSnowflake(true);
// // //     }

// // //     const interval = setInterval(moveSnowflakes, 50);
// // //     return () => clearInterval(interval);
// // //   }, []);

// // //   return (
// // //     <div
// // //       style={{
// // //         position: "fixed",
// // //         top: 0,
// // //         left: 0,
// // //         width: "100vw",
// // //         height: "100vh",
// // //         background: "linear-gradient(to bottom, rgb(144, 145, 149) 0%, rgb(144, 145, 149) 20%, #fff 40%, #fff 60%, rgb(144, 145, 149) 80%, rgb(144, 145, 149) 100%)", // Adjusted gradient
// // //         overflow: "hidden",
// // //         zIndex: -1,
// // //       }}
// // //     >
// // //       {flakes.map((flake) => (
// // //         <span
// // //           key={flake.id}
// // //           style={{
// // //             position: "absolute",
// // //             top: flake.y,
// // //             left: flake.x,
// // //             fontSize: flake.size,
// // //             opacity: flake.opacity,
// // //             pointerEvents: "none",
// // //             animation: "sway 2s infinite ease-in-out",
// // //             filter: "brightness(0) invert(1)", // Force the snowflake to be white
// // //           }}
// // //         >
// // //           {flake.text}
// // //         </span>
// // //       ))}
// // //       <style>
// // //         {`
// // //           @keyframes sway {
// // //             0% { transform: translateX(-2px); }
// // //             50% { transform: translateX(2px); }
// // //             100% { transform: translateX(-2px); }
// // //           }
// // //         `}
// // //       </style>
// // //     </div>
// // //   );
// // // }
export default function GradientBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, rgb(144, 145, 149) 0%, rgb(144, 145, 149) 20%, #fff 40%, #fff 60%, rgb(144, 145, 149) 80%, rgb(144, 145, 149) 100%)", // Adjusted gradient
        overflow: "hidden",
        zIndex: -1,
      }}
    />
  );
}
// export default function GradientBackground() {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         background: "linear-gradient(to bottom, rgb(101, 102, 106) 0%, rgb(101, 102, 106) 20%, rgb(143, 145, 150) 40%, rgb(143, 145, 150) 60%, rgb(101, 102, 106) 80%, rgb(101, 102, 106) 100%)", // Adjusted gradient
//         overflow: "hidden",
//         zIndex: -1,
//       }}
//     />
//   );
// }
// export default function GradientBackground() {
//   return (
//     <div
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         background: "linear-gradient(to bottom, rgb(101, 102, 106) 0%, rgb(120, 122, 127) 25%, rgb(135, 137, 142) 50%, rgb(120, 122, 127) 75%, rgb(101, 102, 106) 100%)", // Smooth gradient transition without too light center
//         overflow: "hidden",
//         zIndex: -1,
//       }}
//     />
//   );
// }
