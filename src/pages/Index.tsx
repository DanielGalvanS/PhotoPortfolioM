import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background overflow-x-hidden">
      <Sidebar />
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <FeaturedProject />
      <Footer />
    </main>
  );
};

export default Index;
