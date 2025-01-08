"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Section from "./components/Section";
import Pricing from "./components/Pricing";
import About from "./components/About";
import CTA from "./components/CTA";
import { handleClickBuy } from "./utils/handleClickBuy";
import { ContactForm } from "./components/ContactForm";

const navigation = [
  { name: "", href: "#" },
  { name: "", href: "#" },
  { name: "", href: "#" },
  { name: "", href: "#" },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black">
        {/* <header className="absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">@deveprogramar</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
          <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <p>Redes Sociais:</p>
                    <a
                      href="https://www.instagram.com/deveprogramar/"
                      target='_blank'
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://www.tiktok.com/@deveprogramar"
                      target='_blank'
                      className="-mx-3 block rounded-lg px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header> */}

        <div className="relative isolate px-6 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-8 sm:py-8 lg:py-12">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 font-light text-sm leading-6 text-slate-400 ring-1 ring-gray-400/10 hover:ring-gray-400/20">
                para high code, low code e no code.{" "}
                <a
                  href="https://pay.kiwify.com.br/NG9sVjp"
                  className="font-semibold text-purple-600"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Quero participar
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              {/* <h1 className="text-3xl font-bold tracking-tight text-slate-200 sm:text-6xl">
                Levante um dinheiro rápido, sendo Programador
              </h1> */}
              <iframe
                width="100%"
                height="405"
                src="https://www.youtube.com/embed/3UuISvk2qnI?si=U9m_ZoB305AnBTTN&amp;controls=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              {/* <p className="mt-6 font-light text-base leading-8 text-slate-300">
                chega de normalizar demorar tanto pra conseguir sua vaga. Tem perdido tempo com conteúdos que não fazem sentido, e não tem avançado nos estudos ? Bora mudar isso !
              </p> */}
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://pay.kiwify.com.br/NG9sVjp"
                  onClick={handleClickBuy}
                  className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 min-w-36"
                >
                  Eu Quero!
                </a>
                <a
                  href="https://vimeo.com/952720569?share=copy"
                  target="_blank"
                  className="text-sm leading-6 font-light text-slate-400"
                >
                  Saiba Mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          {/* <ContactForm/> */}
          {/* <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div> */}
        </div>
      </div>
      {/* <Section/> */}
      {/* <Pricing/> */}
      {/* <CTA/> */}
      <About />
    </>
  );
}
