import React, { useState, useEffect } from 'react';
import { Home, Calendar, Heart, Image as GalleryIcon, MessageSquareHeart, Gift, Sparkles } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: 'hero', label: 'HOME', icon: Home },
    { id: 'event', label: 'AKAD', icon: Calendar },
    { id: 'story', label: 'STORY', icon: Heart },
    { id: 'gallery', label: 'ALBUM', icon: GalleryIcon },
    { id: 'rsvp', label: 'RSVP', icon: MessageSquareHeart },
    { id: 'gift', label: 'GIFT', icon: Gift },
    { id: 'wishes', label: 'WISHES', icon: Sparkles },
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } w-[92%] max-w-[480px]`}
    >
      <div className="bg-[#0B182B]/90 backdrop-blur-md border border-[#405775]/60 rounded-full px-2.5 py-2 shadow-2xl flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-full transition-all duration-300 ${
                isActive
                  ? 'text-[#FFFFFF] bg-[#243B5A] border border-[#C7A76C]/50 scale-105 shadow-md'
                  : 'text-[#9AAEC4] hover:text-[#F5F1E8] hover:bg-white/5'
              }`}
            >
              <Icon className="w-4 h-4 mb-0.5 text-[#C7A76C]" />
              <span className="text-[9px] font-sans-clean tracking-wider font-semibold">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
