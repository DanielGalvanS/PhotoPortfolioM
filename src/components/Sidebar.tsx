import { motion } from "framer-motion";

const Sidebar = () => {
  const socialLinks = [
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-16 md:w-20 z-40 hidden lg:flex flex-col items-center justify-between py-8 bg-background border-r border-border">
      {/* Top - Social Links Vertical */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-col items-center gap-6"
      >
        {socialLinks.map((link, index) => (
          <a
            key={link.label}
            href={link.href}
            className="vertical-text text-[10px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {link.label}
          </a>
        ))}
      </motion.div>

      {/* Center - Divider */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-px h-24 bg-border origin-top"
      />

      {/* Bottom - Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex flex-col items-center gap-3"
      >
        <span
          className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-accent"
        />
      </motion.div>
    </aside>
  );
};

export default Sidebar;
