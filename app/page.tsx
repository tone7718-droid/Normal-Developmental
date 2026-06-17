import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import AgeCalculator from "@/components/AgeCalculator";
import StageExplorer from "@/components/StageExplorer";
import ReflexSection from "@/components/ReflexSection";
import Checkups from "@/components/Checkups";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Overview />
      <AgeCalculator />
      <StageExplorer />
      <ReflexSection />
      <Checkups />
      <Faq />
      <Footer />
    </main>
  );
}
