import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StarsCanvas from "@/components/StarsCanvas";
import Tech from "@/components/Tech";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="w-full h-40"></div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
