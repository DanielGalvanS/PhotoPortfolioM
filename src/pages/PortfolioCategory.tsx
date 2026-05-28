import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { portfolioItems } from "@/data/portfolio";
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import NotFound from "./NotFound";

const PortfolioCategory = () => {
  const { slug } = useParams();
  const category = portfolioItems.find((item) => item.slug === slug);

  if (!category) {
    return <NotFound />;
  }

  return (
    <main className="bg-background min-h-screen overflow-x-hidden pt-24 md:pt-32">
      <Sidebar />
      <Navigation />

      <article className="container lg:pl-28 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            to="/#portfolio"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 group"
          >
            <ArrowLeft className="mr-2 w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-display mb-4">
            {category.title}
          </h1>
          <p className="text-sm md:text-base uppercase tracking-[0.2em] text-muted-foreground">
            {category.location}
          </p>
        </motion.div>

        {/* Offset/Staggered Uniform Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 pb-32">
          {category.photos.map((photo, index) => {
            // Apply different top margins to columns to create a staggered/offset effect
            // while keeping the exact same aspect ratio for all photos.
            const columnIndex = index % 3;
            let offsetClass = "mt-0";
            
            // On large screens, offset the middle column down, and the right column slightly.
            // On medium screens (2 cols), offset the right column.
            if (columnIndex === 1) {
              offsetClass = "lg:mt-24 md:mt-16";
            } else if (columnIndex === 2) {
              offsetClass = "lg:mt-12";
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: (index % 3) * 0.15 }}
                // All photos have the exact same portrait dimension: aspect-[4/5]
                className={`relative overflow-hidden group rounded-[2px] aspect-[4/5] w-full ${offsetClass}`}
              >
                <img
                  src={photo}
                  alt={`${category.title} photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Subtle dark overlay that appears on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 pointer-events-none" />
                
                {/* Optional subtle border/frame effect */}
                <div className="absolute inset-0 border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default PortfolioCategory;
