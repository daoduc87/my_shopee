import { useEffect, useState } from "react";

export default function Countdown() {
  const [diffTime, setDiffTime] = useState(0);

  useEffect(() => {
    const now = new Date();
    const after = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 7,
      now.getHours(),
      now.getMinutes(),
      now.getSeconds(),
    );

    const diff = after.getTime() - now.getTime();
    setDiffTime(diff);

    const timer = setInterval(() => {
      setDiffTime((prev) => {
        if (prev <= 1000) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const totalSeconds = Math.floor(diffTime / 1000);
  const days = String(Math.floor(totalSeconds / (3600 * 24))).padStart(2, "0");
  const hours = String(
    Math.floor((totalSeconds % (3600 * 24)) / 3600),
  ).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
    2,
    "0",
  );
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return (
    <div className="flex items-center gap-3 text-base font-semibold text-black">
      <div className="flex flex-col items-center">
        <span className="rounded bg-black px-2 py-1 text-white">{days}</span>
        <div className="mt-1 text-xs text-gray-500">DAYS</div>
      </div>
      <div className="flex flex-col items-center">
        <span className="rounded bg-black px-2 py-1 text-white">{hours}</span>
        <div className="mt-1 text-xs text-gray-500">HOURS</div>
      </div>
      <div className="flex flex-col items-center">
        <span className="rounded bg-black px-2 py-1 text-white">{minutes}</span>
        <div className="mt-1 text-xs text-gray-500">MINUTES</div>
      </div>
      <div className="flex flex-col items-center">
        <span className="rounded bg-black px-2 py-1 text-white">{seconds}</span>
        <div className="mt-1 text-xs text-gray-500">SECONDS</div>
      </div>
    </div>
  );
}
