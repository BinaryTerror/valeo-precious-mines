import { useState, useEffect } from 'react';
import Reveal from './Reveal';
import hero1 from '../../public/hero-1.jpg';
import hero2 from '../../public/hero-2.jpg';
import hero3 from '../../public/hero-3.jpg';

const SLIDES = [
  { image: hero1, title: 'Bem-vindo à', highlight: 'Valeo', subtitle: '' },
  { image: hero2, title: 'Pedras preciosas de', highlight: 'Moçambique', subtitle: '' },
  { image: hero3, title: 'Crescer juntos,', highlight: 'sempre.', subtitle: '' },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy-deep">
      {SLIDES.map((slide, index) => (
        <div
          key={slide.title}
          className={`hero-slide absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeSlide ? 'active opacity-100 z-10' : 'opacity-0 z-0'
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
      ))}

      <div className="relative z-20 container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center">
        <Reveal direction="up" delay={200} duration={800}>
          <div className="hero-content max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              {SLIDES[activeSlide].title} <br className="hidden md:block" />
              <span className="text-accent">{SLIDES[activeSlide].highlight}</span> {SLIDES[activeSlide].subtitle}
            </h1>
            
            {activeSlide === 0 && (
              <div className="mt-8 flex items-center gap-4">
                <span className="text-white/80 font-body text-sm tracking-wider uppercase border border-white/30 px-3 py-1 rounded">ISO 9001</span>
                <span className="text-white/80 font-body text-sm tracking-wider uppercase border border-white/30 px-3 py-1 rounded">ISO 14001</span>
              </div>
            )}
          </div>
        </Reveal>
      </div>

      <div className="hero-dots absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3 rounded-full bg-black/25 px-4 py-3 backdrop-blur-sm">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.title}
            onClick={() => setActiveSlide(index)}
            className={`hero-dot w-3 h-3 rounded-full border border-white/70 transition-all duration-300 ${
              index === activeSlide ? 'active bg-accent scale-125 border-accent shadow-[0_0_0_4px_rgba(244,124,32,0.2)]' : 'bg-white/70 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
