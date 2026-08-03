import { useState, useEffect } from 'react';
import logo from '../../public/logo.jpg';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'header-scrolled bg-white shadow-md' : 'bg-white/90 backdrop-blur-md border-b border-black/10'}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="Valeo Precious Mines" className="h-8 w-auto" loading="eager" decoding="async" />
            <span className="font-display font-bold text-ink text-xl">Valeo Precious Mines</span>
          </div>
          
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <span className="font-display text-ink hover:text-accent font-medium cursor-pointer py-8">Empresa</span>
              <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#sobre" className="block px-4 py-2 text-ink hover:text-accent hover:bg-gray-50 transition">Sobre nós</a>
                <a href="#valores" className="block px-4 py-2 text-ink hover:text-accent hover:bg-gray-50 transition">Valores</a>
                <a href="#carreiras" className="block px-4 py-2 text-ink hover:text-accent hover:bg-gray-50 transition">Carreiras</a>
              </div>
            </div>
            <a href="#servicos" className="font-display text-ink hover:text-accent font-medium transition">Serviços</a>
            <div className="relative group">
              <span className="font-display text-ink hover:text-accent font-medium cursor-pointer py-8">Sustentabilidade</span>
              <div className="absolute top-full left-0 mt-0 w-48 bg-white shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <a href="#ambiente" className="block px-4 py-2 text-ink hover:text-accent hover:bg-gray-50 transition">Ambiente</a>
                <a href="#comunidade" className="block px-4 py-2 text-ink hover:text-accent hover:bg-gray-50 transition">Comunidade</a>
              </div>
            </div>
            <a href="#publicacoes" className="font-display text-ink hover:text-accent font-medium transition">Media</a>
            <a href="#contacto" className="font-display text-ink hover:text-accent font-medium transition">Contactos</a>
          </nav>
          
          <div className="hidden lg:flex items-center gap-4 border-l border-gray-300 pl-4">
            <button className="font-display font-medium text-ink hover:text-accent transition">PT</button>
            <span className="text-gray-300">|</span>
            <button className="font-display font-medium text-ink hover:text-accent transition">EN</button>
          </div>
          
          <button 
            className="lg:hidden text-ink"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 pt-20 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 space-y-4">
          <a href="#sobre" className="font-display text-2xl text-ink font-semibold" onClick={() => setMobileMenuOpen(false)}>Empresa</a>
          <a href="#servicos" className="font-display text-2xl text-ink font-semibold" onClick={() => setMobileMenuOpen(false)}>Serviços</a>
          <a href="#sustentabilidade" className="font-display text-2xl text-ink font-semibold" onClick={() => setMobileMenuOpen(false)}>Sustentabilidade</a>
          <a href="#publicacoes" className="font-display text-2xl text-ink font-semibold" onClick={() => setMobileMenuOpen(false)}>Media</a>
          <a href="#contacto" className="font-display text-2xl text-ink font-semibold" onClick={() => setMobileMenuOpen(false)}>Contactos</a>
        </div>
      </div>
    </header>
  );
}
