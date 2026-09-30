import React from 'react';
import { motion } from 'motion/react';
import { Mail, Sparkles, Volume2 } from 'lucide-react';
import { weddingData } from '../data/wedding';
import { bgAsset } from '../assets/images';

interface OpeningProps {
  guestName?: string;
  onOpenInvitation: () => void;
}

export const Opening: React.FC<OpeningProps> = ({ guestName, onOpenInvitation }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: 'easeInOut' } }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B182B] overflow-hidden select-none"
    >
      {/* 9:16 Portrait Card Container Frame (Max-width 600px on desktop) */}
      <div className="relative w-full h-full max-w-[540px] max-h-[920px] aspect-[9/16] mx-auto overflow-hidden shadow-2xl rounded-none md:rounded-3xl border-0 md:border-2 border-[#405775]/50 bg-[#0B182B]">
        
        {/* Deep Navy Watercolor Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-1000" 
          style={{ backgroundImage: `url(${bgAsset})` }}
        >
          {/* Subtle vignette dark navy gradient for high legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B182B]/60 via-[#14253D]/30 to-[#0B182B]/80" />
        </div>

        {/* Animated Mist / Fog */}
        <div className="absolute inset-0 pointer-events-none opacity-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent animate-mist" />

        {/* Animated Floating Doves / White Birds */}
        <div className="absolute top-[22%] left-[12%] animate-bird opacity-85 pointer-events-none">
          <svg width="22" height="18" viewBox="0 0 24 24" fill="#F5F1E8" className="filter drop-shadow-md">
            <path d="M12,2 C10,6 6,8 2,8 C6,10 8,14 10,18 C11,14 14,10 22,8 C16,8 14,5 12,2 Z" />
          </svg>
        </div>
        <div className="absolute top-[26%] right-[14%] animate-bird opacity-80 pointer-events-none" style={{ animationDelay: '2.5s' }}>
          <svg width="18" height="16" viewBox="0 0 24 24" fill="#F5F1E8" className="filter drop-shadow-md">
            <path d="M12,2 C10,6 6,8 2,8 C6,10 8,14 10,18 C11,14 14,10 22,8 C16,8 14,5 12,2 Z" />
          </svg>
        </div>

        {/* Framing Watercolor Hanging Wisteria / Floral Top Overlay */}
        <div className="absolute top-0 inset-x-0 pointer-events-none h-48 bg-gradient-to-b from-[#0B182B]/70 via-transparent to-transparent flex justify-between items-start px-2 z-10">
          <svg className="w-36 h-36 opacity-85 filter drop-shadow-sm" viewBox="0 0 100 100" fill="none">
            <path d="M0 0 Q 30 20 50 60 Q 40 30 0 0 Z" fill="#9AAEC4" />
            <path d="M10 0 Q 40 30 70 80 Q 50 40 10 0 Z" fill="#A9A5B8" opacity="0.8" />
            <circle cx="45" cy="55" r="4" fill="#FFFFFF" />
            <circle cx="65" cy="75" r="5" fill="#7D8B7B" />
          </svg>
          <svg className="w-36 h-36 opacity-85 filter drop-shadow-sm transform -scale-x-100" viewBox="0 0 100 100" fill="none">
            <path d="M0 0 Q 30 20 50 60 Q 40 30 0 0 Z" fill="#9AAEC4" />
            <path d="M10 0 Q 40 30 70 80 Q 50 40 10 0 Z" fill="#A9A5B8" opacity="0.8" />
            <circle cx="45" cy="55" r="4" fill="#FFFFFF" />
            <circle cx="65" cy="75" r="5" fill="#7D8B7B" />
          </svg>
        </div>

        {/* Content Container Centered */}
        <div className="relative z-20 h-full flex flex-col justify-between items-center text-center px-6 py-10 text-white">
          
          {/* Top Eyebrow Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4"
          >
            <span className="text-xs md:text-sm tracking-[0.3em] uppercase font-sans-clean font-medium text-[#F5F1E8]/90 border-b border-[#405775]/60 pb-1 px-4 drop-shadow">
              Walimatul 'Ursy
            </span>
          </motion.div>

          {/* Center Main Calligraphy & Names */}
          <div className="my-auto space-y-4 py-4 w-full">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-serif-title italic text-lg md:text-xl text-[#F5F1E8] tracking-wider font-light drop-shadow-md"
            >
              The Wedding of
            </motion.p>

            {/* Couple Names Handwriting/Calligraphy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.8, ease: 'easeOut' }}
              className="py-1"
            >
              <h1 className="font-script text-5xl md:text-6xl text-[#FFFFFF] drop-shadow-[0_4px_16px_rgba(11,24,43,0.9)] leading-tight tracking-wide">
                {weddingData.groomName}
              </h1>
              <span className="font-script text-3xl md:text-4xl text-[#9AAEC4] my-1 block font-light drop-shadow-md">
                &
              </span>
              <h1 className="font-script text-5xl md:text-6xl text-[#FFFFFF] drop-shadow-[0_4px_16px_rgba(11,24,43,0.9)] leading-tight tracking-wide">
                {weddingData.brideName}
              </h1>
            </motion.div>

            {/* Date */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="pt-2"
            >
              <p className="font-serif-title text-sm md:text-base tracking-[0.25em] font-semibold text-[#F5F1E8] uppercase border-y border-[#405775]/50 py-2 inline-block px-6 bg-[#0B182B]/40 backdrop-blur-xs rounded-lg drop-shadow">
                18 OKTOBER 2026
              </p>
            </motion.div>

            {/* Guest Personalization if provided */}
            {guestName && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="mt-4 bg-[#0B182B]/75 backdrop-blur-md rounded-2xl p-3.5 border border-[#405775]/60 max-w-xs mx-auto shadow-xl"
              >
                <p className="text-[10px] text-[#9AAEC4] uppercase tracking-wider font-sans-clean mb-0.5">
                  Kepada Yth. Bapak/Ibu/Saudara/i:
                </p>
                <p className="font-serif-title text-base text-[#FFFFFF] font-semibold capitalize">
                  {guestName}
                </p>
              </motion.div>
            )}
          </div>

          {/* Bottom Open Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mb-2 w-full flex flex-col items-center"
          >
            <button
              onClick={onOpenInvitation}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#14253D]/90 backdrop-blur-md border border-[#9AAEC4]/60 text-[#F5F1E8] text-xs md:text-sm tracking-widest font-sans-clean font-semibold uppercase shadow-2xl hover:bg-[#243B5A] hover:border-[#C7A76C] hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <Mail className="w-4 h-4 text-[#C7A76C] group-hover:rotate-12 transition-transform duration-300" />
              <span>Buka Undangan</span>
              <Sparkles className="w-3.5 h-3.5 text-[#C7A76C] animate-pulse" />
            </button>

            <p className="text-[10px] text-[#F5F1E8]/70 mt-2.5 flex items-center gap-1 font-sans-clean">
              <Volume2 className="w-3 h-3 text-[#9AAEC4]" /> Musik akan otomatis dimainkan
            </p>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};
