import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import boatImage from "@/assets/boat-aerial.jpg";
import islandImage from "@/assets/island-aerial.jpg";
import forestImage from "@/assets/forest-texture.jpg";
import winterImage from "@/assets/winter-road.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "Stranded",
    location: "Vestfold-fjord, Oslo, Norway",
    image: forestImage,
  },
  {
    id: 2,
    title: "Lonely",
    location: "Oré, Sweden",
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
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background lg:pl-20" ref={ref}>
      <div className="container">
        {/* Portfolio Grid - Side by side large images */}
        <div className="grid md:grid-cols-2 gap-4">
          {portfolioItems.slice(0, 2).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group cursor-pointer relative"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay with title */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">
                    {item.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-end mt-6"
        >
          <a href="#" className="link-arrow text-muted-foreground">
            View all projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
