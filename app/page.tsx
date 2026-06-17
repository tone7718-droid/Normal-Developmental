import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import StageExplorer from "@/components/StageExplorer";
import ReflexSection from "@/components/ReflexSection";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Overview />
      <StageExplorer />
      <ReflexSection />
      <Faq />
      <Footer />
    </main>
  );
}
