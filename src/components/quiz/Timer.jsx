import { useEffect, useState } from "react";

export default function Timer({ initial = 60, onEnd }) {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    if (time <= 0) {
      onEnd?.();
      return;
    }

    const interval = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time, onEnd]);

  return (
    <div className="text-sm font-bold text-slate-700">
      ⏱ {time}s
    </div>
  );
}