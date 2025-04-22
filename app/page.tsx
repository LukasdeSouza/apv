'use client'
import { useEffect, useState } from "react"
import Testimonials from "./components/Testimonials"
import { ArrowRightIcon, CheckCircleIcon, LockClosedIcon, NoSymbolIcon } from "@heroicons/react/24/outline"
import VideoPlayer from "./components/VideoPlayer"
import { CountdownTimer } from "./components/CountDownTimer"
// import { TestimonialsNOSSR } from "./components/TestimonialsNoSSR"
// import { TestimonialNoSSR } from "./components/TestimonialsNoSSR"

const navigation = [
  { name: 'Como Funciona', href: '#metodo' },
  { name: 'Depoimentos', href: '#resultados' },
  { name: 'Investimento', href: '#investimento' },
  { name: 'Garantia', href: '#garantia' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen">
        {/* Header Fixo */}
        <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/90 backdrop-blur shadow-lg">
          <nav className="flex items-center justify-between p-6 lg:px-8">
            <div className="flex lg:flex-1">
              <a href="#" className="flex items-center gap-2">
                <span className="text-2xl font-bold text-white">Método</span>
                <span className="text-2xl font-bold text-purple-500">APV</span>
                <span className="text-xs text-purple-400/80 bg-purple-900/30 px-2 py-1 rounded-full">Workshop Gratuito</span>
              </a>
            </div>

            {/* CTA Flutuante */}
            <div className="hidden lg:flex">
              <a href="#formulario" className="relative overflow-hidden px-6 py-3 text-sm font-bold text-white bg-purple-600 rounded-lg hover:bg-purple-700 transition-all group">
                <span className="relative z-10">Garantir Minha Vaga Agora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
              </a>
            </div>
          </nav>
        </header>

        {/* Seção Hero com Formulário */}
        <div className="relative isolate px-6 pt-32 lg:px-8 pb-24">
          <div className="mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
            {/* Conteúdo de Texto */}
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block bg-purple-900/30 px-4 py-2 rounded-full mb-6">
                <span className="text-sm text-purple-400">Workshop Online e Gratuito</span>
              </div>

              <h1 className="text-4xl font-bold text-white sm:text-6xl leading-tight">
                Descubra o Método Comprovado Para Conseguir Sua Primeira Vaga em
                <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"> Programação { " "}</span>
                até o Final do Ano
              </h1>
              <span className="block text-purple-400 text-2xl mt-2"><b>11/05 as 9 da noite</b> - Últimas 28 vagas disponíveis</span>

              <ul className="space-y-4 text-gray-300 text-lg">
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  Método simplificado para iniciantes (mesmo sem experiência)
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  Estratégias de currículo que chamam atenção dos recrutadores
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  Técnicas de LinkedIn que geram até 5x mais oportunidades
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  Como ser chamado e participar de entrevistas
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircleIcon className="h-6 w-6 text-purple-400 flex-shrink-0" />
                  Aumentando suas chances de conseguir uma vaga
                </li>
              </ul>
            </div>

            {/* Card do Formulário */}
            <div className="lg:w-1/2 w-full">
              <div className="relative bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-purple-900/50 z-20">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-pink-500/30 rounded-2xl blur-sm pointer-events-none" />

                <h3 className="text-2xl font-bold text-white mb-6">
                  Inscreva-se Gratuitamente no Workshop
                  <span className="block text-purple-400 text-lg mt-2">11/05 as 9 da noite - Últimas 28 vagas disponíveis</span>
                </h3>

                <form className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Seu melhor e-mail</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="exemplo@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">WhatsApp (com DDD)</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-lg hover:from-purple-700 hover:to-pink-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                    Garantir Minha Vaga Agora
                  </button>

                  <p className="text-center text-gray-400 text-sm mt-4">
                    Ao se inscrever, você concorda com nossa
                    <a href="#" className="text-purple-400 hover:text-purple-300 ml-1">Política de Privacidade</a>
                  </p>
                </form>
              </div>

              {/* Selos de Segurança */}
              <div className="flex items-center justify-center gap-6 mt-8 opacity-80">
                <div className="flex items-center gap-2">
                  <LockClosedIcon className="h-5 w-5 text-green-400" />
                  <span className="text-sm text-gray-300">Dados 100% protegidos</span>
                </div>
                <div className="flex items-center gap-2">
                  <NoSymbolIcon className="h-5 w-5 text-red-400" />
                  <span className="text-sm text-gray-300">Sem spam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Prova Social */}
        <div className="py-24 bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold text-white mb-16">
              Já ajudamos diversas pessoas a ingressarem na área da Programação
            </h2>
            <Testimonials />

            {/* <div className="grid md:grid-cols-3 gap-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-800/50 p-8 rounded-xl border border-purple-900/30">
                  <p className="text-gray-300 italic mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-sm text-purple-400">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}
            <div className="mx-auto max-w-3xl text-center py-12">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 text-transparent">
                Sua Carreira como Programador Começa Aqui
              </h1>
              <VideoPlayer />
            </div>
          </div>
        </div>

        {/* Contador Regressivo */}
        {/* <div className="fixed bottom-0 left-0 right-0 bg-purple-900/80 backdrop-blur-sm py-4 z-50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 flex items-center justify-between">
            <div className="text-white">
              <span className="block text-sm">Vagas restantes:</span>
              <span className="text-2xl font-bold">23</span>
            </div>

            <CountdownTimer />

            <a
              href="#formulario"
              className="px-8 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Garantir Vaga Agora
            </a>
          </div>
        </div> */}


      </div>
      {/* Seções seguintes mantidas com componentes otimizados */}
      {/* <Section /> */}
      {/* <Pricing /> */}
      {/* <FAQ /> */}
      {/* <About /> */}

      {/* Footer CTA */}
      <footer className="bg-gradient-to-b from-slate-900 to-purple-900 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Seção Logo */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-gray-200">Método</span>
                <span className="text-2xl font-bold text-purple-400">APV</span>
              </div>
              <p className="text-sm text-gray-400">
                CNPJ: 58.586.596/0001-33<br />
              </p>
            </div>

            {/* Links */}
            {/* <div className="space-y-4">
              <h5 className="text-sm font-semibold text-purple-400">Recursos</h5>
              <nav className="flex flex-col space-y-2">
                <a href="#metodo" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Método Completo
                </a>
                <a href="#resultados" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Cases de Sucesso
                </a>
                <a href="#investimento" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Planos
                </a>
              </nav>
            </div> */}

            {/* Legal */}
            {/* <div className="space-y-4">
              <h5 className="text-sm font-semibold text-purple-400">Jurídico</h5>
              <nav className="flex flex-col space-y-2">
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Política de Privacidade
                </a>
                <a href="#garantia" className="text-gray-400 hover:text-purple-300 transition-colors">
                  Garantia
                </a>
              </nav>
            </div> */}

            {/* Contato */}
            <div className="space-y-4">
              <h5 className="text-sm font-semibold text-purple-400">Contato</h5>
              <div className="flex flex-col space-y-2">
                <a href="mailto:lucas@ateaprimeiravaga.online" className="text-gray-400 hover:text-purple-300 transition-colors">
                  lucas@ateaprimeiravaga.online
                </a>
                <div className="flex space-x-4 mt-2">
                  {/* <a href="https://www.linkedin.com/in/lucas-silva-227185211/" target="_blank" className="text-gray-400 hover:text-purple-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a> */}
                  <a href="https://www.instagram.com/deveprogramar/" target="_blank" className="text-gray-400 hover:text-purple-300">
                    <span className="sr-only">Instagram</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-purple-900/30">
            <p className="text-xs text-gray-500 text-center">
              © 2024 APV Método. Todos os direitos reservados.<br />
              Desenvolvido com ❤️ por desenvolvedores brasileiros
            </p>
          </div>
        </div>
      </footer>

      {/* <JotformChat /> */}
    </>
  )
}