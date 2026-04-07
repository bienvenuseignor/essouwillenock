import dynamic from "next/dynamic"
import Hero from "@/components/sections/Hero"

const About = dynamic(() => import("@/components/sections/About"), {
  loading: () => <div className="h-screen" />,
})
const PainPoints = dynamic(() => import("@/components/sections/PainPoints"), {
  loading: () => <div className="h-screen" />,
})
const Method = dynamic(() => import("@/components/sections/Method"), {
  loading: () => <div className="h-screen" />,
})
const WhatsAppCTA = dynamic(() => import("@/components/sections/WhatsAppCTA"), {
  loading: () => <div className="h-96" />,
})
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => <div className="h-screen" />,
})
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  loading: () => <div className="h-screen" />,
})
const FreeResource = dynamic(() => import("@/components/sections/FreeResource"), {
  loading: () => <div className="h-screen" />,
})
const FAQ = dynamic(() => import("@/components/sections/FAQ"), {
  loading: () => <div className="h-screen" />,
})
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), {
  loading: () => <div className="h-96" />,
})
const WhatsAppButton = dynamic(() => import("@/components/ui/WhatsAppButton"), {
  loading: () => null,
})

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
