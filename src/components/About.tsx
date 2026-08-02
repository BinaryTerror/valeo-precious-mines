import Reveal from './Reveal'

const VALUES = [
  {
    title: 'Rastreabilidade',
    desc: 'Registo documentado desde a mina até à entrega ao cliente.',
    path: 'M12 2 L20 8 L20 16 L12 22 L4 16 L4 8 Z',
  },
  {
    title: 'Operação responsável',
    desc: 'Práticas éticas e ambientalmente sustentáveis em cada etapa.',
    path: 'M12 7v5l3 3',
    circle: true,
  },
  {
    title: 'Capacidade logística',
    desc: 'Armazenamento seguro e transporte para mercados nacionais e globais.',
    path: 'M3 12h4l3 8 4-16 3 8h4',
  },
]

export default function About() {
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-5 grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
        <Reveal>
          <div className="flex items-center gap-2.5 mb-4 font-mono text-xs tracking-[0.14em] uppercase text-gold before:content-[''] before:w-[22px] before:h-px before:bg-gold">
            Quem somos
          </div>
          <h2 className="font-display font-semibold text-ink text-[26px] sm:text-[32px] lg:text-[36px] mb-6">
            Uma empresa moçambicana construída sobre rigor técnico e relações de confiança.
          </h2>
          <div className="space-y-4 text-[#3c4c5c] text-base">
            <p>
              A <strong className="text-navy">Valeo Precious Mines</strong> actua ao longo de toda a
              cadeia de valor mineira: prospecção, exploração, extracção, processamento,
              armazenamento, transporte e comercialização de pedras preciosas, ouro e outros minerais
              em Moçambique.
            </p>
            <p>
              Trabalhamos com parceiros, investidores e compradores internacionais, assegurando que
              cada operação cumpre os padrões legais e ambientais exigidos, desde a licença de
              exploração até à certificação final do produto.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative glass-card p-8">
            <div className="relative grid gap-5">
              {VALUES.map((v) => (
                <div key={v.title} className="flex gap-4 items-start card-hover hover-target">
                  <div className="flex-none w-11 h-11 flex items-center justify-center bg-navy text-gold-soft hex-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                      {v.circle && <circle cx="12" cy="12" r="9" />}
                      <path d={v.path} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-[15.5px] text-navy font-semibold mb-1">{v.title}</h4>
                    <p className="text-sm text-[#4a5b6d]">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
