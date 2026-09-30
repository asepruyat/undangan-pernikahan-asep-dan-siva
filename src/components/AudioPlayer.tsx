import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface AudioPlayerProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ isPlaying, onTogglePlay }) => {
  return (
    <button
      onClick={onTogglePlay}
      className={`fixed top-5 right-5 z-40 w-11 h-11 rounded-full bg-[#0B182B]/90 backdrop-blur-md border border-[#405775] text-[#F5F1E8] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 ${
        isPlaying ? 'border-[#C7A76C] text-[#C7A76C]' : 'opacity-70'
      }`}
      title={isPlaying ? 'Matikan Musik' : 'Putar Musik'}
      aria-label="Toggle Background Music"
    >
      {isPlaying ? (
        <div className="relative flex items-center justify-center">
          <Volume2 className="w-5 h-5 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#C7A76C] animate-ping" />
        </div>
      ) : (
        <VolumeX className="w-5 h-5 text-[#9AAEC4]" />
      )}
    </button>
  );
};
