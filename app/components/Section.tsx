import { BriefcaseIcon, ComputerDesktopIcon, CursorArrowRaysIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Aprenda com quem atua no mercado de programação.',
    description:
      'Existe um diferente gigante entre a programação dos cursos e a programação do dia dia, no método ATP, você vai aprender a utilizar a programação para resolver problemas do mundo real.',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Participe de uma mentoria individual.',
    description: 'Sabemos que cada pessoa tem seus pontos individuais de melhora, por isso, você participar de um ONE-ON-ONE afim de encontrar seus pontos de oportunidade e aprimora-los.',
    icon: CursorArrowRaysIcon,
  },
  {
    name: 'Até a primeira vaga.',
    description: 'Nós não te abandonaremos, até você conseguir a primeira vaga, ou seja, nosso objetivo é ver você empregado!',
    icon: BriefcaseIcon,
  },
]

export default function Section() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-purple-600">o que você vai aprender:</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-slate-300 sm:text-4xl">Um caminho correto</p>
              <p className="mt-2 font-light text-base leading-8 text-slate-400">
                Mesmo se você for iniciante, aprenda a ir pelo caminho certo
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 font-light text-slate-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-slate-300">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
