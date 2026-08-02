import { useState } from 'react'

const NAV_ITEMS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'O que fazemos' },
  { href: '#processo', label: 'Processo' },
  { href: '#minas', label: 'Minas' },
  { href: '#compliance', label: 'Certificação' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-navy-deep/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-8 sm:px-5 flex items-center justify-between py-4">
        <a
          href="#top"
          className="group flex items-center gap-3 text-white font-semibold tracking-[0.16em] uppercase text-[13px] sm:text-[14px]"
        >
          <span className="inline-flex h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(201,155,63,0.7)]" />
          <span className="transition-colors group-hover:text-gold">Valeo Precious Mines</span>
        </a>

        <nav
          className={`
            fixed md:static top-0 right-0 h-screen md:h-auto w-[min(320px,80vw)] md:w-auto
            bg-navy-deep md:bg-transparent border-l md:border-l-0 border-white/10
            flex flex-col md:flex-row items-start md:items-center justify-center md:justify-start
            gap-7 md:gap-9 px-10 md:px-0
            transition-transform duration-300 ease-out
            ${open ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
          `}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-ice text-sm font-medium relative group py-1 hover-target"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-gold transition-all duration-250 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="hidden md:inline-block bg-gold text-navy-deep px-5 py-2.5 text-sm font-semibold tracking-wide hover:bg-gold-soft hover:-translate-y-0.5 transition-all hover-target"
          >
            Fale connosco
          </a>
        </nav>

        <button
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden z-[110] p-2"
        >
          <span
            className={`block w-6 h-0.5 bg-white my-1.5 transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span className={`block w-6 h-0.5 bg-white my-1.5 transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span
            className={`block w-6 h-0.5 bg-white my-1.5 transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>
    </header>
  )
}
