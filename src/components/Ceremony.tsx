import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar as CalendarIcon, Clock, Navigation } from 'lucide-react';
import { weddingData } from '../data/wedding';

export const Ceremony: React.FC = () => {
  const addToCalendar = () => {
    const title = encodeURIComponent(`Pernikahan ${weddingData.coupleName}`);
    const details = encodeURIComponent(`Akad Nikah & Resepsi Pernikahan ${weddingData.coupleName}. Tempat: ${weddingData.akad.venue}, ${weddingData.akad.address}`);
    const location = encodeURIComponent(`${weddingData.akad.venue}, ${weddingData.akad.address}`);
    const dates = '20261018T020000Z/20261018T080000Z'; // UTC equivalent for 09:00 - 15:00 WIB
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section id="event" className="py-14 px-6 bg-gradient-to-b from-transparent via-[#14253D]/50 to-transparent relative">
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
            Rangkaian Acara
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#F5F1E8] font-bold">
            Waktu & Tempat
          </h2>
          <p className="font-sans-clean text-xs text-[#9AAEC4]">
            Dengan penuh rasa syukur, kami mengundang Anda untuk menyaksikan & mendoakan momen bahagia kami:
          </p>
        </motion.div>

        {/* Akad Nikah Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#14253D]/90 backdrop-blur-md border border-[#405775]/60 rounded-3xl p-6 shadow-xl space-y-4 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-20 h-20 bg-[#C7A76C]/10 rounded-bl-full pointer-events-none" />

          <div className="inline-flex p-3 rounded-full bg-[#0B182B] text-[#C7A76C] border border-[#405775]/50 mb-1 shadow-md">
            <CalendarIcon className="w-6 h-6" />
          </div>

          <h3 className="font-heading text-2xl text-[#FFFFFF] font-bold tracking-wider">
            AKAD NIKAH
          </h3>

          <div className="space-y-1 text-sm font-serif-title">
            <p className="font-semibold text-base text-[#F5F1E8]">
              {weddingData.akad.day}, {weddingData.akad.date}
            </p>
            <p className="text-[#C7A76C] font-medium flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4" />
              Pukul {weddingData.akad.time}
            </p>
          </div>

          <div className="border-t border-[#405775]/40 pt-4 space-y-1 text-xs font-sans-clean">
            <p className="font-bold text-sm text-[#F5F1E8]">
              {weddingData.akad.venue}
            </p>
            <p className="text-[#9AAEC4] leading-relaxed max-w-xs mx-auto">
              {weddingData.akad.address}
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={weddingData.akad.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#243B5A] text-[#F5F1E8] text-xs font-sans-clean font-semibold uppercase tracking-wider shadow-md hover:bg-[#405775] border border-[#9AAEC4]/30 transition-all duration-300"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C7A76C]" />
              Lihat Lokasi
            </a>
            <button
              onClick={addToCalendar}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#0B182B] border border-[#405775] text-[#F5F1E8] text-xs font-sans-clean font-semibold uppercase tracking-wider hover:bg-[#14253D] transition-all duration-300"
            >
              <CalendarIcon className="w-3.5 h-3.5 text-[#C7A76C]" />
              Simpan Tanggal
            </button>
          </div>
        </motion.div>

        {/* Resepsi Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#14253D]/90 backdrop-blur-md border border-[#405775]/60 rounded-3xl p-6 shadow-xl space-y-4 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-20 h-20 bg-[#9AAEC4]/10 rounded-br-full pointer-events-none" />

          <div className="inline-flex p-3 rounded-full bg-[#0B182B] text-[#9AAEC4] border border-[#405775]/50 mb-1 shadow-md">
            <Clock className="w-6 h-6" />
          </div>

          <h3 className="font-heading text-2xl text-[#FFFFFF] font-bold tracking-wider">
            RESEPSI
          </h3>

          <div className="space-y-1 text-sm font-serif-title">
            <p className="font-semibold text-base text-[#F5F1E8]">
              {weddingData.reception.day}, {weddingData.reception.date}
            </p>
            <p className="text-[#C7A76C] font-medium flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4" />
              Pukul {weddingData.reception.time}
            </p>
          </div>

          <div className="border-t border-[#405775]/40 pt-4 space-y-1 text-xs font-sans-clean">
            <p className="font-bold text-sm text-[#F5F1E8]">
              {weddingData.reception.venue}
            </p>
            <p className="text-[#9AAEC4] leading-relaxed max-w-xs mx-auto">
              {weddingData.reception.address}
            </p>
          </div>

          <div className="pt-2">
            <a
              href={weddingData.reception.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#243B5A] text-[#F5F1E8] text-xs font-sans-clean font-semibold uppercase tracking-wider shadow-md hover:bg-[#405775] border border-[#9AAEC4]/30 transition-all duration-300"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C7A76C]" />
              Petunjuk Google Maps
            </a>
          </div>
        </motion.div>

        {/* Embedded Map Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border border-[#405775] shadow-lg h-64 bg-[#0B182B]"
        >
          <iframe
            src={weddingData.akad.embedMapsUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Pernikahan"
          />
        </motion.div>

      </div>
    </section>
  );
};
