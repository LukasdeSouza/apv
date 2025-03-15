import { BriefcaseIcon, ChartBarIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const features = [
  {
    title: "Perfil Atraente para Recrutadores",
    description: "Transforme seu LinkedIn em um ímã de oportunidades com técnicas comprovadas de otimização de perfil",
    icon: UserGroupIcon,
    stats: "Aumento médio de 100% em visualizações do perfil"
  },
  {
    title: "Estratégia de Busca Eficaz",
    description: "Plano personalizado para encontrar vagas alinhadas com seu perfil e objetivos",
    icon: ChartBarIcon,
    stats: "+87% de eficiência na busca"
  },
  {
    title: "Preparação Completa",
    description: "Domine técnicas de entrevista e negociação salarial com simulações realistas",
    icon: BriefcaseIcon,
    stats: "84% de aprovação em processos"
  },
]

export default function Section() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-24 sm:py-32" id="metodo">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-gray-900 to-purple-900/10" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:items-center lg:gap-x-8">
          {/* Conteúdo Textual */}
          <div className="lg:pr-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 text-transparent">
                De Iniciante a Profissional Contratado
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Método passo a passo para construir uma presença profissional que atrai recrutadores
              </p>

              <div className="mt-12 space-y-10">
                {features.map((feature) => (
                  <div 
                    key={feature.title} 
                    className="group relative pl-16 hover:transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 backdrop-blur-sm border border-purple-500/30 group-hover:bg-purple-600/40 transition-colors">
                      <feature.icon className="h-6 w-6 text-purple-400 group-hover:text-purple-300" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                    <p className="mt-3 text-gray-400 leading-relaxed">{feature.description}</p>
                    <div className="mt-4 inline-flex items-center px-4 py-2 bg-gray-800 rounded-full text-sm font-medium text-purple-400">
                      {feature.stats}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href="#investimento"
                  className="px-8 py-4 text-lg font-bold text-white bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all"
                >
                  🚀 Iniciar Transformação Agora
                </a>
                <button
                  onClick={() => document.getElementById('agendamento')?.scrollIntoView({behavior: 'smooth'})}
                  className="px-8 py-4 text-lg font-semibold text-gray-300 border border-gray-700 rounded-xl hover:bg-gray-800/50 transition-colors"
                >
                  📅 Agendar Consultoria Gratuita
                </button>
              </div>
            </div>
          </div>

          {/* Seção de Imagem */}
          <div className="relative lg:pl-8">
            <div className="relative aspect-[1.1] w-full rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50">
              <Image
                src="https://images.pexels.com/photos/7775639/pexels-photo-7775639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Alunos comemorando contratação"
                width={1260}  // Adicione a largura real da imagem
                height={750}   // Adicione a altura real da imagem
                className="h-full w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />
              
              {/* Overlay com Estatísticas */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-900/80 p-4 rounded-xl backdrop-blur border border-gray-800/50">
                    <div className="text-2xl font-bold text-purple-400">300+</div>
                    <div className="text-sm text-gray-300">Alunos Ativos</div>
                  </div>
                  <div className="bg-gray-900/80 p-4 rounded-xl backdrop-blur border border-gray-800/50">
                    <div className="text-2xl font-bold text-purple-400">4.8★</div>
                    <div className="text-sm text-gray-300">Avaliação Média</div>
                  </div>
                  <div className="bg-gray-900/80 p-4 rounded-xl backdrop-blur border border-gray-800/50">
                    <div className="text-2xl font-bold text-purple-400">7d</div>
                    <div className="text-sm text-gray-300">Garantia Total</div>
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