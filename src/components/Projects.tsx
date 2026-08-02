import Reveal from './Reveal'

const PROJECTS = [
  {
    tag: 'Pedras preciosas',
    title: 'Projeto de Pedras Preciosas',
    loc: 'Moçambique',
    desc: 'Em desenvolvimento — A Valeo Precious Mines está a desenvolver oportunidades no setor de recursos minerais em Moçambique.',
    status: 'Em desenvolvimento',
    image: '',
  },
]

export default function Projects() {
  return (
    <section id="minas" className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-5">
        <Reveal className="max-w-[640px] mb-16">
          <div className="flex items-center gap-2.5 mb-4 font-mono text-xs tracking-[0.14em] uppercase text-gold before:content-[''] before:w-[22px] before:h-px before:bg-gold">
            Presença no terreno
          </div>
          <h2 className="font-display font-semibold text-ink text-[28px] sm:text-[36px] lg:text-[42px]">
            Projetos em desenvolvimento
          </h2>
          <p className="text-[#4a5b6d] text-[16.5px] mt-4">
            A Valeo Precious Mines está a desenvolver oportunidades no setor de recursos minerais em
            Moçambique. As iniciativas mencionadas são descritivas de interesse e estão em fase de
            estudo ou desenvolvimento.
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROJECTS.map((p) => (
              <div
                key={p.title}
                className="rounded-[24px] border border-white/45 bg-white/80 p-7 shadow-[0_18px_45px_rgba(6,21,35,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_60px_rgba(6,21,35,0.14)]"
              >
                {p.image ? (
                  <div className="mb-4 h-40 w-full overflow-hidden rounded-lg image-filter-hover">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                  </div>
                ) : null}
                <span className="font-mono text-[11px] text-gold uppercase tracking-wider">{p.tag}</span>
                <h3 className="font-display font-semibold text-[21px] text-navy mt-3.5 mb-2">{p.title}</h3>
                <div className="font-mono text-[13px] text-[#6a7b8b] mb-4">{p.loc}</div>
                <p className="text-sm leading-7 text-[#4a5b6d]">{p.desc}</p>
                <span className="inline-block mt-[18px] rounded-full border border-navy/15 bg-[#f7f7f2] px-3 py-1.5 text-xs font-mono text-navy">
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
