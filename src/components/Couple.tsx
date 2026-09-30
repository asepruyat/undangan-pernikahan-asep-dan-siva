import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { weddingData } from '../data/wedding';
import { groomAsset, brideAsset } from '../assets/images';

export const Couple: React.FC = () => {
  return (
    <section id="couple" className="py-12 px-6 bg-gradient-to-b from-transparent via-[#14253D]/40 to-transparent relative">
      <div className="max-w-md mx-auto text-center space-y-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-2"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-sans-clean text-[#9AAEC4] font-semibold">
            Pasangan Pengantin
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#F5F1E8] font-bold">
            The Bride & The Groom
          </h2>
          <p className="font-sans-clean text-xs text-[#9AAEC4] max-w-xs mx-auto leading-relaxed pt-2">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho Allah SWT:
          </p>
        </motion.div>

        {/* Groom Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Arch Botanical Frame */}
          <div className="relative w-48 h-60 mx-auto rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[#405775] p-1 bg-[#14253D] shadow-2xl">
            <img
              src={groomAsset}
              alt={weddingData.groomFullName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-t-full rounded-b-2xl filter brightness-[1.02] contrast-[1.02]"
            />
            {/* Watercolor Floral Accent Badge */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#0B182B] rounded-full flex items-center justify-center border border-[#9AAEC4]/50 shadow-lg">
              <svg className="w-8 h-8 text-[#C7A76C]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-script text-4xl text-[#FFFFFF] font-bold">
              {weddingData.groomName}
            </h3>
            <p className="font-serif-title font-semibold text-base text-[#F5F1E8]">
              {weddingData.groomFullName}
            </p>
            <p className="font-sans-clean text-xs text-[#9AAEC4] pt-1">
              Putra pertama dari:
            </p>
            <p className="font-serif-title text-sm text-[#F5F1E8] font-medium">
              {weddingData.groomParents.father}
              <br />
              & {weddingData.groomParents.mother}
            </p>
          </div>
        </motion.div>

        {/* Heart Divider Icon */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-[1px] w-20 bg-[#405775]/60" />
          <div className="w-10 h-10 rounded-full bg-[#14253D] border border-[#C7A76C]/60 flex items-center justify-center shadow-lg">
            <Heart className="w-5 h-5 text-[#C7A76C] fill-[#C7A76C]" />
          </div>
          <div className="h-[1px] w-20 bg-[#405775]/60" />
        </div>

        {/* Bride Profile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {/* Arch Botanical Frame */}
          <div className="relative w-48 h-60 mx-auto rounded-t-full rounded-b-3xl overflow-hidden border-4 border-[#405775] p-1 bg-[#14253D] shadow-2xl">
            <img
              src={brideAsset}
              alt={weddingData.brideFullName}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-t-full rounded-b-2xl filter brightness-[1.02] contrast-[1.02]"
            />
            {/* Watercolor Floral Accent Badge */}
            <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-[#0B182B] rounded-full flex items-center justify-center border border-[#9AAEC4]/50 shadow-lg">
              <svg className="w-8 h-8 text-[#9AAEC4]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>

          <div className="space-y-1">
            <h3 className="font-script text-4xl text-[#FFFFFF] font-bold">
              {weddingData.brideName}
            </h3>
            <p className="font-serif-title font-semibold text-base text-[#F5F1E8]">
              {weddingData.brideFullName}
            </p>
            <p className="font-sans-clean text-xs text-[#9AAEC4] pt-1">
              Putri pertama dari:
            </p>
            <p className="font-serif-title text-sm text-[#F5F1E8] font-medium">
              {weddingData.brideParents.father}
              <br />
              & {weddingData.brideParents.mother}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
