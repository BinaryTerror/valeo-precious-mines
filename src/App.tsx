import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Publications from './components/Publications'
import Services from './components/Services'
import Certification from './components/Certification'
import Sustainability from './components/Sustainability'
import Contact from './components/Contact'

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Publications />
      <Services />
      <Certification />
      <Sustainability />
      <Contact />
    </Layout>
  )
}
