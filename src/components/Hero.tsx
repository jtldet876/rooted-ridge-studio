import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden grain-overlay">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-sand-50 to-brand-50/20" />

      {/* Animated organic blobs */}
      <motion.div style={{ y: y3 }} className="absolute -top-40 -right-40 w-[700px] h-[700px] bg-brand-100/25 animate-blob blur-3xl pointer-events-none" />
      <motion.div style={{ y: y1 }} className="absolute top-1/3 -left-60 w-[500px] h-[500px] bg-copper-100/25 animate-blob-delay blur-3xl pointer-events-none" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-brand-50/30 animate-blob-delay-2 blur-2xl pointer-events-none" />

      <motion.div style={{ opacity }} className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-20 md:pt-36 md:pb-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50/80 text-brand-500 text-sm font-medium mb-6 backdrop-blur-sm border border-brand-100/50"
            >
              <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse-glow" />
              Web design for health & wellness
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-[4rem] text-forest-900 leading-[1.08] tracking-tight mb-7"
            >
              Your practice heals people.{' '}
              <span className="relative inline-block">
                <span className="text-brand-500 italic">Your website</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-300 to-brand-500 rounded-full origin-left"
                />
              </span>{' '}
              should bring them to you.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-lg sm:text-xl text-forest-600 leading-relaxed mb-9 max-w-xl"
            >
              We build trust-driven websites for therapists, dentists, med spas,
              and wellness practices across the East Valley — so the right patients
              find you and book with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-copper-400 to-copper-500 text-white font-semibold text-base hover:from-copper-500 hover:to-copper-600 transition-all duration-500 shadow-xl shadow-copper-500/25 hover:shadow-2xl hover:shadow-copper-500/35 hover:-translate-y-1"
              >
                Book Your Free Consultation
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#process"
                className="group inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-forest-200 text-forest-800 font-semibold text-base hover:border-brand-300 hover:text-brand-500 transition-all duration-500 hover:bg-brand-50/50"
              >
                See How It Works
                <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="mt-14 flex flex-wrap items-center gap-6 text-sm text-forest-400"
            >
              {['No contracts', 'Local SEO included', 'East Valley focus'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {item}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right — Premium Image Collage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block relative"
          >
            <motion.div style={{ y: y2, scale }} className="relative">
              {/* Main hero image */}
              <div className="relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-forest-900/10">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80"
                  alt="Modern wellness clinic interior"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 via-transparent to-brand-800/5" />
              </div>

              {/* Floating stat card - top right */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-5 shadow-xl border border-white/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-forest-900">3x</div>
                    <div className="text-xs text-forest-400 font-medium">More Visibility</div>
                  </div>
                </div>
              </motion.div>

              {/* Floating circular image - bottom left */}
              <motion.div
                animate={{ y: [6, -10, 6] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full overflow-hidden shadow-2xl border-4 border-sand-50"
              >
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=300&q=80"
                  alt="Wellness treatment"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </motion.div>

              {/* Floating booking card - bottom right */}
              <motion.div
                animate={{ y: [-5, 7, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 right-8 glass rounded-2xl p-4 shadow-xl border border-white/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-copper-50 flex items-center justify-center">
                    <svg className="w-5 h-5 text-copper-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-forest-900">Fully Booked</div>
                    <div className="text-xs text-forest-400">This month ✨</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 50C180 100 360 0 540 40C720 80 900 10 1080 50C1260 90 1380 30 1440 60V100H0V50Z" fill="var(--color-sand-50)" />
        </svg>
      </div>
    </section>
  );
}
