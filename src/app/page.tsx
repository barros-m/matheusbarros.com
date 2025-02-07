
import Hero from '@/components/Hero'
import About from "@/components/About";
import Contact from '@/components/Contact';
import SkillsSection from '@/components/Skills';
import Footer from '@/components/Footer';

export default function Home() {
  
  return (
    <div>
      <Hero />
      <About />
      <SkillsSection />
      <Contact />
      <Footer />
    </div>
  );
}
