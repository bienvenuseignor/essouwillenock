import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import PainPoints from "@/components/sections/PainPoints"
import Method from "@/components/sections/Method"
import WhatsAppCTA from "@/components/sections/WhatsAppCTA"
import Services from "@/components/sections/Services"
import Testimonials from "@/components/sections/Testimonials"
import FreeResource from "@/components/sections/FreeResource"
import FAQ from "@/components/sections/FAQ"
import FinalCTA from "@/components/sections/FinalCTA"
import WhatsAppButton from "@/components/ui/WhatsAppButton"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <PainPoints />
      <Method />
      <WhatsAppCTA />
      <Services />
      <Testimonials />
      <FreeResource />
      <FAQ />
      <FinalCTA />
      <WhatsAppButton />
    </>
  )
}
