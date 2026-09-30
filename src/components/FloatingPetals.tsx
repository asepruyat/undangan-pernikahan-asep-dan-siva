import React, { useMemo } from 'react';

export const FloatingPetals: React.FC = () => {
  const petals = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8 + Math.random() * 4) % 100}%`,
      animationDuration: `${8 + (i % 7) * 2}s`,
      animationDelay: `${(i % 5) * 1.5}s`,
      size: 10 + (i % 4) * 6,
      opacity: 0.4 + (i % 3) * 0.2,
      rotation: (i * 37) % 360,
      color: ['#D9A7B0', '#B7A7C7', '#B97886', '#F8F3EC', '#C7A76C'][i % 5],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute animate-petal"
          style={{
            left: p.left,
            top: '-20px',
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            opacity: p.opacity,
          }}
        >
          <svg
            width={p.size}
            height={p.size * 1.3}
            viewBox="0 0 24 32"
            fill={p.color}
            style={{ transform: `rotate(${p.rotation}deg)` }}
            className="filter drop-shadow-sm"
          >
            <path d="M12,0 C18,8 24,16 22,24 C20,30 14,32 12,32 C10,32 4,30 2,24 C0,16 6,8 12,0 Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};
