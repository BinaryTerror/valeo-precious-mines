import Reveal from './Reveal'

const STEPS = [
  { n: '01', title: 'Prospecção', desc: 'Estudos geológicos e identificação de jazidas com potencial comercial.' },
  { n: '02', title: 'Exploração', desc: 'Licenciamento e avaliação técnica das reservas identificadas.' },
  { n: '03', title: 'Extracção', desc: 'Lavra controlada com padrões de segurança e sustentabilidade.' },
  { n: '04', title: 'Processamento', desc: 'Triagem, classificação e preparação do produto para o mercado.' },
  { n: '05', title: 'Comercialização', desc: 'Armazenamento, transporte e venda a compradores nacionais e internacionais.' },
]

export default function Process() {
  return (
    <section id="processo" className="py-24 sm:py-32 bg-navy-deep text-white">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-5">
        <Reveal className="max-w-[640px] mb-16">
          <div className="flex items-center gap-2.5 mb-4 font-mono text-xs tracking-[0.14em] uppercase text-gold before:content-[''] before:w-[22px] before:h-px before:bg-gold">
            Como trabalhamos
          </div>
          <h2 className="font-display font-semibold text-white text-[28px] sm:text-[36px] lg:text-[42px]">
            Da concessão ao contentor, cinco etapas controladas.
          </h2>
          <p className="text-ice/70 text-[16.5px] mt-4">
            Cada fase é documentada, garantindo qualidade e origem verificável em todo o percurso.
          </p>
        </Reveal>

        <Reveal>
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-9 md:gap-0">
            <div className="hidden md:block absolute top-[22px] left-0 right-0 h-px bg-white/15" />
            {STEPS.map((step) => (
              <div key={step.n} className="relative pr-5">
                <div className="relative z-[1] w-11 h-11 rounded-full bg-navy-deep border border-gold flex items-center justify-center font-mono text-gold-soft text-sm mb-5">
                  {step.n}
                </div>
                <h4 className="text-[16.5px] font-display font-semibold text-white mb-2.5">{step.title}</h4>
                <p className="text-[13.5px] text-ice/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
