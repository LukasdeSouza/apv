'use client'

import { useState } from "react";
import CustomToast from "./CustomToast";
import toast from "react-hot-toast";

export function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "b09791f5-4409-4be4-8cb9-e1d30911f158",
        email: e.target.email.value,
        phone: e.target.phone.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
    }
    setLoading(false)
    return toast.custom((t: any) => (
      <div
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://avatars.githubusercontent.com/u/99886292?v=4"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                Lucas Silva
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Boa! Em breve você começa a receber as vagas
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.remove(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Fechar
          </button>
        </div>
      </div>
    ))
    // return toast.success('boa! jájá você vai começar a receber as vagas')
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <p className="text-base font-semibold text-slate-300">Opa! só uma pausa.</p>
      <span className="text-sm font-light text-slate-400" >quer receber vagas pra iniciantes direto pelo whatsapp ou email? Se cadastra aí</span>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex font-light text-xs flex-col justify-start text-slate-400">
          <label htmlFor="email">Email</label>
          <input className="p-2 rounded-md" type="email" name="email" required placeholder="email@example.com" />
        </div>
        <div className="mt-2 flex font-light text-xs flex-col justify-start text-slate-400">
          <label htmlFor="message">Telefone</label>
          <input className="p-2 rounded-md min-w-64" type="tel" name="phone" required placeholder="XX XXXXX-XXXX" />
        </div>
        <button className="w-full mt-4 rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-slate-200 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 min-w-36" type="submit">
          {loading ? 'Encaminhando...' : 'Enviar'}
        </button>
      </form>
    </div>
  );
}