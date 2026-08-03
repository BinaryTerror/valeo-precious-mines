import Reveal from './Reveal';
import pub1 from '../../public/pub-1.jpg';
import pub2 from '../../public/pub-2.jpg';
import pub3 from '../../public/pub-3.jpg';

const PUBS = [
  { image: pub1, title: 'Festival Cultural Nsambo Wathu reúne milhares em Moatize', excerpt: 'A Valeo organizou o Festival Cultural inaugural em parceria com o Governo Distrital, celebrando o patrimônio cultural local.', date: '27 Jun 2026' },
  { image: pub2, title: 'Valeo reforça compromisso com abastecimento de água', excerpt: 'Inauguração de três novos sistemas de abastecimento de água potável, beneficiando mais de 70.000 pessoas na região.', date: '20 Fev 2026' },
  { image: pub3, title: 'Programa agrícola continua a impulsionar produção', excerpt: 'O Programa de Apoio Agrícola beneficia 345 famílias em Cateme com formação e recursos para agricultura sustentável.', date: '15 Jan 2026' },
];

const Publications = () => {
  return (
    <section id="publicacoes" className="bg-white py-20 lg:py-28">
      <div className="page-container mx-auto px-4 lg:px-8">
        <div className="mb-12">
          <Reveal direction="up">
            <div className="section-label text-accent font-display font-semibold text-sm uppercase tracking-wider mb-2">
              PUBLICAÇÕES
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink">
              Últimas <span className="text-accent">Publicações</span>
            </h2>
          </Reveal>
        </div>

        <div className="card-grid">
          {PUBS.map((pub, index) => (
            <Reveal key={pub.title} direction="up" delay={index * 150}>
              <div className="pub-card flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-[#ececec] bg-[#fcfaf8] shadow-sm">
                <div className="image-wrapper h-[220px] overflow-hidden">
                  <img src={pub.image} alt={pub.title} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" decoding="async" fetchPriority="low" />
                </div>
                <div className="flex flex-grow flex-col p-6">
                  <span className="mb-3 text-xs font-display font-bold uppercase tracking-[0.25em] text-accent">{pub.date}</span>
                  <h3 className="mb-3 font-display text-lg font-semibold text-ink">{pub.title}</h3>
                  <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600">{pub.excerpt}</p>
                  <a href="#contacto" className="btn-arrow mt-auto inline-flex items-center text-sm font-semibold text-ink hover:text-accent">
                    Saiba mais
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
