export function Testimonials() {
    const testimonials = [
      {
        name: "Carlos Silva",
        role: "Ex-aluno, agora Front-end Jr @ Nubank",
        text: "O método APV mudou minha vida! Em 3 meses consegui minha primeira vaga como desenvolvedor. As mentorias práticas e o direcionamento correto fizeram toda diferença.",
        photo: "https://randomuser.me/api/portraits/men/1.jpg"
      },
      {
        name: "Fernanda Costa",
        role: "Back-end Jr @ PicPay",
        text: "Não acreditava que conseguiria tão rápido. A didática e os projetos reais do curso me deram a confiança que faltava nas entrevistas. Recomendo demais!",
        photo: "https://randomuser.me/api/portraits/women/1.jpg"
      },
      {
        name: "Ricardo Almeida",
        role: "Full-stack Jr @ StartUp",
        text: "De entregador a programador em 90 dias! O suporte individual e a comunidade foram essenciais. Valeu cada centavo investido!",
        photo: "https://randomuser.me/api/portraits/men/2.jpg"
      }
    ]
  
    return (
      <div className="relative py-24 bg-gray-900" id="resultados">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Quem já <span className="text-purple-400">transformou</span> a carreira
            </h2>
            <p className="text-gray-400 text-lg">
              Veja o que dizem nossos alunos que já estão atuando no mercado
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative bg-gray-800 p-8 rounded-2xl shadow-xl hover:transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-0 left-8 -translate-y-6 w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-4">
                  <svg
                    className="w-8 h-8 text-purple-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 12c0 1.3.4 2.6 1 3.7-.1 1.1-.8 2.2-1.8 3.2-1.1 1.1-2 2.2-2.2 3.9 0 .2.2.3.4.2 3.1-1.5 5.6-3.8 7.1-6.6C6.9 15.1 6 13.6 6 12c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6c-.4 0-.8 0-1.2-.1.3 1.7 1.6 3.1 3.3 3.7 4.1 1.4 8.7-.4 10.1-4.5s-.4-8.7-4.5-10.1c-1.1-.4-2.3-.4-3.4 0C12.3 3.6 9.7 5 8.4 7.2c.3-.1.6-.2.9-.2 3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6z" />
                  </svg>
                </div>
  
                <p className="text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
  
                <div className="border-t border-gray-700 pt-4">
                  <h3 className="font-bold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-purple-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
  
          <div className="mt-16 text-center">
            <p className="text-gray-400 text-sm">
              *Resultados reais de alunos que aplicaram o método corretamente
            </p>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300">4.9/5 baseado em 247 avaliações</span>
            </div>
          </div>
        </div>
  
        {/* Elementos decorativos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r from-purple-500/10 to-transparent" />
          <div className="absolute right-0 bottom-0 h-full w-1/3 bg-gradient-to-l from-purple-500/10 to-transparent" />
        </div>
      </div>
    )
  }