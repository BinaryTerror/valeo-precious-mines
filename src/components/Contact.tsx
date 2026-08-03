import Reveal from './Reveal';

const Contact = () => {
  return (
    <section id="contacto" className="bg-navy-deep py-20 text-white lg:py-28">
      <div className="page-container mx-auto px-4 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal direction="up">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
              <div className="section-label text-accent font-display font-semibold text-sm uppercase tracking-wider mb-4">
                CONTACTO
              </div>
              <h2 className="mb-6 font-display text-4xl font-bold lg:text-5xl">
                Vamos falar sobre o seu próximo <span className="text-accent">negócio</span>.
              </h2>
              <p className="mb-8 font-body text-base leading-relaxed text-gray-300">
                Tem alguma questão sobre as nossas operações, produtos ou oportunidades de parceria? Entre em contacto com a nossa equipa preenchendo o formulário ou usando os detalhes abaixo.
              </p>

              <div className="stack-vertical border-t border-white/10 pt-2">
                <div className="list-divider border-white/10">
                  <span className="block text-xs font-display font-semibold uppercase tracking-[0.3em] text-accent/80">Morada</span>
                  <span className="mt-2 block text-sm text-gray-200">Av. Marginal 1234, Edifício Valeo<br />Maputo, Moçambique</span>
                </div>
                <div className="list-divider border-white/10">
                  <span className="block text-xs font-display font-semibold uppercase tracking-[0.3em] text-accent/80">Telefone</span>
                  <span className="mt-2 block text-sm text-gray-200">+258 84 123 4567</span>
                </div>
                <div className="list-divider border-white/10">
                  <span className="block text-xs font-display font-semibold uppercase tracking-[0.3em] text-accent/80">Email</span>
                  <span className="mt-2 block text-sm text-gray-200">info@valeo.co.mz</span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={150}>
            <form className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-xs font-display font-semibold uppercase tracking-wider text-accent/70">Nome</label>
                  <input type="text" id="nome" className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent" placeholder="Seu nome" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-display font-semibold uppercase tracking-wider text-accent/70">Email</label>
                  <input type="email" id="email" className="rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent" placeholder="seu.email@exemplo.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="area" className="text-xs font-display font-semibold uppercase tracking-wider text-accent/70">Área de interesse</label>
                <select id="area" className="appearance-none rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent" defaultValue="">
                  <option value="" disabled className="text-gray-900">Selecione uma área</option>
                  <option value="pedras" className="text-gray-900">Pedras Preciosas</option>
                  <option value="ouro" className="text-gray-900">Ouro</option>
                  <option value="logistica" className="text-gray-900">Logística</option>
                  <option value="parcerias" className="text-gray-900">Parcerias/Investimento</option>
                  <option value="outros" className="text-gray-900">Outros</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="mensagem" className="text-xs font-display font-semibold uppercase tracking-wider text-accent/70">Mensagem</label>
                <textarea id="mensagem" rows={5} className="resize-none rounded-md border border-white/15 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-accent" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <button type="submit" className="mt-2 rounded-md bg-accent px-6 py-3.5 font-display font-semibold text-white transition-colors hover:bg-accent-light">
                Enviar Mensagem
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
