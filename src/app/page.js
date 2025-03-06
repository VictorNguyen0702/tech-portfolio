
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import AboutMe from "@/components/ui/AboutMe";
import TechStack from "@/components/ui/TechStack";
import Technologies from "@/components/ui/TechBoard";
import ProjectBoard from "@/components/ui/ProjectBoard";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <section id="home">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about-me">
        <AboutMe />
      </section>
      <section id="skills">
        <Technologies />
      </section>
      <section id="projects">
        <ProjectBoard />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </section>
  );
}

