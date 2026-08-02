import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Projects from './components/Projects'
import Compliance from './components/Compliance'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'

export default function App() {
  return (
    <div className="app-shell cursor-none">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Projects />
        <Compliance />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
