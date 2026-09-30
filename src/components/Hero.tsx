import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-10 pb-12 px-6 text-center overflow-hidden">
      {/* Decorative Floral Header Ornament */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none opacity-60">
        <svg className="w-48 h-12 text-[#9AAEC4]" viewBox="0 0 200 40" fill="currentColor">
          <path d="M100 20 C60 0 20 20 0 5 C30 35 70 25 100 20 C130 25 170 35 200 5 C180 20 140 0 100 20 Z" opacity="0.6" />
          <circle cx="100" cy="20" r="3" fill="#C7A76C" />
          <circle cx="85" cy="18" r="2.5" fill="#9AAEC4" />
          <circle cx="115" cy="18" r="2.5" fill="#9AAEC4" />
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto space-y-6 pt-4"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-sans-clean font-semibold text-[#9AAEC4] block">
          Undangan Pernikahan
        </span>

        <h1 className="font-script text-5xl md:text-6xl text-[#F5F1E8] leading-tight">
          {weddingData.coupleName}
        </h1>

        <p className="font-serif-title italic text-sm md:text-base text-[#9AAEC4]">
          {weddingData.weddingDateFormatted}
        </p>

        {/* Decorative Gold Divider */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C7A76C]/60" />
          <div className="w-2 h-2 rounded-full bg-[#C7A76C]" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#C7A76C]/60" />
        </div>

        {/* Quran Verse Card in Deep Navy Card Frame */}
        <div className="bg-[#14253D]/80 backdrop-blur-sm border border-[#405775]/60 rounded-2xl p-6 shadow-xl relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-16 h-16 bg-[#C7A76C]/10 rounded-bl-full pointer-events-none" />
          
          <p className="font-serif-title text-sm md:text-base text-[#F5F1E8] leading-relaxed italic mb-4 text-center">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
          <span className="font-sans-clean text-xs font-semibold text-[#C7A76C] uppercase tracking-wider block text-center">
            (QS. Ar-Rum: 21)
          </span>
        </div>
      </motion.div>
    </section>
  );
};
