import { CheckIcon } from '@heroicons/react/20/solid'
import TypingAnimation from './magicui/typing-animation'

const includedFeatures = [
  ' Tenha acesso as calls, mentorias ao vivo, correção de CV, Linkedin',
  'dicas profissionais, acompanhamento individual',
  ' projetos individuas e em equipe, por tempo integral',
  'além de ebooks e aulas gravadas',
]

export default function Pricing() {
  return (
    <div className="bg-black py-12 sm:py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Simples e sem Pegadinhas</h2>
          <p className="mt-3 text-base font-light leading-8 text-slate-400">
            Nada de promessas vazias, apenas planejamento, processo, execução e perseverança, tudo isso com um profissional de tecnologia te acompanhando, e uma comunidade engajada, disponível para tirar dúvidas e te auxiliar.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-700 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-slate-3300">Acesso Integral</h3>
            <p className="mt-6 text-xl font-bold leading-7 text-slate-200">
              MÉTODO APV - Até a Primeira Vaga
            </p>
            <span className='text-xs font-light text-slate-400'>a melhor metodologia pra você conseguir sua primeira vaga como programador de uma vez por todas</span>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-purple-600">O que está incluso?</h4>
              <div className="h-px flex-auto bg-gray-700" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 font-light text-sm leading-6 text-slate-400 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-900 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-lg font-semibold text-slate-400">Pague uma vez, acesse sempre</p>
                <span className='text-xs font-light text-slate-500 '>vai ter acesso a tudo, projetos, aulas, mentorias, e mais</span>
                  <TypingAnimation className="mt-6 text-slate-200 flex items-baseline justify-center gap-x-2" text='R$297.99 BRL' duration={200}/>
                <a
                  href="https://pay.kiwify.com.br/P8RAJyU"
                  className="mt-10 block w-full rounded-md bg-purple-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Ter acesso eterno!
                </a>
                <p className="mt-6 text-xs font-light leading-5 text-slate-600">
                 ✅ Garantia de 7 dias úteis para reembolso, sem letras miúdas *
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
