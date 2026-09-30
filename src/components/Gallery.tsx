import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { weddingData } from '../data/wedding';

type CategoryType = 'ALL' | 'GROOM' | 'BRIDE' | 'OUR MOMENTS';

export const Gallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryType>('ALL');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const allImages = weddingData.galleryImages;

  // Filtered images based on activeTab
  const filteredImages = activeTab === 'ALL'
    ? allImages
    : allImages.filter((img) => img.category === activeTab);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  return (
    <section id="gallery" className="py-14 px-6 relative">
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
            Galeri Foto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#F5F1E8] font-bold">
            Album Foto
          </h2>
          <p className="font-sans-clean text-xs text-[#9AAEC4]">
            Kumpulan potret bahagia pernikahan Asep & Siva
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#14253D]/80 border border-[#405775] rounded-2xl backdrop-blur-sm">
          <button
            onClick={() => { setActiveTab('ALL'); setSelectedIndex(null); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans-clean transition-all duration-300 ${
              activeTab === 'ALL'
                ? 'bg-[#243B5A] text-[#C7A76C] shadow-md border border-[#C7A76C]/40'
                : 'text-[#9AAEC4] hover:text-[#F5F1E8]'
            }`}
          >
            Semua
          </button>
          <button
            onClick={() => { setActiveTab('GROOM'); setSelectedIndex(null); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans-clean transition-all duration-300 ${
              activeTab === 'GROOM'
                ? 'bg-[#243B5A] text-[#C7A76C] shadow-md border border-[#C7A76C]/40'
                : 'text-[#9AAEC4] hover:text-[#F5F1E8]'
            }`}
          >
            Groom
          </button>
          <button
            onClick={() => { setActiveTab('BRIDE'); setSelectedIndex(null); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans-clean transition-all duration-300 ${
              activeTab === 'BRIDE'
                ? 'bg-[#243B5A] text-[#C7A76C] shadow-md border border-[#C7A76C]/40'
                : 'text-[#9AAEC4] hover:text-[#F5F1E8]'
            }`}
          >
            Bride
          </button>
          <button
            onClick={() => { setActiveTab('OUR MOMENTS'); setSelectedIndex(null); }}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold font-sans-clean transition-all duration-300 ${
              activeTab === 'OUR MOMENTS'
                ? 'bg-[#243B5A] text-[#C7A76C] shadow-md border border-[#C7A76C]/40'
                : 'text-[#9AAEC4] hover:text-[#F5F1E8]'
            }`}
          >
            Our Moments
          </button>
        </div>

        {/* Gallery Masonry Grid */}
        <div className="grid grid-cols-2 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, idx) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedIndex(idx)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-[#405775] bg-[#14253D] aspect-[3/4]"
              >
                <img
                  src={img.url}
                  alt={img.personName || img.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('SDE01299')) {
                      target.src = 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789528/SDE01299.jpg';
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Category Badge */}
                <div className="absolute top-2 left-2 z-10">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0B182B]/80 backdrop-blur-sm text-[#C7A76C] text-[10px] font-sans-clean font-semibold uppercase tracking-wider border border-[#405775]">
                    {img.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#0B182B]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div className="flex items-center justify-between w-full text-white">
                    <div>
                      <span className="font-serif-title text-xs font-medium text-[#F5F1E8] block">
                        {img.personName || img.title}
                      </span>
                    </div>
                    <ZoomIn className="w-4 h-4 text-[#C7A76C]" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && filteredImages[selectedIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-50 bg-[#0B182B]/95 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white p-2.5 rounded-full bg-[#14253D] border border-[#405775] hover:bg-[#243B5A] transition-colors z-10"
              aria-label="Tutup Lightbox"
            >
              <X className="w-6 h-6 text-[#F5F1E8]" />
            </button>

            {/* Prev button */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2.5 rounded-full bg-[#14253D] border border-[#405775] hover:bg-[#243B5A] transition-colors z-10"
              aria-label="Foto Sebelumnya"
            >
              <ChevronLeft className="w-6 h-6 text-[#F5F1E8]" />
            </button>

            {/* Next button */}
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2.5 rounded-full bg-[#14253D] border border-[#405775] hover:bg-[#243B5A] transition-colors z-10"
              aria-label="Foto Selanjutnya"
            >
              <ChevronRight className="w-6 h-6 text-[#F5F1E8]" />
            </button>

            {/* Enlarged Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-[85vh] flex flex-col items-center"
            >
              <img
                src={filteredImages[selectedIndex].url}
                alt={filteredImages[selectedIndex].personName || filteredImages[selectedIndex].title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://res.cloudinary.com/rydutgfh/image/upload/v1790789528/SDE01299.jpg';
                }}
                className="max-w-full max-h-[75vh] rounded-2xl object-contain shadow-2xl border border-[#405775]"
              />
              <div className="mt-3 text-center space-y-0.5">
                <span className="text-[10px] uppercase tracking-widest text-[#C7A76C] font-semibold block">
                  {filteredImages[selectedIndex].category}
                </span>
                <p className="font-serif-title text-sm text-[#F5F1E8] font-semibold tracking-wider">
                  {filteredImages[selectedIndex].personName || filteredImages[selectedIndex].title}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
