import { useState, type FormEvent } from 'react'
import Reveal from './Reveal'

const INTERESTS = ['Pedras preciosas', 'Ouro', 'Minerais e cobre', 'Minas / Concessões', 'Parceria de investimento']

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // TODO: ligar a um serviço real (Formspree, EmailJS, backend próprio) para enviar o email.
    setSent(true)
    const form = e.currentTarget
    setTimeout(() => {
      setSent(false)
      form.reset()
    }, 2600)
  }

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-navy-deep text-white">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-5 grid grid-cols-1 md:grid-cols-2 gap-11 md:gap-16">
        <Reveal>
          <div className="flex items-center gap-2.5 mb-4 font-mono text-xs tracking-[0.14em] uppercase text-gold before:content-[''] before:w-[22px] before:h-px before:bg-gold">
            Contacto
          </div>
          <h2 className="font-display font-semibold text-white text-[28px] sm:text-[36px] lg:text-[40px] mb-5">
            Vamos falar sobre o seu próximo negócio mineiro.
          </h2>
          <p className="text-ice/70 mb-9 max-w-[440px]">
            Quer seja investidor, comprador ou parceiro de exploração, a nossa equipa responde com
            informação técnica clara e directa.
          </p>

          <div className="flex gap-4 py-4.5 py-[18px] border-t border-white/15">
            <span className="font-mono text-[11px] text-gold uppercase tracking-wider w-[100px] flex-none pt-0.5">
              Morada
            </span>
            <span className="text-ice text-[15px]">Maputo, Moçambique</span>
          </div>
          <div className="flex gap-4 py-4.5 py-[18px] border-t border-white/15">
            <span className="font-mono text-[11px] text-gold uppercase tracking-wider w-[100px] flex-none pt-0.5">
              Telefone
            </span>
            <span className="text-ice text-[15px]">
              <a href="tel:+258840000000" className="hover:text-gold-soft transition-colors">
                +258 84 000 0000
              </a>
            </span>
          </div>
          <div className="flex gap-4 py-4.5 py-[18px] border-t border-b border-white/15">
            <span className="font-mono text-[11px] text-gold uppercase tracking-wider w-[100px] flex-none pt-0.5">
              Email
            </span>
            <span className="text-ice text-[15px]">
              <a href="mailto:info@valeoprecious.co.mz" className="hover:text-gold-soft transition-colors">
                info@valeoprecious.co.mz
              </a>
            </span>
          </div>
        </Reveal>

        <Reveal>
          <form onSubmit={handleSubmit} className="grid gap-4.5 gap-[18px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4.5 gap-[18px]">
              <div>
                <label htmlFor="nome" className="block font-mono text-[11px] text-gold-soft uppercase tracking-wide mb-2">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  placeholder="O seu nome"
                  className="w-full bg-white/5 border border-white/15 text-white px-3.5 py-3 text-[14.5px] placeholder:text-ice/35 focus:border-gold focus:bg-white/10 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-[11px] text-gold-soft uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="voce@empresa.com"
                  className="w-full bg-white/5 border border-white/15 text-white px-3.5 py-3 text-[14.5px] placeholder:text-ice/35 focus:border-gold focus:bg-white/10 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="interesse" className="block font-mono text-[11px] text-gold-soft uppercase tracking-wide mb-2">
                Área de interesse
              </label>
              <select
                id="interesse"
                name="interesse"
                className="w-full bg-white/5 border border-white/15 text-ice px-3.5 py-3 text-[14.5px] focus:border-gold focus:bg-white/10 focus:outline-none transition-colors"
              >
                {INTERESTS.map((i) => (
                  <option key={i} className="bg-navy-deep">
                    {i}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensagem" className="block font-mono text-[11px] text-gold-soft uppercase tracking-wide mb-2">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                required
                placeholder="Conte-nos sobre o seu interesse ou projecto..."
                className="w-full min-h-[110px] bg-white/5 border border-white/15 text-white px-3.5 py-3 text-[14.5px] placeholder:text-ice/35 focus:border-gold focus:bg-white/10 focus:outline-none transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              className={`mt-1.5 mt-[6px] font-display font-semibold text-[14.5px] tracking-wide px-5 py-4 transition-all hover:-translate-y-0.5 hover-target ${
                sent ? 'bg-[#8FBF7F] text-navy-deep' : 'bg-gold text-navy-deep hover:bg-gold-soft'
              }`}
            >
              {sent ? 'Mensagem enviada ✓' : 'Enviar mensagem'}
            </button>
            <p className="text-xs text-ice/45 -mt-1.5 -mt-[6px]">Respondemos normalmente em 1 a 2 dias úteis.</p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
