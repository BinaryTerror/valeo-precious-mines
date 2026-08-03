import { PropsWithChildren } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="app-root font-sans text-ink antialiased bg-white">
      <Header />
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  )
}
