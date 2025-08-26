'use client';

import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = (): TimeLeft | null => {
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  
  useEffect(() => {
    // Set initial value client-side to avoid hydration mismatch
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  if (!timeLeft) {
    return (
      <div className="text-2xl font-bold text-accent">
        The future is here! Welcome to Pravrutti!
      </div>
    );
  }

  const timeParts = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center w-full max-w-2xl">
      {timeParts.map(({ label, value }) => (
        <div key={label} className="flex flex-col items-center justify-center bg-card/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-primary/20 shadow-lg">
          <div className="text-4xl sm:text-6xl font-bold text-primary tracking-tighter">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-sm sm:text-base text-muted-foreground uppercase tracking-widest mt-1">
            {label}
          </div>
        </div>
      ))}
    </div>
  );
}
