import React, { useEffect, useState } from "react";

interface StatisticCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  label: string;
}

const StatisticCounter: React.FC<StatisticCounterProps> = ({
  end,
  suffix = '',
  duration = 2000,
  label
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.min(Math.floor(end * progress), end));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return (
    <div className="text-center">
      <div className="text-2xl font-bold text-pink-500">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
};

export default StatisticCounter;