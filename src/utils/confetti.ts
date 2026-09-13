import confetti from "canvas-confetti";

export const triggerConfetti = () => {
  // Center burst
  confetti({
    particleCount: 80,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#a855f7", "#3b82f6", "#10b981", "#f59e0b", "#ec4899"],
  });

  // Side fireworks
  setTimeout(() => {
    confetti({
      particleCount: 40,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ["#8b5cf6", "#06b6d4", "#f43f5e"],
    });
    confetti({
      particleCount: 40,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ["#8b5cf6", "#06b6d4", "#f43f5e"],
    });
  }, 200);
};

export const triggerStarConfetti = () => {
  confetti({
    particleCount: 50,
    spread: 360,
    ticks: 60,
    origin: { y: 0.5 },
    shapes: ["star"],
    colors: ["#FFE400", "#FFBD00", "#E89400", "#FFCA6C", "#FDFFB8"],
  });
};
