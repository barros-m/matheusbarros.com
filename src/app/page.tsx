
import Hero from '@/components/Hero'
import About from "@/components/About";
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import SkillsSection from '@/components/Skills';

export default function Home() {
  
  return (
    <div>
      <Hero />
      <About />
      <SkillsSection />
      <Contact />
    </div>
  );
}
