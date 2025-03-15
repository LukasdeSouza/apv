// components/JotformChat.tsx
'use client'

import Script from 'next/script'
import { useEffect } from 'react'

declare global {
  interface Window {
    AgentInitializer: {
      init: (config: any) => void;
    };
  }
}

export default function JotformChat() {
  useEffect(() => {
    // Função de inicialização dentro do useEffect
    const initializeChat = () => {
      if (typeof window !== 'undefined' && window.AgentInitializer) {
        window.AgentInitializer.init({
          agentRenderURL: "https://agent.jotform.com/0195976eee5d7a5685b06080f9206ccf3668",
          rootId: "JotformAgent-0195976eee5d7a5685b06080f9206ccf3668",
          formID: "0195976eee5d7a5685b06080f9206ccf3668",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isDraggable: false,
          background: "linear-gradient(180deg, #6C73A8 0%, #6C73A8 100%)",
          buttonBackgroundColor: "#0066C3",
          buttonIconColor: "#FFFFFF",
          variant: false,
          customizations: {
            "greeting": "Yes",
            "greetingMessage": "Fala Dev, posso te ajudar ?",
            "openByDefault": "No",
            "pulse": "Yes",
            "position": "right",
            "autoOpenChatIn": "10000"
          },
          isVoice: false
        })
      }
    }

    // Verifica se o script já foi carregado
    if (typeof window !== 'undefined' && window.AgentInitializer) {
      initializeChat()
    } else {
      // Adiciona listener caso o script demore a carregar
      window.addEventListener('jotform-script-loaded', initializeChat)
    }

    return () => {
      window.removeEventListener('jotform-script-loaded', initializeChat)
    }
  }, [])

  return (
    <>
      <Script
        src="https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Dispara evento quando o script é carregado
          const event = new Event('jotform-script-loaded')
          window.dispatchEvent(event)
        }}
      />
      
      {/* Container para o chat */}
      <div id="JotformAgent-0195976eee5d7a5685b06080f9206ccf3668" className="jotform-chat-container" />
    </>
  )
}