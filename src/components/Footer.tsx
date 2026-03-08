import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-forest-300 relative overflow-hidden">
      {/* Organic top transition */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 25C240 65 480 0 720 35C960 70 1200 5 1440 45V0H0V25Z" fill="var(--color-sand-50)" />
        </svg>
      </div>

      {/* Subtle background accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-900/30 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-copper-900/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 pb-8 relative">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <motion.a
              href="#"
              className="flex items-center gap-2.5 mb-5 group"
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-500 to-brand-400 flex items-center justify-center transition-all duration-500 group-hover:shadow-lg group-hover:shadow-brand-500/20">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 22V8" />
                  <path d="M12 8C12 8 14 5 14 3C14 3 12 4.5 12 4.5C12 4.5 10 3 10 3C10 5 12 8 12 8Z" />
                  <path d="M12 14C12 14 8 11 5 12C5 12 8 14 12 14Z" />
                  <path d="M12 11C12 11 16 8 19 9C19 9 16 11 12 11Z" />
                  <path d="M12 17C12 17 8 15 6 16C6 16 9 17.5 12 17Z" />
                </svg>
              </div>
              <span className="font-serif text-xl text-sand-50 tracking-tight">
                Rooted Ridge Studio
              </span>
            </motion.a>
            <p className="text-forest-400 leading-relaxed max-w-md text-sm mb-6">
              Web design and local SEO for health & wellness practices across the East Valley.
              We help therapists, dentists, med spas, and wellness professionals grow their
              practices with websites that earn trust and book appointments.
            </p>
            {/* Social-style icons */}
            <div className="flex gap-3">
              {['M', 'in', 'ig'].map((label, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-forest-800/60 flex items-center justify-center text-forest-400 hover:bg-brand-500 hover:text-white transition-all duration-300 cursor-pointer text-xs font-semibold border border-forest-800/40"
                >
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-sand-50 text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <ul className="space-y-3.5">
              {[
                { label: 'Why Us', href: '#solution' },
                { label: 'Our Process', href: '#process' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-teal-success transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-px bg-teal-success transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* We Serve */}
          <div className="md:col-span-4">
            <h4 className="font-semibold text-sand-50 text-sm uppercase tracking-wider mb-5">We Serve</h4>
            <ul className="space-y-3.5">
              {[
                'Therapists & Counselors',
                'Dental Practices',
                'Med Spas & Aesthetics',
                'Chiropractors',
                'PT & OT Clinics',
                'Personal Trainers & Fitness',
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-500/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-forest-800/40 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-forest-400">
            © {currentYear} Rooted Ridge Studio. All rights reserved. Made with 🌿 in the East Valley.
          </p>
          <div className="flex items-center gap-6 text-xs text-forest-400">
            <span>East Valley, Arizona</span>
            <a href="mailto:hello@rootedridgestudio.com" className="hover:text-teal-success transition-colors duration-300">
              hello@rootedridgestudio.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
