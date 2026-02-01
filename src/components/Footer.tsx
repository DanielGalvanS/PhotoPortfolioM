import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 md:py-20 bg-foreground text-primary-foreground lg:ml-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-primary-foreground/30 flex items-center justify-center">
                <span className="font-display text-sm font-light">EC</span>
              </div>
              <div>
                <span className="font-display text-lg">Emma</span>
                <span className="font-display text-lg font-light ml-1">Collins</span>
              </div>
            </div>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              4860 Sunrise Road<br />
              Chicago, Illinois
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-primary-foreground/60">
              T. (834) 5432 3344
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-sm">
              E. <a href="mailto:marie@mthompson.com" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                emma@ecollins.com
              </a>
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-[10px] tracking-[0.15em] text-primary-foreground/30 mt-16 pt-8 border-t border-primary-foreground/10"
        >
          © 2024 Emma Collins. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
