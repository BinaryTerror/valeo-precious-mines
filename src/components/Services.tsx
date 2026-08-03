import Reveal from './Reveal';
import serviceGems from '../../public/service-gems.jpg';
import serviceMining from '../../public/service-mining.jpg';
import serviceGold from '../../public/service-gold.jpg';
import serviceLogistics from '../../public/service-logistics.jpg';

const SERVICES = [
  { image: serviceGems, label: 'Pedras Preciosas' },
  { image: serviceMining, label: 'Mineração' },
  { image: serviceGold, label: 'Ouro' },
  { image: serviceLogistics, label: 'Logística' },
];

const Services = () => {
  return (
    <section id="servicos" className="bg-navy-deep py-20 text-white lg:py-28">
      <div className="page-container mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal direction="left">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
              <p className="section-label mb-4 text-accent">SERVIÇOS</p>
              <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">
                Soluções mineiras com <span className="text-accent">escala e responsabilidade</span>
              </h2>
              <p className="mb-8 font-body text-base leading-relaxed text-gray-300">
                As nossas operações mineiras e de logística são conduzidas com excelência e os mais elevados padrões da indústria. Focamo-nos na extração, transformação e distribuição de recursos essenciais, impulsionando progresso e desenvolvimento em cada território onde atuamos.
              </p>
              <div className="stack-vertical">
                <div className="list-divider border-white/10">
                  <strong className="block text-sm font-semibold text-white">Extração e processamento</strong>
                  <span className="text-sm text-gray-300">Fluxos operacionais seguros, eficientes e sustentáveis.</span>
                </div>
                <div className="list-divider border-white/10">
                  <strong className="block text-sm font-semibold text-white">Comércio responsável</strong>
                  <span className="text-sm text-gray-300">Parceiros globais com critérios de rastreabilidade e governança.</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="card-grid">
              {SERVICES.map((service) => (
                <div key={service.label} className="service-block relative aspect-square overflow-hidden rounded-[1.25rem] group">
                  <div
                    className="bg absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="absolute inset-0 bg-navy-deep/40 transition-colors group-hover:bg-navy-deep/20" />
                  <div className="label absolute bottom-4 left-4 right-4">
                    <span className="block font-display text-lg font-bold text-white">
                      {service.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Services;
