import React from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../data/wedding';

export const LoveStory: React.FC = () => {
  return (
    <section id="story" className="py-14 px-6 bg-gradient-to-b from-transparent via-[#14253D]/30 to-transparent relative">
      <div className="max-w-md mx-auto space-y-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-sans-clean text-[#9AAEC4] font-semibold">
            Kisah Kami
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#F5F1E8] font-bold">
            Our Love Story
          </h2>
          <p className="font-sans-clean text-xs text-[#9AAEC4]">
            Setiap detik perjalanan mengajarkan kami tentang ketulusan dan arti rasa syukur.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#405775] ml-4 md:ml-6 space-y-8 pl-6 py-2">
          {weddingData.loveStory.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] top-1.5 w-6 h-6 rounded-full bg-[#0B182B] border-2 border-[#C7A76C] flex items-center justify-center shadow-md group-hover:bg-[#C7A76C] transition-colors duration-300">
                <div className="w-2 h-2 rounded-full bg-[#C7A76C] group-hover:bg-[#0B182B]" />
              </div>

              {/* Story Content Card */}
              <div className="bg-[#14253D]/90 backdrop-blur-sm border border-[#405775]/60 rounded-2xl p-5 shadow-lg space-y-2 relative hover:border-[#C7A76C]/60 transition-colors duration-300">
                {item.date && (
                  <span className="inline-block px-3 py-1 rounded-full bg-[#243B5A] text-[#C7A76C] text-[10px] font-sans-clean font-semibold uppercase tracking-wider border border-[#405775]">
                    {item.date}
                  </span>
                )}

                <h3 className="font-heading text-lg text-[#FFFFFF] font-bold">
                  {item.title}
                </h3>

                <p className="font-serif-title text-xs md:text-sm text-[#F5F1E8]/90 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
