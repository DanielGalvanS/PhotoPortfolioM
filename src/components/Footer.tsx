import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-10 bg-stone-950 text-white/90 lg:ml-20">
      <div className="container">

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/10 mb-10" />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">

          {/* Left: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                <span className="font-display text-base font-light tracking-wider">MD</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl leading-none">Montse</span>
                <span className="font-display text-xl font-light leading-none">Díaz</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Info Columns */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-sm text-white/60 font-light leading-relaxed tracking-wide">
                Lorem ipsum dolor<br />
                Sit amet, consectetur
              </p>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3 text-sm text-white/60 font-light tracking-wide">
                <Phone className="w-4 h-4 text-white/40" />
                <span>+00 (000) 000 0000</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-light tracking-wide">
                <Mail className="w-4 h-4 text-white/40" />
                <a href="mailto:montsediaz.2003@gmail.com" className="text-white/60 hover:text-white transition-colors">
                  montsediaz.2003@gmail.com
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-24"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/20">
            © 2026 Montse Díaz. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
