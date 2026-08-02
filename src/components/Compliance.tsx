import Reveal from './Reveal'

const BADGES = ['Boas práticas de governação', 'Rastreabilidade (em desenvolvimento)', 'Padrões ambientais', 'Comércio responsável (objetivo)']

export default function Compliance() {
  return (
    <section id="compliance" className="py-16 bg-ice border-t border-b border-navy/10">
      <Reveal>
        <div className="max-w-[1200px] mx-auto px-8 sm:px-5 flex flex-wrap items-center justify-between gap-12">
          <div className="max-w-[520px] rounded-[24px] border border-white/45 bg-white/80 p-8 shadow-[0_18px_45px_rgba(6,21,35,0.08)] backdrop-blur-sm">
            <div className="flex items-center gap-2.5 mb-4 font-mono text-xs tracking-[0.14em] uppercase text-blue-mid before:content-[''] before:w-[22px] before:h-px before:bg-blue-mid">
              Confiança e conformidade
            </div>
            <h3 className="font-display font-semibold text-navy text-2xl mb-3">
              Gestão responsável e boas práticas
            </h3>
            <p className="text-[14.5px] leading-7 text-[#4a5b6d]">
              A Valeo Precious Mines procura desenvolver políticas e práticas alinhadas com normas
              aplicáveis e boas práticas do setor. As abordagens, incluindo rastreabilidade e gestão
              ambiental, são parte do planeamento e desenvolvimento das nossas iniciativas.
            </p>
          </div>
          <div className="flex gap-4 flex-wrap">
            {BADGES.map((b) => (
              <span
                key={b}
                className="flex items-center gap-2 rounded-full border border-blue-mid/35 bg-white/85 px-4 py-2.5 font-mono text-xs text-navy shadow-[0_10px_24px_rgba(6,21,35,0.05)]"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
