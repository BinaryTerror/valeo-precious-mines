import logo from '../../public/logo.jpg';

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <img src={logo} alt="Valeo Precious Mines" className="h-10 mb-6 bg-white rounded p-1" loading="lazy" decoding="async" />
            <h3 className="font-display font-bold text-lg mb-4">Valeo Precious Mines</h3>
            <div className="space-y-2 text-white/70 font-body text-sm">
              <p><strong className="text-white uppercase tracking-wider text-xs">Maputo:</strong> Rua dos Desportistas, Maputo, Moçambique</p>
              <p><strong className="text-white uppercase tracking-wider text-xs">Telefone:</strong> +258 84 000 0000</p>
              <p><strong className="text-white uppercase tracking-wider text-xs">Email:</strong> info@valeoprecious.co.mz</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-6">Sobre nós</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="#" className="text-white/70 hover:text-accent transition">A empresa</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Valores</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Carreiras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-6">Serviços</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="#" className="text-white/70 hover:text-accent transition">Mineração</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Pedras preciosas</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Ouro</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Logística</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-6">Sustentabilidade</h4>
            <ul className="space-y-3 font-body text-sm">
              <li><a href="#" className="text-white/70 hover:text-accent transition">Projectos sociais</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Ambiente</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-6">Media</h4>
            <ul className="space-y-3 font-body text-sm mb-8">
              <li><a href="#" className="text-white/70 hover:text-accent transition">Publicações</a></li>
              <li><a href="#" className="text-white/70 hover:text-accent transition">Galeria</a></li>
            </ul>
            
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider mb-6">Redes sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 hover:text-accent transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-accent transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2c2.717 0 3.056.01 4.122.058 1.04.048 1.602.214 1.978.36.5.194.856.425 1.233.803.378.377.609.733.803 1.233.146.376.312.938.36 1.978.048 1.066.058 1.405.058 4.122s-.01 3.056-.058 4.122c-.048 1.04-.214 1.602-.36 1.978-.194.5-.425.856-.803 1.233-.377.378-.733.609-1.233.803-.376.146-.938.312-1.978.36-1.066.048-1.405.058-4.122.058s-3.056-.01-4.122-.058c-1.04-.048-1.602-.214-1.978-.36-.5-.194-.856-.425-1.233-.803-.378-.377-.609-.733-.803-1.233-.146-.376-.312-.938-.36-1.978-.048-1.066-.058-1.405-.058-4.122s.01-3.056.058-4.122c.048-1.04.214-1.602.36-1.978.194-.5.425-.856.803-1.233.377-.378.733-.609 1.233-.803.376-.146.938-.312 1.978-.36C8.944 2.01 9.283 2 12 2zm0-2C9.256 0 8.913.012 7.852.06 6.793.108 6.046.273 5.4.526c-.672.261-1.242.6-1.812 1.17C3.018 2.266 2.678 2.836 2.417 3.508c-.253.646-.418 1.393-.466 2.452C1.903 7.02 1.892 7.363 1.892 10.09s.011 3.07.059 4.13c.048 1.059.213 1.806.466 2.452.261.672.601 1.242 1.171 1.812.57.57 1.14.91 1.812 1.17.646.253 1.393.418 2.452.466 1.06.048 1.403.059 4.13.059s3.07-.011 4.13-.059c1.059-.048 1.806-.213 2.452-.466.672-.261 1.242-.6 1.812-1.17.57-.57.91-1.14 1.17-1.812.253-.646.418-1.393.466-2.452.048-1.06.059-1.403.059-4.13s-.011-3.07-.059-4.13c-.048-1.059-.213-1.806-.466-2.452-.261-.672-.601-1.242-1.17-1.812-.57-.57-1.14-.91-1.812-1.17-.646-.253-1.393-.418-2.452-.466C15.07 2.012 14.726 2 12 2zm0 4.865A5.135 5.135 0 1017.135 10 5.135 5.135 0 0012 4.865zm0 8.27A3.135 3.135 0 1115.135 10 3.135 3.135 0 0112 13.135zm4.846-9.191a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-body text-white/50">
          <p>Copyright © Valeo Precious Mines 2026</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
