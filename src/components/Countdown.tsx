import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(weddingData.weddingDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isPast: false });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="countdown" className="py-12 px-6 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto space-y-6"
      >
        <span className="text-xs uppercase tracking-[0.25em] font-sans-clean text-[#9AAEC4] font-semibold">
          Menghitung Hari
        </span>
        <h2 className="font-heading text-2xl md:text-3xl text-[#F5F1E8] font-bold">
          Counting Down to Our Special Day
        </h2>

        {timeLeft.isPast ? (
          <div className="bg-[#14253D]/90 border border-[#405775] rounded-2xl p-6 shadow-md">
            <p className="font-serif-title text-lg text-[#F5F1E8] font-semibold">
              Alhamdulillah, hari bahagia kami telah tiba.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-2.5 py-2">
            {[
              { label: 'HARI', value: timeLeft.days },
              { label: 'JAM', value: timeLeft.hours },
              { label: 'MENIT', value: timeLeft.minutes },
              { label: 'DETIK', value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#14253D]/90 backdrop-blur-sm border border-[#405775]/60 rounded-2xl p-3 shadow-lg flex flex-col items-center justify-center"
              >
                <span className="font-serif-title text-2xl md:text-3xl font-bold text-[#FFFFFF]">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="font-sans-clean text-[10px] tracking-wider font-semibold text-[#9AAEC4] mt-1">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="font-serif-title italic text-sm text-[#9AAEC4]">
          Minggu, 18 Oktober 2026
        </p>
      </motion.div>
    </section>
  );
};
