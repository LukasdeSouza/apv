import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Preciso ter experiência prévia em programação?",
    answer: "Experiência de Trabalho não mas é necessário ao menos estar estudando a área da tecnologia. O método foi desenvolvido para iniciantes. Começamos do zero e te levamos até a contratação."
  },
  {
    question: "Quanto tempo preciso dedicar?",
    answer: "O método foi planejado para se adaptar à sua rotina. Com apenas 30min/dia você já verá resultados significativos."
  },
  {
    question: "Qual o formato das aulas?",
    answer: "Aulas em vídeo curtas e objetivas, exercícios práticos e mentorias mensais ao vivo."
  }
]

export function FAQ() {
  return (
    <div className="py-24 bg-gray-900" id="duvidas">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Perguntas <span className="text-purple-400">Frequentes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Tire suas principais dúvidas sobre o método APV
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-6 py-4 text-left bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                    <span className="font-medium text-gray-200">{faq.question}</span>
                    <ChevronUpIcon className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-purple-400`} />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pt-4 pb-6 text-gray-400 bg-gray-800 rounded-b-lg">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Restou alguma dúvida?{' '}
            <a 
              href="https://wa.me/5511999999999" 
              className="text-purple-400 hover:text-purple-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale diretamente com nosso time
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}