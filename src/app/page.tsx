import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { InstitutionalPillars } from "@/components/InstitutionalPillars";
import { About } from "@/components/About";
import { PracticeAreas } from "@/components/PracticeAreas";
import { EducationalSection } from "@/components/EducationalSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { HowWeWork } from "@/components/HowWeWork";
import { FaqSection } from "@/components/FaqSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { DesktopScrollIndicator } from "@/components/DesktopScrollIndicator";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <Navbar />
      <DesktopScrollIndicator />
      <main className="flex-1 overflow-x-hidden">
        <Hero />
        <InstitutionalPillars />
        <About />
        <PracticeAreas />
        <EducationalSection />
        <ReviewsSection />
        <HowWeWork />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
