import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import FeaturedProject from "@/components/FeaturedProject";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Temporarily disable global CSS smooth scrolling
        const originalStyle = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Scroll instantly
        element.scrollIntoView();
        
        // Restore global smooth scrolling after the jump
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = originalStyle;
        }, 50);
      }
    }
  }, [location]);

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
