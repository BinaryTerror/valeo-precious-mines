const STATS = [
  { num: '04', label: 'Áreas de recursos: pedras preciosas, ouro, minerais e cobre' },
  { num: '—', label: 'Projetos em desenvolvimento' },
  { num: 'MZ', label: 'Presença nacional, ligação a mercados internacionais' },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[100px] overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-90 pointer-events-none"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="rgba(74,144,217,0.16)" strokeWidth={1} fill="none">
          <polygon points="1050,60 1250,140 1220,340 1000,300" />
          <polygon points="1250,140 1400,220 1380,420 1220,340" />
          <polygon points="1000,300 1220,340 1150,560 950,520" />
          <polygon points="1220,340 1380,420 1330,620 1150,560" />
          <polygon points="950,520 1150,560 1080,760 900,720" />
          <polygon points="1150,560 1330,620 1260,820 1080,760" />
        </g>
        <g stroke="rgba(201,155,63,0.14)" strokeWidth={1} fill="none">
          <polygon points="80,520 260,470 300,650 140,700" />
          <polygon points="260,470 420,510 400,690 300,650" />
        </g>
      </svg>

      <div className="relative z-[2] max-w-[1200px] mx-auto px-8 sm:px-5 grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14 items-center w-full">
        <div>
          <div className="flex items-center gap-2.5 mb-4 font-mono text-xs tracking-[0.14em] uppercase text-gold before:content-[''] before:w-[22px] before:h-px before:bg-gold">
            Moçambique · Recursos Minerais
          </div>
          <h1 className="font-display font-semibold text-white leading-[1.06] text-[38px] sm:text-[48px] lg:text-[64px] mb-6">
            Da rocha à joia,
            <br />
            do subsolo ao <span className="text-gold">mercado global.</span>
          </h1>
          <p className="text-ice/80 text-lg max-w-[520px] mb-9">
            A Valeo Precious Mines está a desenvolver oportunidades no setor de recursos minerais em
            Moçambique, com foco em práticas responsáveis e transparência nas operações futuras.
          </p>

          <div className="flex gap-4 flex-wrap mb-14">
            <a
              href="#servicos"
              className="inline-flex items-center gap-2.5 bg-gold text-navy-deep px-7 py-4 text-sm font-semibold tracking-wide hover:bg-gold-soft hover:-translate-y-0.5 transition-all hover-target"
            >
              Ver o que oferecemos →
            </a>
            <a
              href="#contacto"
              className="border border-white/15 text-white px-7 py-4 text-sm font-medium hover:border-gold hover:bg-white/5 transition-all hover-target"
            >
              Falar com um especialista
            </a>
          </div>

          <div className="grid grid-cols-3 border-t border-white/15 pt-6 max-w-[560px]">
            {STATS.map((s) => (
              <div key={s.num} className="pr-4">
                <span className="block font-mono text-gold-soft text-2xl font-medium mb-1.5">{s.num}</span>
                <span className="text-ice/60 text-xs leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <img src="./image_copy.png" alt="Diamante azul 3D" className="hero-gem" />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2.5 font-mono text-[11px] tracking-[0.14em] uppercase text-ice/50">
        <span>Explorar</span>
        <span className="w-px h-[34px] bg-gradient-to-b from-gold to-transparent animate-scrollcue" />
      </div>
    </section>
  )
}
