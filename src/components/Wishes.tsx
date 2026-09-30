import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Sparkles, CheckCircle, HelpCircle, XCircle } from 'lucide-react';
import { WishItem } from '../data/wedding';

interface WishesProps {
  wishes: WishItem[];
}

export const Wishes: React.FC<WishesProps> = ({ wishes }) => {
  return (
    <section id="wishes" className="py-14 px-6 relative">
      <div className="max-w-md mx-auto space-y-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-2"
        >
          <span className="text-xs uppercase tracking-[0.25em] font-sans-clean text-[#9AAEC4] font-semibold">
            Doa & Harapan
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#F5F1E8] font-bold">
            Wishes & Prayers
          </h2>
          <p className="font-sans-clean text-xs text-[#9AAEC4]">
            Ungkapan kebahagiaan dan doa dari sahabat serta keluarga tercinta.
          </p>
        </motion.div>

        {/* Wishes List Container */}
        <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
          {wishes.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#14253D]/90 backdrop-blur-md border border-[#405775]/60 rounded-2xl p-4 shadow-lg space-y-2 text-left"
            >
              <div className="flex items-center justify-between border-b border-[#405775]/40 pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#0B182B] border border-[#405775] text-[#F5F1E8] font-bold text-xs flex items-center justify-center font-serif-title">
                    {item.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-serif-title font-bold text-sm text-[#F5F1E8]">
                      {item.name}
                    </h4>
                    <span className="text-[10px] text-[#71829A] font-sans-clean block">
                      {item.createdAt}
                    </span>
                  </div>
                </div>

                {/* Attendance Tag */}
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-sans-clean font-semibold border ${
                    item.attendance === 'Hadir'
                      ? 'bg-emerald-950/60 text-emerald-300 border-emerald-800'
                      : item.attendance === 'Masih Ragu'
                      ? 'bg-amber-950/60 text-amber-300 border-amber-800'
                      : 'bg-rose-950/60 text-rose-300 border-rose-800'
                  }`}
                >
                  {item.attendance === 'Hadir' && <CheckCircle className="w-3 h-3" />}
                  {item.attendance === 'Masih Ragu' && <HelpCircle className="w-3 h-3" />}
                  {item.attendance === 'Tidak Hadir' && <XCircle className="w-3 h-3" />}
                  {item.attendance}
                </span>
              </div>

              <p className="font-serif-title text-xs md:text-sm text-[#F5F1E8]/90 leading-relaxed italic pt-1">
                "{item.message}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
