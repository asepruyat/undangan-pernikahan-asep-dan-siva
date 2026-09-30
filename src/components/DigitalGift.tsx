import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Copy, Check, Gift, CreditCard, Smartphone } from 'lucide-react';
import { weddingData } from '../data/wedding';

export const DigitalGift: React.FC = () => {
  const [copiedAccount, setCopiedAccount] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(type);
    setTimeout(() => {
      setCopiedAccount(null);
    }, 2500);
  };

  return (
    <section id="gift" className="py-14 px-6 bg-gradient-to-b from-transparent via-[#14253D]/50 to-transparent relative">
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
            Digital Gift
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#F5F1E8] font-bold">
            Tanda Kasih
          </h2>
          <p className="font-sans-clean text-xs text-[#9AAEC4] leading-relaxed max-w-xs mx-auto">
            Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, Anda dapat mengirimpannya melalui:
          </p>
        </motion.div>

        {/* BCA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#14253D]/90 backdrop-blur-md border border-[#405775]/60 rounded-3xl p-6 shadow-xl space-y-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-[#405775]/40 pb-3">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-[#C7A76C]" />
              <span className="font-heading font-bold text-lg text-[#FFFFFF]">Bank BCA</span>
            </div>
            <span className="px-3 py-1 bg-[#243B5A] text-[#C7A76C] rounded-full text-[10px] font-sans-clean font-bold tracking-wider uppercase border border-[#405775]">
              BCA
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] uppercase font-sans-clean tracking-wider text-[#9AAEC4]">
              Nomor Rekening
            </p>
            <p className="font-mono text-2xl font-bold tracking-widest text-[#F5F1E8]">
              {weddingData.bcaAccount}
            </p>
            <p className="font-serif-title text-sm text-[#9AAEC4] pt-1">
              a.n. <span className="font-semibold text-[#F5F1E8]">{weddingData.bcaName}</span>
            </p>
          </div>

          <button
            onClick={() => handleCopy(weddingData.bcaAccount, 'bca')}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#243B5A] text-[#F5F1E8] text-xs font-sans-clean font-semibold uppercase tracking-wider shadow-md hover:bg-[#405775] border border-[#9AAEC4]/30 active:scale-98 transition-all duration-300"
          >
            {copiedAccount === 'bca' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Nomor Rekening Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C7A76C]" />
                <span>Salin Nomor Rekening BCA</span>
              </>
            )}
          </button>
        </motion.div>

        {/* DANA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-[#14253D]/90 backdrop-blur-md border border-[#405775]/60 rounded-3xl p-6 shadow-xl space-y-4 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-[#405775]/40 pb-3">
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-[#9AAEC4]" />
              <span className="font-heading font-bold text-lg text-[#FFFFFF]">DANA E-Wallet</span>
            </div>
            <span className="px-3 py-1 bg-[#243B5A] text-[#9AAEC4] rounded-full text-[10px] font-sans-clean font-bold tracking-wider uppercase border border-[#405775]">
              DANA
            </span>
          </div>

          <div className="space-y-1">
            <p className="text-[10px] uppercase font-sans-clean tracking-wider text-[#9AAEC4]">
              Nomor DANA
            </p>
            <p className="font-mono text-2xl font-bold tracking-widest text-[#F5F1E8]">
              {weddingData.danaNumber}
            </p>
            <p className="font-serif-title text-sm text-[#9AAEC4] pt-1">
              a.n. <span className="font-semibold text-[#F5F1E8]">{weddingData.danaName}</span>
            </p>
          </div>

          <button
            onClick={() => handleCopy(weddingData.danaNumber, 'dana')}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-[#243B5A] text-[#F5F1E8] text-xs font-sans-clean font-semibold uppercase tracking-wider shadow-md hover:bg-[#405775] border border-[#9AAEC4]/30 active:scale-98 transition-all duration-300"
          >
            {copiedAccount === 'dana' ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Nomor DANA Berhasil Disalin!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#C7A76C]" />
                <span>Salin Nomor DANA</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Copy Toast Alert Popup */}
        <AnimatePresence>
          {copiedAccount && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-[#0B182B] border border-[#C7A76C] text-[#F5F1E8] px-5 py-2.5 rounded-full shadow-2xl text-xs font-sans-clean font-semibold flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-[#C7A76C]" />
              <span>Nomor berhasil disalin ke clipboard!</span>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
