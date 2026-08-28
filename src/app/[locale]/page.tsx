import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import About from "@/components/About";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import ContactCta from "@/components/ContactCta";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <About />
      <Blog />
      <FAQ />
      <ContactCta />
    </main>
  );
}
