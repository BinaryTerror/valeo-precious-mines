import Reveal from './Reveal'

const SERVICES = [
  {
    num: '01',
    title: 'Minas',
    desc: 'Gestão e operação de concessões mineiras, da prospecção à lavra activa.',
    path: 'M12 2 L21 9 L21 21 L3 21 L3 9 Z M9 21 V13 H15 V21',
  },
  {
    num: '02',
    title: 'Pedras preciosas',
    desc: 'Rubis, esmeraldas e outras gemas seleccionadas, certificadas e prontas para exportação.',
    path: 'M12 2 L20 8 L20 16 L12 22 L4 16 L4 8 Z M12 2v20M4 8l8 6 8-6',
  },
  {
    num: '03',
    title: 'Ouro',
    desc: 'Extracção, refinação e comercialização de ouro com origem verificada.',
    path: 'M8 12l3 3 5-6',
    circle: true,
  },
  {
    num: '04',
    title: 'Minerais & cobre',
    desc: 'Exploração de minerais estratégicos, incluindo cobre e outros recursos industriais.',
    path: 'M4 21V9l8-6 8 6v12 M9 21V13h6v8',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-24 sm:py-32 bg-ice">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-5">
        <Reveal className="max-w-[640px] mb-16">
          <div className="flex items-center gap-2.5 mb-4 font-mono text-xs tracking-[0.14em] uppercase text-gold before:content-[''] before:w-[22px] before:h-px before:bg-gold">
            O que oferecemos
          </div>
          <h2 className="font-display font-semibold text-ink text-[28px] sm:text-[36px] lg:text-[42px]">
            Quatro áreas de recursos, uma só cadeia de confiança.
          </h2>
          <p className="text-[#4a5b6d] text-[16.5px] mt-4">
            Da concessão mineira à entrega ao comprador final — geridas com o mesmo padrão de
            exigência.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((s) => (
              <div
                key={s.num}
                className="group rounded-[24px] border border-white/40 bg-white/70 p-10 shadow-[0_18px_45px_rgba(6,21,35,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_60px_rgba(6,21,35,0.14)]"
              >
                <span className="font-mono text-xs text-gold tracking-wider">{s.num}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.6}
                  className="w-[46px] h-[46px] my-5 text-navy group-hover:text-gold-soft transition-colors duration-250"
                >
                  {s.circle && <circle cx="12" cy="12" r="9" />}
                  <path d={s.path} />
                </svg>
                <h3 className="text-[19px] font-display font-semibold mb-2.5 text-ink group-hover:text-white transition-colors duration-250">
                  {s.title}
                </h3>
                <p className="text-sm leading-7 text-[#4a5b6d] group-hover:text-[#334455] transition-colors duration-250">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
