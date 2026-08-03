import Reveal from './Reveal';
import isoCert from '../../public/iso-cert.jpg';

const BADGES = [
  'Boas práticas de governação',
  'Rastreabilidade',
  'Padrões ambientais',
  'Comércio responsável',
];

const Certification = () => {
  return (
    <section id="certificacao" className="bg-warm py-20 lg:py-28">
      <div className="page-container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal direction="up">
            <div className="rounded-[2rem] border border-[#e7dfd4] bg-white p-8 shadow-sm lg:p-10">
              <div className="section-label text-accent font-display font-semibold text-sm uppercase tracking-wider mb-4">
                CERTIFICAÇÃO
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-6">
                Gestão <span className="text-accent">Responsável</span>
              </h2>
              <div className="font-body text-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  A Valeo atua sob um forte compromisso com a saúde e segurança ocupacional, meio ambiente e qualidade. Somos guiados pelas melhores práticas internacionais, alinhando os nossos processos com as normas ISO 9001:2015, ISO 14001:2015 e ISO 45001:2018.
                </p>
                <p>
                  A nossa governação assenta na transparência, rastreabilidade dos recursos e práticas comerciais responsáveis, assegurando que as nossas operações beneficiam tanto as comunidades locais como os nossos clientes globais.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {BADGES.map((badge, idx) => (
                  <span key={idx} className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-xs font-display font-semibold text-ink">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] min-h-[380px] shadow-sm">
              <img src={isoCert} alt="Certificações Valeo" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="section-label mb-2 text-white/80">Padrões internacionais</p>
                <h3 className="font-display text-2xl font-semibold">Acreditação que reforça confiança, segurança e continuidade.</h3>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Certification;
