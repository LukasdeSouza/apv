'use client';
import { useState, useEffect } from 'react';

export default function VimeoPlayer() {
  const [player, setPlayer] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);

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
          if (percent >= 75) setShowButton(true);
        });
        
        setPlayer(newPlayer);
      };

      document.body.appendChild(script);
      return () => script.remove();
    };

    loadPlayer();
  }, []);

  return (
    <div className="mt-12 relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
      {/* Container do Vimeo */}
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