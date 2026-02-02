import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import boatImage from "@/assets/boat-aerial.jpg";
import islandImage from "@/assets/island-aerial.jpg";
import forestImage from "@/assets/forest-texture.jpg";
import winterImage from "@/assets/winter-road.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Stranded",
    location: "Transfăgărășan, Sibiu, Romania",
    image: forestImage,
  },
  {
    id: 2,
    title: "Lonely",
    location: "Ötö, Sweden",
    image: islandImage,
  },
  {
    id: 3,
    title: "Solitude",
    location: "Maldives",
    image: boatImage,
  },
  {
    id: 4,
    title: "Passage",
    location: "Norway",
    image: winterImage,
  },
  {
    id: 5,
    title: "Serenity",
    location: "Iceland",
    image: boatImage, // Using reuse for demo
  },
];

const Portfolio = () => {
  const ref = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background lg:pl-20" ref={ref}>
      <div className="container relative">
        <div className="flex justify-between items-end mb-12">
          {/* Header/Title if needed, currently empty in design but good for structure */}
          <div />

          {/* Navigation Buttons */}

        </div>
      </div>

      {/* Horizontal Scroll Container - Full Width */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-6 px-4 md:px-12 pb-4 scrollbar-hide snap-x snap-mandatory w-full"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="w-[60vw] md:w-[400px] flex-shrink-0 snap-center group cursor-pointer relative"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay with title - Always visible or on hover based on pref, sticking to design ref */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

              <div className="absolute bottom-4 left-0 right-0 p-8">
                <h3 className="font-display text-3xl text-white mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/80 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {item.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Spacer for right padding */}
        <div className="w-4 md:w-12 flex-shrink-0" />
      </div>

      <div className="container relative">
        {/* Navigation Buttons (Moved Bottom) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 justify-end mt-8 mr-4 md:mr-0"
        >
          <button
            onClick={scrollLeft}
            className="p-2 hover:bg-secondary rounded-full transition-colors duration-300 group"
            aria-label="Scroll left"
          >
            <ArrowLeft className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
          <button
            onClick={scrollRight}
            className="p-2 hover:bg-secondary rounded-full transition-colors duration-300 group"
            aria-label="Scroll right"
          >
            <ArrowRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
