import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/wedding';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 text-center bg-gradient-to-t from-[#243354] to-transparent text-white relative overflow-hidden">
      
      {/* Decorative Floral Bottom SVG Frame */}
      <div className="absolute top-0 inset-x-0 pointer-events-none h-20 flex justify-center opacity-40">
        <svg className="w-64 h-full text-[#D9A7B0]" viewBox="0 0 200 40" fill="currentColor">
          <circle cx="100" cy="10" r="3" />
          <path d="M50 20 Q100 0 150 20 Q100 40 50 20 Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-md mx-auto space-y-6 pt-6 relative z-10">
        
        {/* Heart Icon */}
        <div className="w-12 h-12 rounded-full bg-[#D9A7B0]/20 border border-[#D9A7B0]/40 flex items-center justify-center mx-auto">
          <Heart className="w-6 h-6 text-[#D9A7B0] fill-[#D9A7B0]" />
        </div>

        {/* Closing Thank You Text */}
        <p className="font-serif-title italic text-base md:text-lg text-[#F8F3EC]/90 max-w-xs mx-auto leading-relaxed">
          "Thank you for being part of our special day."
        </p>

        {/* Couple Names */}
        <div>
          <h2 className="font-script text-4xl md:text-5xl text-[#F8F3EC] py-1">
            {weddingData.coupleName}
          </h2>
          <p className="font-sans-clean text-xs uppercase tracking-[0.25em] text-[#D9A7B0] font-semibold">
            {weddingData.weddingDateFormatted}
          </p>
        </div>

        <div className="border-t border-[#D9A7B0]/20 pt-6 text-[10px] text-[#F8F3EC]/60 font-sans-clean tracking-wider">
          © 2026 {weddingData.coupleName}. Created with Love for Wedding Invitation.
        </div>

      </div>
    </footer>
  );
};
