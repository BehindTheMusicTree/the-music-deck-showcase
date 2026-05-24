import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import CardShowcase from "@/components/CardShowcase";
import GenreGrid from "@/components/GenreGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CardShowcase />
        <GenreGrid />
        <Contact />
      </main>
    </>
  );
}
