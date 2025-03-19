'use client';
import { useState, useRef } from 'react';
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid';

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const currentProgress = (video.currentTime / video.duration) * 100;
    setProgress(currentProgress);

    if (currentProgress >= 75 && !showButton) {
      setShowButton(true);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="mt-12 group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-shadow">
      {/* Vídeo */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      >
        <source src="/videos/video_vendas.mp4" type="video/mp4" />
      </video>

      {/* Overlay de gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent" />

      {/* Botão de play/pause personalizado */}
      <button 
        className="absolute inset-0 flex items-center justify-center"
        onClick={togglePlay}
      >
        {!isPlaying ? (
          <PlayCircleIcon className="h-20 w-20 text-purple-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
        ) : (
          <PauseCircleIcon className="h-20 w-20 text-purple-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
        )}
      </button>

      {/* Barra de progresso sutil */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-purple-900/30">
        <div 
          className="h-full bg-purple-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Botão de ação flutuante */}
      {showButton && (
        <div className="absolute bottom-6 right-6">
          <button 
            className="bg-purple-500/90 hover:bg-purple-400 text-white px-5 py-2.5 rounded-lg backdrop-blur-sm transition-all 
            transform hover:scale-105 shadow-lg hover:shadow-purple-500/30 flex items-center gap-2"
            onClick={() => window.open("https://pay.kiwify.com.br/udR1e9H", "_blank")}
          >
            <span>Quero Participar</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}