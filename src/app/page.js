import Navbar from "../../component/Navbar";
import Hero from "../../component/Hero";
import MissionSection from "../../component/Missionselection";
import ServicesSection from "../../component/ServicesSection";
import ProcessSection from "../../component/ProcessSection";
import TestimonialsSection from "../../component/TestimonialsSection";
import ContactSection from "../../component/ContactSection";
import Footer from "../../component/Footer";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6">

<Hero />
<MissionSection />
<ServicesSection />
<ProcessSection />
<TestimonialsSection />
<ContactSection />


    </main>
  );
}
