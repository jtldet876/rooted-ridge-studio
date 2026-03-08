import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Why Us', href: '#solution' },
  { label: 'Process', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'About', href: '#about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.06)] border-b border-forest-200/30'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-18 md:h-20">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-brand-500/30">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M12 22V8" />
                <path d="M12 8C12 8 14 5 14 3C14 3 12 4.5 12 4.5C12 4.5 10 3 10 3C10 5 12 8 12 8Z" />
                <path d="M12 14C12 14 8 11 5 12C5 12 8 14 12 14Z" />
                <path d="M12 11C12 11 16 8 19 9C19 9 16 11 12 11Z" />
                <path d="M12 17C12 17 8 15 6 16C6 16 9 17.5 12 17Z" />
              </svg>
            </div>
            <span className="font-serif text-xl text-forest-900 tracking-tight">
              Rooted Ridge
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-sm text-forest-600 hover:text-brand-500 transition-colors duration-300 font-medium group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-500 rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-r from-copper-400 to-copper-500 text-white text-sm font-semibold hover:from-copper-500 hover:to-copper-600 transition-all duration-300 shadow-md shadow-copper-500/20 hover:shadow-lg hover:shadow-copper-500/30 hover:-translate-y-0.5"
            >
              Book a Free Consult
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2.5 rounded-full hover:bg-sand-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5 text-forest-800" /> : <Menu className="w-5 h-5 text-forest-800" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-sand-50/98 backdrop-blur-md md:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  className="text-3xl font-serif text-forest-900 hover:text-brand-500 transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4 inline-flex items-center px-10 py-4 rounded-full bg-gradient-to-r from-copper-400 to-copper-500 text-white text-lg font-semibold shadow-lg"
              >
                Book a Free Consult
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
