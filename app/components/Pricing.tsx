import { CheckIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { BanknotesIcon, CreditCardIcon, QrCodeIcon } from '@heroicons/react/24/outline'

const includedFeatures = [
  'Otimização Completa do LinkedIn',
  'Modelos de Currículo Aprovados',
  'Estratégias de Networking Eficaz',
  'Mentoria para Entrevistas',
  'Acesso ao Grupo VIP de Vagas',
  'Gestão de Perfil no GitHub',
  'Técnicas de Follow-up com Recrutadores',
  'Atualizações Semanais do Mercado'
]

export default function Pricing() {
  return (
    <div className="bg-gray-900 py-24" id="oferta">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center mb-8 bg-purple-500/20 px-6 py-2 rounded-full text-sm font-semibold text-purple-400">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Sem Surpresas - 100% Transparente
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tudo que você precisa para sua
            <span className="text-purple-400"> primeira vaga</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
            Programa completo com suporte individual + acesso vitalício à plataforma. Comece hoje e pague
            <span className="line-through opacity-50 mx-1">R$997</span>
            <span className="text-purple-400 font-bold">R$299,97</span>
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-700 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Seção de Vídeo */}
              <div className="md:col-span-2">
                <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden border border-gray-700 relative group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircleIcon className="h-20 w-20 text-purple-500/50 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="absolute bottom-4 left-4 text-sm text-gray-300">
                    Demonstração da plataforma
                  </span>
                </div>
              </div>

              {/* Benefícios Principais */}
              <div className="space-y-8">
                <div className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Mentoria Individual
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                      Call de diagnóstico inicial
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                      Acompanhamento mensal
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                      Revisão de projetos
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Acesso Exclusivo
                  </h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                      Plataforma EAD premium
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                      Grupo VIP de vagas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon className="h-5 w-5 text-green-400 flex-shrink-0" />
                      Comunidade privada
                    </li>
                  </ul>
                </div>
              </div>

              {/* Lista Completa */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white">Inclui tudo isso:</h3>
                <ul className="grid grid-cols-1 gap-4 text-sm text-gray-300">
                  {includedFeatures.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon className="h-6 w-5 flex-none text-purple-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Card de Preço */}
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-800 py-10 text-center ring-1 ring-inset ring-gray-700/10 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="text-4xl font-bold text-white">12x</span>
                  <div className="text-left">
                    <span className="text-2xl font-bold text-purple-400">R$299,97</span>
                    <p className="text-xs text-gray-400 mt-1">ou R$2.997 à vista</p>
                  </div>
                </div>

                <a
                  href="https://pay.kiwify.com.br/NG9sVjp"
                  className="mt-6 w-full inline-flex items-center justify-center rounded-lg bg-purple-600 px-6 py-4 text-lg font-bold text-white hover:bg-purple-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/20"
                >
                  Começar Agora →
                </a>

                <div className="mt-8 flex items-center gap-3 text-left bg-green-900/20 p-4 rounded-lg">
                  <svg className="w-8 h-8 flex-shrink-0 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm font-semibold text-green-400">Garantia de 7 Dias</p>
                    <p className="text-xs text-gray-400">Reembolso total sem burocracia</p>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <CreditCardIcon className="mx-auto h-10 w-10 text-purple-400" />
                    <div className="text-sm font-medium text-gray-300">Cartão de Crédito</div>
                    <div className="text-xs text-gray-500">Até 12x</div>
                  </div>
                  <div className="space-y-2">
                    <BanknotesIcon className="mx-auto h-10 w-10 text-purple-400" />
                    <div className="text-sm font-medium text-gray-300">Parcelado</div>
                    <div className="text-xs text-gray-500">Sem juros</div>
                  </div>
                  <div className="space-y-2">
                    <QrCodeIcon className="mx-auto h-10 w-10 text-purple-400" />
                    <div className="text-sm font-medium text-gray-300">PIX</div>
                    <div className="text-xs text-gray-500">5% de desconto</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}