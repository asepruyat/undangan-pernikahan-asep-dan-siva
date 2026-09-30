import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Opening } from './components/Opening';
import { Hero } from './components/Hero';
import { Couple } from './components/Couple';
import { Countdown } from './components/Countdown';
import { Ceremony } from './components/Ceremony';
import { LoveStory } from './components/LoveStory';
import { Gallery } from './components/Gallery';
import { DigitalGift } from './components/DigitalGift';
import { Rsvp } from './components/Rsvp';
import { Wishes } from './components/Wishes';
import { Navigation } from './components/Navigation';
import { AudioPlayer } from './components/AudioPlayer';
import { weddingData, WishItem } from './data/wedding';
import { Heart, Sparkles } from 'lucide-react';

export function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [wishes, setWishes] = useState<WishItem[]>(weddingData.defaultWishes);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const wasPlayingRef = useRef<boolean>(false);

  // Parse guest name from URL parameter ?to=Nama
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toParam = params.get('to');
    if (toParam) {
      setGuestName(toParam);
    }
  }, []);

  // Set initial audio volume, attempt autoplay on load/refresh, and configure lifecycle handlers
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.6;
      // Attempt autoplay if browser policy allows
      const promise = audio.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
            wasPlayingRef.current = true;
          })
          .catch((err) => {
            console.warn('Autoplay prevented by browser policy:', err);
            setIsPlaying(false);
            wasPlayingRef.current = false;
          });
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current && !audioRef.current.paused) {
          wasPlayingRef.current = true;
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        // User returned to tab - resume from last position if it was playing before
        if (wasPlayingRef.current && audioRef.current) {
          audioRef.current.volume = 0.6;
          const promise = audioRef.current.play();
          if (promise !== undefined) {
            promise
              .then(() => {
                setIsPlaying(true);
              })
              .catch((err) => {
                console.warn('Resume play error:', err);
                setIsPlaying(false);
                wasPlayingRef.current = false;
              });
          }
        }
      }
    };

    const handlePageHide = () => {
      if (audioRef.current && !audioRef.current.paused) {
        wasPlayingRef.current = true;
        audioRef.current.pause();
        setIsPlaying(false);
      }
    };

    const handlePageShow = (event: PageTransitionEvent) => {
      if ((event.persisted || wasPlayingRef.current) && audioRef.current) {
        audioRef.current.volume = 0.6;
        const promise = audioRef.current.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              setIsPlaying(true);
            })
            .catch((err) => {
              console.warn('Pageshow audio play error:', err);
              setIsPlaying(false);
              wasPlayingRef.current = false;
            });
        }
      }
    };

    const handleBeforeUnload = () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('pagehide', handlePageHide);
    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('pagehide', handlePageHide);
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsOpen(true);

    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      const promise = audioRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
            wasPlayingRef.current = true;
          })
          .catch((err) => {
            console.warn('Audio play on open error:', err);
            setIsPlaying(false);
            wasPlayingRef.current = false;
          });
      }
    }
  };

  const toggleAudio = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsPlaying(false);
      wasPlayingRef.current = false; // User explicitly turned off music
    } else {
      if (audioRef.current) {
        audioRef.current.volume = 0.6;
        const promise = audioRef.current.play();
        if (promise !== undefined) {
          promise
            .then(() => {
              setIsPlaying(true);
              wasPlayingRef.current = true;
            })
            .catch((err) => {
              console.warn('Manual audio play error:', err);
              setIsPlaying(false);
              wasPlayingRef.current = false;
            });
        }
      }
    }
  };

  const handleAddWish = (newWish: { name: string; attendance: 'Hadir' | 'Tidak Hadir' | 'Masih Ragu'; message: string }) => {
    const item: WishItem = {
      id: Date.now().toString(),
      name: newWish.name,
      attendance: newWish.attendance,
      message: newWish.message,
      createdAt: 'Baru saja',
    };
    setWishes([item, ...wishes]);
  };

  // Observe active section on scroll
  useEffect(() => {
    if (!isOpen) return;

    const sections = ['hero', 'event', 'story', 'gallery', 'rsvp', 'gift', 'wishes'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <div className="min-h-screen bg-[#070F1B] text-[#F5F1E8] font-sans-clean antialiased flex flex-col items-center justify-center relative overflow-x-hidden selection:bg-[#243B5A] selection:text-[#FFFFFF]">
      
      {/* Background HTML5 Audio Element */}
      <audio
        ref={audioRef}
        loop
        src={weddingData.musicUrl}
        preload="auto"
      />

      {/* Audio Control Floating Button (Always accessible) */}
      <AudioPlayer isPlaying={isPlaying} onTogglePlay={toggleAudio} />

      {/* Opening Cover Screen */}
      <AnimatePresence>
        {!isOpen && (
          <Opening guestName={guestName} onOpenInvitation={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Main Container Envelope - Desktop centered Max 640px for 9:16 portrait ratio */}
      {isOpen && (
        <div className="relative w-full max-w-[620px] min-h-screen bg-watercolor-paper shadow-2xl overflow-hidden border-0 md:border-x-2 border-[#405775]/40 text-center">
          
          {/* Floating Petal Effect */}
          <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden max-w-[620px] mx-auto">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-petal"
                style={{
                  left: `${(i * 12) + 5}%`,
                  animationDelay: `${i * 1.5}s`,
                  animationDuration: `${10 + (i % 4) * 2}s`,
                }}
              >
                <div className="w-2.5 h-3 bg-[#9AAEC4]/30 rounded-full blur-[0.5px] transform rotate-45" />
              </div>
            ))}
          </div>

          {/* Main Content Sections */}
          <main className="pb-24 relative z-20">
            <Hero />
            <Couple />
            <Countdown />
            <Ceremony />
            <LoveStory />
            <Gallery />
            <Rsvp onAddWish={handleAddWish} />
            <DigitalGift />
            <Wishes wishes={wishes} />

            {/* Closing Footer Card */}
            <footer className="py-12 px-6 border-t border-[#405775]/40 bg-[#0B182B]/80 text-center space-y-4 mt-8">
              <div className="flex items-center justify-center gap-2 text-[#C7A76C]">
                <Sparkles className="w-4 h-4" />
                <span className="font-script text-3xl text-[#FFFFFF]">Asep & Siva</span>
                <Sparkles className="w-4 h-4" />
              </div>
              <p className="font-serif-title italic text-xs text-[#9AAEC4] max-w-xs mx-auto leading-relaxed">
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
              </p>
              <div className="pt-2 text-[10px] text-[#71829A] font-sans-clean uppercase tracking-widest flex items-center justify-center gap-1">
                <span>Made with</span>
                <Heart className="w-3 h-3 text-rose-400 fill-rose-400 inline" />
                <span>for Asep & Siva Wedding</span>
              </div>
            </footer>
          </main>

          {/* Bottom Floating Navigation Bar */}
          <Navigation activeSection={activeSection} />

        </div>
      )}

    </div>
  );
}

export default App;
