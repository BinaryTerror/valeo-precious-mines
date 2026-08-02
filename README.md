# Valeo Precious Mines — Landing Page

Stack: **React + Vite + TypeScript + Tailwind CSS**.

## Como correr localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

Os ficheiros finais ficam em `dist/`, prontos para publicar em qualquer hosting estático
(Vercel, Netlify, GitHub Pages, cPanel, etc.).

## Estrutura

```
src/
  components/
    Header.tsx      menu fixo + navegação mobile
    Hero.tsx         secção principal com o diamante em SVG
    About.tsx         quem somos + valores
    Services.tsx      Minas / Pedras preciosas / Ouro / Minerais & cobre
    Process.tsx        5 etapas da cadeia de valor
    Projects.tsx        minas/áreas de interesse
    Compliance.tsx     gestão responsável / texto informativo
    Contact.tsx          formulário de contacto
    Footer.tsx
  App.tsx
  index.css           Tailwind + utilitários (reveal, hex-icon, facet-bg)
public/
  logo.jpg
```

## Por fazer antes de publicar

- Substituir telefone, email e morada em `Contact.tsx` pelos dados reais.
- Actualizar os projectos/minas em `Projects.tsx` com informação real.
- Ligar o formulário de `Contact.tsx` a um serviço de envio de email
  (Formspree, EmailJS, ou um backend próprio) — atualmente só simula o envio.
