import Reveal from './Reveal';
import aboutTeam from '../../public/about-team.jpg';

const pillars = [
  { title: 'Operações integradas', text: 'Prospeção, extração, processamento e logística em uma única cadeia de valor.' },
  { title: 'Parcerias locais', text: 'Fortalecemos comunidades e fornecedores com programas de desenvolvimento sustentável.' },
  { title: 'Transparência', text: 'Cada etapa é acompanhada por processos claros, rastreáveis e confiáveis.' },
  { title: 'Excelência operacional', text: 'Padrões elevados de segurança, qualidade e responsabilidade ambiental.' },
];

const About = () => {
  return (
    <section id="sobre" className="bg-warm py-20 lg:py-28">
      <div className="page-container mx-auto px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal direction="up">
            <div className="rounded-[2rem] border border-[#e7dfd4] bg-white p-8 shadow-sm lg:p-10">
              <div className="section-label text-accent font-display font-semibold text-sm uppercase tracking-wider mb-4">
                QUEM SOMOS
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-ink mb-6">
                A Valeo é a empresa responsável pela operação de minas de <span className="text-accent">pedras preciosas</span>
              </h2>
              <div className="font-body text-base text-gray-600 leading-relaxed space-y-4">
                <p>
                  Somos uma empresa de mineração moçambicana com foco em pedras preciosas, ouro e minerais essenciais. Atuamos em toda a cadeia de valor, desde a prospeção até à comercialização, com responsabilidade social e ambiental.
                </p>
                <p>
                  Em conjunto com os nossos parceiros comerciais, compradores internacionais e investidores, trabalhamos diariamente para agregar valor e garantir excelência operacional em cada projeto.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="clean-card">
                    <h3 className="font-display font-semibold text-base text-ink">{pillar.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{pillar.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <div className="relative overflow-hidden rounded-[2rem] min-h-[420px] shadow-sm">
              <img src={aboutTeam} alt="Equipa Valeo" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="section-label mb-2 text-white/80">Presença local</p>
                <h3 className="font-display text-2xl font-semibold">Operações que geram impacto positivo nas regiões onde atuamos.</h3>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
