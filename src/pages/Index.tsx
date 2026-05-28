import { useLayoutEffect, useRef } from "react";
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
  const isFirstRender = useRef(true);

  useLayoutEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        if (isFirstRender.current) {
          // Temporarily disable global CSS smooth scrolling for instant jump on mount
          const originalStyle = document.documentElement.style.scrollBehavior;
          document.documentElement.style.scrollBehavior = 'auto';
          element.scrollIntoView();
          setTimeout(() => {
            document.documentElement.style.scrollBehavior = originalStyle;
          }, 50);
        } else {
          // Normal smooth scroll for subsequent clicks on the same page
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    isFirstRender.current = false;
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
