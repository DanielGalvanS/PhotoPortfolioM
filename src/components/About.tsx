import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portraitImage from "@/assets/photographer-portrait.jpg";
import { useLanguage } from "@/context/LanguageContext";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const { t } = useLanguage();

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
                alt="Montse Díaz - Photographer"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-4"
            >
              Montse Díaz
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
              "{t('Capturando la esencia de cada momento.', 'Capturing the essence of every moment.')}"
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="body-sm">
                  {t(
                    'Soy fotógrafa apasionada por documentar la realidad desde una perspectiva única y artística. Mi objetivo es transformar instantes fugaces en recuerdos eternos, buscando siempre la luz y la composición perfectas en cada disparo.',
                    'I am a photographer passionate about documenting reality from a unique and artistic perspective. My goal is to transform fleeting moments into eternal memories, always seeking the perfect light and composition in every shot.'
                  )}
                </p>
                <p className="body-sm">
                  {t(
                    'A lo largo de mi carrera, he explorado diversos estilos que van desde la moda y el retrato hasta el paisaje, siempre con un enfoque centrado en las emociones y la historia detrás de cada imagen.',
                    'Throughout my career, I have explored various styles ranging from fashion and portrait to landscape, always with a focus centered on emotions and the story behind each image.'
                  )}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-4"
              >
                <p className="body-sm">
                  {t(
                    'Creo firmemente que la fotografía no solo muestra cómo se ve el mundo, sino cómo se siente. Me involucro profundamente en cada proyecto para capturar la autenticidad de mis sujetos y el entorno.',
                    'I firmly believe that photography not only shows what the world looks like, but how it feels. I get deeply involved in each project to capture the authenticity of my subjects and their environment.'
                  )}
                </p>
                <p className="body-sm">
                  {t(
                    'Actualmente acepto encargos y colaboraciones. Si tienes una visión en mente, me encantaría ayudarte a darle vida a través del lente.',
                    'I am currently accepting commissions and collaborations. If you have a vision in mind, I would love to help bring it to life through the lens.'
                  )}
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
