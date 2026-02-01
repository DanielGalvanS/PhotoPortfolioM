import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portraitImage from "@/assets/photographer-portrait.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background lg:pl-20" ref={ref}>
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="aspect-[3/4] image-reveal">
              <img
                src={portraitImage}
                alt="Emma Collins - Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-4"
            >
              Emma Collins
            </motion.p>
          </motion.div>

          {/* Text Content */}
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-md mb-10"
            >
              "I changed..."
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="body-sm">
                  One day it just hit me. It was one of those moments in which you get it all into perspective.
                </p>
                <p className="body-sm">
                  For me this started in 2014 after a long year of studying. I decided to start searching for the mystery of the (which is North, literally) by the way. I decided to move and study for my Masters and ya know, I stayed forever month in Iceland.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <p className="body-sm">
                  And that's when I found my passion, and it's insisting on the little cliffs I see every detail of this big island since I've captured earth from above.
                </p>
                <p className="body-sm">
                  I'm a visual storyteller drawn to the raw beauty of landscapes from above. My work explores the tension between human presence and untouched wilderness.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
