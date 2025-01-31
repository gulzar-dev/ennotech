import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Welcome } from "@/components/Welcome"
import { Services } from "@/components/Services"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Welcome />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}

