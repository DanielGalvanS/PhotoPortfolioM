import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-forest-road.jpg";
import boatImage from "@/assets/boat-aerial.jpg";
import winterImage from "@/assets/winter-road.jpg";

const heroImages = [
  { id: 1, image: heroImage, number: "01" },
  { id: 2, image: winterImage, number: "02" },
  { id: 3, image: boatImage, number: "03" }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % heroImages.length);
  };

  const handlePreviewClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate preview images (next 2 in sequence)
  const getPreviewItems = () => {
    const next1 = (currentIndex + 1) % heroImages.length;
    const next2 = (currentIndex + 2) % heroImages.length;
    return [
      { ...heroImages[next1], originalIndex: next1 },
      { ...heroImages[next2], originalIndex: next2 },
    ];
  };

  const currentImage = heroImages[currentIndex];
  const previewItems = getPreviewItems();

  return (
    <section className="relative lg:ml-20 pt-20 pb-24 bg-background overflow-hidden">
      {/* Hero Image Container - Not full screen */}
      <div className="relative h-[70vh] md:h-[75vh] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentImage.image}
              alt="Hero photography"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay - STATIC TEXT */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 lg:px-16 z-10">
          <div className="max-w-2xl">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="heading-hero text-primary-foreground"
              >
                Montse
              </motion.h1>
            </div>
            <div className="overflow-hidden -mt-2">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="heading-hero text-primary-foreground font-display italic"
              >
                Díaz
              </motion.h1>
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="h-px bg-primary-foreground/60 my-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/90 mb-4"
            >
              From above — a bird's perspective
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-base text-primary-foreground/80 max-w-sm leading-relaxed"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p>
          </div>
        </div>

        {/* Numbered Preview Images - Click to navigate */}
        <div className="absolute -bottom-12 right-8 md:right-16 lg:right-24 xl:right-[12%] flex gap-0 border-4 border-background shadow-lg z-20">
          <AnimatePresence mode="popLayout">
            {previewItems.map((item) => (
              <motion.div
                key={item.id}
                layoutId={`preview-${item.id}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20, transition: { duration: 0.2 } }}
                transition={{ duration: 1.0, ease: "easeOut" }}
                onClick={() => handlePreviewClick(item.originalIndex)}
                className="relative w-28 h-20 md:w-40 md:h-28 overflow-hidden cursor-pointer group"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={item.image}
                  alt={`Preview ${item.number}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Number overlay */}
                <div className="absolute bottom-2 left-2 text-primary-foreground font-display text-sm md:text-base font-light z-20">
                  {item.number}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Hero;
