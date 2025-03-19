'use client';
import { useState, useEffect } from 'react';
import { PlayCircleIcon, PauseCircleIcon } from '@heroicons/react/24/solid';

export default function VimeoPlayer() {
  const [player, setPlayer] = useState<any>(null);
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const loadPlayer = () => {
      const script = document.createElement('script');
      script.src = 'https://player.vimeo.com/api/player.js';
      script.async = true;
      
      script.onload = () => {
        const iframe = document.getElementById('vimeo-iframe') as HTMLIFrameElement;
        const newPlayer = new (window as any).Vimeo.Player(iframe);

        newPlayer.on('timeupdate', (data: any) => {
          const percent = (data.seconds / data.duration) * 100;
          setProgress(percent);
          if (percent >= 75) setShowButton(true);
        });

        newPlayer.on('play', () => setIsPlaying(true));
        newPlayer.on('pause', () => setIsPlaying(false));
        newPlayer.on('ended', () => setIsPlaying(false));

        setPlayer(newPlayer);
      };

      document.body.appendChild(script);
      return () => script.remove();
    };

    loadPlayer();
  }, []);

  const togglePlay = () => {
    if (player) {
      isPlaying ? player.pause() : player.play();
    }
  };


  return (
    <div className="mt-12 group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-shadow">
      {/* Container do Vimeo mantendo o aspect ratio */}
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
          id="vimeo-iframe"
          src="https://player.vimeo.com/video/1067207635?badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Overlay e controles personalizados */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />

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

      {/* Barra de progresso */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-purple-900/30">
        <div 
          className="h-full bg-purple-400 transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Botão de ação */}
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