import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import winterImage from "@/assets/winter-road.jpg";
import forestImage from "@/assets/forest-texture.jpg";

const FeaturedProject = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <>
      {/* I'd choose the woods section */}
      <section className="py-24 md:py-32 bg-background lg:pl-20" ref={ref}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <p className="section-label">Featured</p>
              <h2 className="heading-lg mb-6">
                Lorem ipsum dolor<br />
                <span className="font-display italic">sit amet..</span>
              </h2>

              <p className="body-sm mb-4 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

              <p className="body-sm mb-8 max-w-md text-muted-foreground/70">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
              </p>

              <a href="#" className="link-arrow">
                Other series
              </a>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-4"
            >
              <div className="aspect-[3/4] image-reveal">
                <img
                  src={forestImage}
                  alt="Forest aerial view"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] image-reveal mt-12">
                <img
                  src={winterImage}
                  alt="Winter road"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full-width featured location */}
      <section className="relative h-[70vh] lg:ml-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <img
            src={winterImage}
            alt="Confrides - Spain"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </motion.div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full border border-primary-foreground/50 flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary-foreground"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>

            <h3 className="font-display text-3xl md:text-4xl text-primary-foreground mb-2">
              Lorem Ipsum · Dolor
            </h3>
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/60 mb-8">
              Sit Amet, Consectetur · Gelit
            </p>

            <a
              href="#"
              className="inline-block px-8 py-3 border border-primary-foreground/50 text-[11px] uppercase tracking-[0.2em] text-primary-foreground hover:bg-primary-foreground hover:text-foreground transition-all duration-300"
            >
              More
            </a>
          </motion.div>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-8 right-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary-foreground"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </motion.div>
      </section>
    </>
  );
};

export default FeaturedProject;
