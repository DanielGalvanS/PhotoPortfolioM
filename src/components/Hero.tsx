import { motion } from "framer-motion";
import heroImage from "@/assets/hero-forest-road.jpg";
import boatImage from "@/assets/boat-aerial.jpg";
import winterImage from "@/assets/winter-road.jpg";

const Hero = () => {
  const previewImages = [
    { id: 1, image: winterImage, number: "01" },
    { id: 2, image: boatImage, number: "02" },
  ];

  return (
    <section className="relative lg:ml-20 pt-20 pb-24 bg-background">
      {/* Hero Image Container - Not full screen */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2 }}
        className="relative h-[70vh] md:h-[75vh] w-full"
      >
        <img
          src={heroImage}
          alt="Aerial view of forest road"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/30 to-transparent" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 lg:px-16">
          {/* Main Text Content */}
          <div className="max-w-2xl">
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="heading-hero text-primary-foreground"
              >
                Montse
              </motion.h1>
            </div>
            <div className="overflow-hidden -mt-2">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="heading-hero text-primary-foreground font-display italic"
              >
                Díaz
              </motion.h1>
            </div>

            {/* Divider line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="h-px bg-primary-foreground/60 my-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="text-[11px] uppercase tracking-[0.3em] text-primary-foreground/90 mb-4"
            >
              From above — a bird's perspective
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-base text-primary-foreground/80 max-w-sm leading-relaxed"
            >
              My journey began in a significant moment of my life, from there it all changed...
            </motion.p>
          </div>
        </div>

        {/* Numbered Preview Images - With white border, no gap, smaller numbers */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute -bottom-12 right-8 md:right-16 lg:right-24 xl:right-[12%] flex gap-0 border-4 border-background shadow-lg"
        >
          {previewImages.map((item) => (
            <div
              key={item.id}
              className="relative w-28 h-20 md:w-40 md:h-28 overflow-hidden cursor-pointer group"
            >
              <img
                src={item.image}
                alt={`Preview ${item.number}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Number overlay - smaller */}
              <div className="absolute bottom-2 left-2 text-primary-foreground font-display text-sm md:text-base font-light">
                {item.number}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
