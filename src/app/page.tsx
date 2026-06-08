import Navbar from "@/components/Navbar";
import Vision from "@/components/Vision";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import MakeInIndia from "@/components/sections/MakeInIndia";
import TechnologyStack from "@/components/sections/TechnologyStack";
import Timeline from "@/components/sections/Timeline";

import Industries from "@/components/sections/Industries";
import TrustBanner from "@/components/sections/TrustBanner";
import Metrics from "@/components/sections/Metrics";
import ResearchAreas from "@/components/sections/ResearchAreas";
import FutureVision from "@/components/sections/FutureVision";
import ContactCTA from "@/components/sections/ContactCTA";
import Projects from "@/components/sections/Projects";
import ResearchEcosystem from "@/components/sections/ResearchEcosystem";

export default function Home() {
  return (
    <main className="bg-white text-slate-900 overflow-x-hidden">

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Trust & Capability Banner */}
      <TrustBanner />

      {/* IIT Kharagpur Ecosystem */}
      <ResearchEcosystem />

      {/* Key Metrics */}
      <Metrics />

      {/* Work Showcase */}
      <Projects />

      {/* Company Statistics */}
      <section id="capabilities">
        <Stats />
      </section>

      {/* Make In India Vision */}
      <MakeInIndia />

      {/* Company Vision */}
      <section id="vision">
        <Vision />
      </section>

      {/* Industries Served */}
      <Industries />

      {/* Technology Capability */}
      <section id="domains">
        <TechnologyStack />
      </section>

      {/* Research Focus Areas */}
      <ResearchAreas />

      {/* Product Development Lifecycle */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* Strategic Growth Roadmap */}
      <section id="roadmap">
        <Roadmap />
      </section>

      {/* Future Semiconductor & Deep-Tech Vision */}
      <FutureVision />

      {/* Contact & Partnership CTA */}
      <section id="contact">
        <ContactCTA />
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}