'use client'
import { useEffect, useState } from 'react';

const Countdown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-10-20T00:00:00');
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center py-8">
      <h2 className="text-3xl font-bold text-[#527a63] mb-4">¡Faltan para el Festival del Oso Perezoso!</h2>
      <div className="grid grid-cols-4 gap-4 text-xl font-semibold text-[#965a37]">
        <div className="flex flex-col items-center bg-[#f5f1e3] p-4 rounded-lg shadow-md hover-grow">
          <span className="text-4xl">{timeLeft.days}</span>
          <span>Días</span>
        </div>
        <div className="flex flex-col items-center bg-[#f5f1e3] p-4 rounded-lg shadow-md hover-grow">
          <span className="text-4xl">{timeLeft.hours}</span>
          <span>Horas</span>
        </div>
        <div className="flex flex-col items-center bg-[#f5f1e3] p-4 rounded-lg shadow-md hover-grow">
          <span className="text-4xl">{timeLeft.minutes}</span>
          <span>Minutos</span>
        </div>
        <div className="flex flex-col items-center bg-[#f5f1e3] p-4 rounded-lg shadow-md hover-grow">
          <span className="text-4xl">{timeLeft.seconds}</span>
          <span>Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
