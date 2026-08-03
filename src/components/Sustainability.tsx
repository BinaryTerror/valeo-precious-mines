import Reveal from './Reveal';
import sustainabilityEnv from '../../public/sustainability-env.jpg';

const sustainabilityItems = [
  { title: 'Recuperação ambiental', text: 'Restauramos áreas impactadas e protegemos ecossistemas sensíveis.' },
  { title: 'Emprego local', text: 'Criamos oportunidades e fortalecemos a economia das comunidades vizinhas.' },
  { title: 'Educação e saúde', text: 'Investimos em programas que elevam a qualidade de vida local.' },
];

const Sustainability = () => {
  return (
    <section id="sustentabilidade" className="bg-warm py-20 lg:py-28">
      <div className="page-container mx-auto px-4 lg:px-8">
        <Reveal direction="up">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="section-label">SUSTENTABILIDADE</p>
            <h2 className="mb-4 font-display text-3xl font-bold text-ink lg:text-4xl">
              Compromisso ambiental e social em cada etapa da operação
            </h2>
            <p className="font-body text-base leading-relaxed text-gray-600">
              A Valeo investe em práticas sustentáveis que preservam o ambiente local, fortalecem as comunidades e garantem transparência em todos os processos de mineração.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <article className="sust-block relative overflow-hidden rounded-[2rem] min-h-[420px] group">
            <img src={sustainabilityEnv} alt="Gestão ambiental" className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-ink/55 transition-colors duration-500 group-hover:bg-ink/45" />
            <div className="relative z-10 flex h-full flex-col justify-end gap-6 p-8 lg:p-10">
              <div>
                <span className="text-xs font-display font-semibold uppercase tracking-[0.35em] text-accent">Ambiente</span>
                <h3 className="mt-4 font-display text-3xl font-bold text-white">Gestão ambiental proativa</h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-white/90">
                Monitorizamos recursos hídricos, restauramos áreas impactadas e reduzimos emissões para que cada projeto seja sustentável e regenerativo.
              </p>
              <ul className="stack-vertical max-w-xl">
                <li className="list-divider border-white/20 text-sm text-white/90">Monitoramento contínuo de recursos hídricos</li>
                <li className="list-divider border-white/20 text-sm text-white/90">Planos de recuperação e requalificação ambiental</li>
              </ul>
            </div>
          </article>

          <div className="stack-vertical">
            <Reveal direction="up">
              <div className="clean-card bg-white/90 shadow-sm">
                <p className="text-xs font-display font-semibold uppercase tracking-[0.3em] text-accent">Comunidade</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">Parcerias que criam valor local</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Construímos programas sociais, apoio à educação e emprego local para gerar benefícios reais e duradouros.</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={120}>
              <div className="clean-card bg-white/90 shadow-sm">
                <p className="text-xs font-display font-semibold uppercase tracking-[0.3em] text-accent">Governança</p>
                <h3 className="mt-3 font-display text-xl font-semibold text-ink">Transparência em cada decisão</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">Processos claros, rastreáveis e alinhados com as melhores práticas do setor mineral.</p>
              </div>
            </Reveal>

            <Reveal direction="up" delay={240}>
              <div className="clean-card bg-white/90 shadow-sm">
                <p className="text-xs font-display font-semibold uppercase tracking-[0.3em] text-accent">Agenda social</p>
                <div className="mt-3 space-y-2">
                  {sustainabilityItems.map((item) => (
                    <div key={item.title} className="list-divider">
                      <h4 className="font-display text-sm font-semibold text-ink">{item.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
