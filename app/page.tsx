import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import MyNumbers from './components/mynumbers'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Clients  from './components/Clients'
import Contact from './components/Contact'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <MyNumbers />
        <Technologies />
        <Experience />
        <Projects />
        <Clients/>
        <Contact />
        <Footer />
      </div>
    </div>
  )
}