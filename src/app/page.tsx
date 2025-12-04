import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CEOMessage from "@/components/CEOMessage";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import News from "@/components/News";
import Company from "@/components/Company";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <CEOMessage />
      <Services />
      <Achievements />
      <News />
      <Company />
      <Footer />
    </main>
  );
}
