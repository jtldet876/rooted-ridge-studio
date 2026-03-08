import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';

export default function FinalCTA() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="contact" className="py-24 md:py-32 bg-sand-50 relative overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            {/* Background image with brand overlay */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
                alt="Modern workspace"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-900/95 via-brand-800/93 to-forest-900/96" />
            </div>

            {/* Organic shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-brand-400/15 animate-blob blur-2xl" />
              <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-sand-50/5 animate-blob-delay blur-2xl" />
              <div className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full bg-copper-400/10 animate-blob-delay-2 blur-xl" />
            </div>

            <div className="relative z-10 px-6 py-16 sm:px-12 md:px-20 md:py-24 lg:py-28">
              <div className="max-w-3xl mx-auto text-center">
                <motion.span
                  variants={fadeUp}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sand-100 text-sm font-medium mb-7 backdrop-blur-sm border border-white/10"
                >
                  <span className="w-2 h-2 rounded-full bg-copper-300 animate-pulse" />
                  Let's grow your practice
                </motion.span>

                <motion.h2
                  variants={fadeUp}
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] text-white leading-tight mb-7"
                >
                  Ready to turn your website into your{' '}
                  <span className="italic text-copper-300">best employee?</span>
                </motion.h2>

                <motion.p
                  variants={fadeUp}
                  className="text-lg text-brand-100/80 leading-relaxed mb-10 max-w-2xl mx-auto"
                >
                  Book a free 30-minute consultation. We'll review your current site,
                  discuss your goals, and show you exactly how we'd help your practice
                  grow. No pressure, no hard sell — just a real conversation.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <a
                    href="mailto:hello@rootedridgestudio.com"
                    className="group inline-flex items-center justify-center px-9 py-4 rounded-full bg-gradient-to-r from-copper-400 to-copper-500 text-white font-semibold text-base hover:from-copper-500 hover:to-copper-600 transition-all duration-500 shadow-xl shadow-copper-500/20 hover:shadow-2xl hover:-translate-y-1"
                  >
                    Book Your Free Consultation
                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href="mailto:hello@rootedridgestudio.com"
                    className="inline-flex items-center justify-center px-9 py-4 rounded-full border-2 border-white/20 text-white font-semibold text-base hover:border-white/50 hover:bg-white/5 transition-all duration-500"
                  >
                    hello@rootedridgestudio.com
                  </a>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-brand-200/70 text-sm"
                >
                  {['Free consultation', 'No contracts required', 'Response within 24 hrs'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-teal-success" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      {item}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
