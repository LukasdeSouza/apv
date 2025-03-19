'use client'
import { useState } from "react"
import About from "./components/About"
import { FAQ } from "./components/FAQ"
import Pricing from "./components/Pricing"
import Section from "./components/Section"
import  Testimonials  from "./components/Testimonials"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Bars3Icon, PlayCircleIcon, XMarkIcon } from "@heroicons/react/24/outline"
import JotformChat from "./components/JotFormChat"
import VideoPlayer from "./components/VideoPlayer"
// import { TestimonialsNOSSR } from "./components/TestimonialsNoSSR"
// import { TestimonialNoSSR } from "./components/TestimonialsNoSSR"

const navigation = [
  { name: 'Como Funciona', href: '#metodo' },
  { name: 'Depoimentos', href: '#resultados' },
  { name: 'Investimento', href: '#investimento' },
  { name: 'Garantia', href: '#garantia' },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800">
        {/* Header */}
        <header className="fixed inset-x-0 top-0 z-50 bg-gray-900/90 backdrop-blur">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            {/* Logo */}
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="text-2xl font-bold text-white">Método</span>
                <span className="text-2xl font-bold text-purple-500">APV</span>
              </a>
            </div>

            {/* Menu Desktop */}
            {/* <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div> */}

            {/* CTA Desktop */}
            {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#investimento"
                className="text-sm font-semibold leading-6 text-white bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
              >
                Quero Minha Vaga
              </a>
            </div> */}

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50 bg-gray-900/80" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold text-purple-500">APV</div>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/25">
                  {/* <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-gray-300 hover:bg-gray-800"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                  {/* <div className="py-6">
                    <a
                      href="#investimento"
                      className="-mx-3 block rounded-lg bg-purple-600 px-3 py-2.5 text-base font-semibold text-white text-center hover:bg-purple-700"
                    >
                      Quero Minha Vaga
                    </a>
                  </div> */}
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>

        {/* Hero Section */}
        <div className="relative isolate px-6 pt-32 lg:px-8">
          <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-purple-900/20 via-gray-900 to-purple-900/20 animate-gradient-pulse" />

          <div className="mx-auto max-w-3xl text-center pb-12">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300 text-transparent">
              Sua Carreira Tech Começa Aqui
            </h1>

            {/* Video Section */}
            {/* <div className="mt-12 group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/20 transition-shadow">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent" />
              <button className="absolute inset-0 flex items-center justify-center">
                <PlayCircleIcon className="h-20 w-20 text-purple-400 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
              </button>
            </div> */}
            <VideoPlayer/>

            {/* CTAs */}
            {/* <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 pb-4">
              <a
                href="#investimento"
                className="relative overflow-hidden px-8 py-4 text-lg font-bold text-white bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl hover:shadow-purple-500/30 hover:scale-[1.02] transition-all"
              >
                <span className="relative z-10">Iniciar Jornada Agora</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-20 transition-opacity" />
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Seções seguintes mantidas com componentes otimizados */}
      {/* <Section />
      <Testimonials />
      <Pricing />
      <FAQ />
      <About /> */}

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
                  <a href="https://www.linkedin.com/in/lucas-silva-227185211/" target="_blank" className="text-gray-400 hover:text-purple-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
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