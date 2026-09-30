import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Send, Users } from 'lucide-react';

interface RsvpProps {
  onAddWish: (wish: { name: string; attendance: 'Hadir' | 'Tidak Hadir' | 'Masih Ragu'; message: string }) => void;
}

export const Rsvp: React.FC<RsvpProps> = ({ onAddWish }) => {
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'Hadir' | 'Tidak Hadir' | 'Masih Ragu'>('Hadir');
  const [message, setMessage] = useState('');
  const [guestCount, setGuestCount] = useState('1');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    onAddWish({
      name: name.trim(),
      attendance,
      message: message.trim(),
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setName('');
      setMessage('');
      setGuestCount('1');
      setIsSubmitted(false);
    }, 4000);
  };

  return (
    <section id="rsvp" className="py-14 px-6 relative">
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
            Konfirmasi Kehadiran
          </span>
          <h2 className="font-heading text-3xl md:text-4xl text-[#F5F1E8] font-bold">
            RSVP
          </h2>
          <p className="font-sans-clean text-xs text-[#9AAEC4]">
            Mohon konfirmasi kehadiran Anda untuk membantu kami menyiapkan kehangatan acara.
          </p>
        </motion.div>

        {/* RSVP Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#14253D]/90 backdrop-blur-md border border-[#405775]/60 rounded-3xl p-6 shadow-xl relative"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-10 text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-[#0B182B] border-2 border-[#C7A76C] text-[#C7A76C] flex items-center justify-center mx-auto shadow-lg">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl text-[#FFFFFF] font-bold">
                Terima Kasih Atas Konfirmasinya!
              </h3>
              <p className="font-sans-clean text-xs text-[#9AAEC4] leading-relaxed max-w-xs mx-auto">
                Konfirmasi Anda dan ucapan doa telah berhasil kami terima.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Nama Tamu */}
              <div className="space-y-1">
                <label className="block text-xs font-sans-clean font-semibold uppercase tracking-wider text-[#9AAEC4]">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-xl bg-[#0B182B] border border-[#405775] text-[#F5F1E8] placeholder-[#71829A] text-sm focus:outline-none focus:border-[#C7A76C] transition-colors"
                />
              </div>

              {/* Status Kehadiran */}
              <div className="space-y-1">
                <label className="block text-xs font-sans-clean font-semibold uppercase tracking-wider text-[#9AAEC4]">
                  Konfirmasi Kehadiran *
                </label>
                <div className="grid grid-cols-3 gap-2 pt-1">
                  {[
                    { id: 'Hadir', label: 'Hadir' },
                    { id: 'Masih Ragu', label: 'Ragu-ragu' },
                    { id: 'Tidak Hadir', label: 'Maaf Tidak' },
                  ].map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setAttendance(item.id as any)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-sans-clean font-semibold transition-all border ${
                        attendance === item.id
                          ? 'bg-[#243B5A] text-[#FFFFFF] border-[#C7A76C] shadow-md'
                          : 'bg-[#0B182B] text-[#9AAEC4] border-[#405775] hover:border-[#71829A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Jumlah Tamu jika Hadir */}
              {attendance === 'Hadir' && (
                <div className="space-y-1">
                  <label className="block text-xs font-sans-clean font-semibold uppercase tracking-wider text-[#9AAEC4]">
                    Jumlah Tamu Hadir
                  </label>
                  <div className="relative">
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B182B] border border-[#405775] text-[#F5F1E8] text-sm focus:outline-none focus:border-[#C7A76C] transition-colors appearance-none"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                      <option value="3">3 Orang</option>
                      <option value="4">4 Orang</option>
                    </select>
                    <Users className="w-4 h-4 text-[#9AAEC4] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              )}

              {/* Pesan & Doa */}
              <div className="space-y-1">
                <label className="block text-xs font-sans-clean font-semibold uppercase tracking-wider text-[#9AAEC4]">
                  Ucapan & Doa Restu *
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tuliskan ucapan dan doa terbaik untuk mempelai..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0B182B] border border-[#405775] text-[#F5F1E8] placeholder-[#71829A] text-sm focus:outline-none focus:border-[#C7A76C] transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#243B5A] text-[#F5F1E8] text-xs font-sans-clean font-semibold uppercase tracking-wider shadow-lg hover:bg-[#405775] border border-[#9AAEC4]/30 active:scale-98 transition-all duration-300"
              >
                <Send className="w-4 h-4 text-[#C7A76C]" />
                Kirim Konfirmasi & Doa
              </button>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
