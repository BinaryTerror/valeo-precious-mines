const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#minas', label: 'Minas' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10 py-11">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-5 flex flex-wrap items-center justify-between gap-4.5 gap-[18px]">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Valeo Precious Mines" className="h-[30px]" />
          <span className="text-ice/55 text-[13px]">
            © {new Date().getFullYear()} Valeo Precious Mines. Todos os direitos reservados.
          </span>
        </div>
        <div className="flex gap-7">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-ice/60 text-[13px] hover:text-gold-soft transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
