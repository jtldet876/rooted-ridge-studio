import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation, staggerContainer, slideInLeft, slideInRight } from '../hooks/useScrollAnimation';

const specialties = [
  'Mental Health Therapists',
  'Dental Offices',
  'Physical & Occupational Therapy',
  'Chiropractors',
  'Med Spas & Aesthetics',
  'Dieticians & Nutritionists',
  'Youth Fitness Programs',
  'Personal Trainers',
  'Wellness Professionals',
];

export default function About() {
  const { ref, isInView } = useScrollAnimation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const imgRotate = useTransform(scrollYProgress, [0, 1], [3, -3]);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-sand-100/40 relative overflow-hidden grain-overlay">
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-brand-50/20 animate-blob blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] rounded-full bg-copper-50/15 animate-blob-delay blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left — Image collage */}
          <motion.div variants={slideInLeft} className="relative">
            <motion.div style={{ y: imgY, rotate: imgRotate }}>
              {/* Main image */}
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-forest-900/10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=700&q=80"
                  alt="Rooted Ridge Studio team"
                  className="w-full h-80 sm:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 via-transparent to-copper-900/5" />
              </div>

              {/* Overlapping circular frame image */}
              <motion.div
                animate={{ y: [-8, 8, -8], rotate: [-3, 3, -3] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-8 -right-4 sm:right-8 w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-2xl border-[5px] border-sand-50"
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=300&q=80"
                  alt="Working together"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -left-4 sm:left-8 glass rounded-2xl p-5 shadow-xl border border-white/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center text-white font-serif text-lg shadow-md">
                    ✦
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-forest-900 font-serif">100%</div>
                    <div className="text-xs text-forest-400 font-medium">Wellness Focused</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div variants={slideInRight}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50/80 text-brand-500 text-sm font-medium mb-6 backdrop-blur-sm border border-brand-100/50">
              Why Rooted Ridge
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] text-forest-900 leading-tight mb-6">
              We only work with{' '}
              <span className="relative inline-block">
                <span className="text-brand-500 italic">health & wellness practices</span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-300 to-brand-500 rounded-full origin-left"
                />
              </span>
            </h2>
            <div className="space-y-4 text-forest-600 leading-relaxed mb-8">
              <p>
                Most web agencies treat your practice like any other business. We don't.
                We specialize exclusively in health and wellness — because your patients
                have unique concerns, your industry has specific regulations, and your
                online presence needs to reflect the trust and care you provide.
              </p>
              <p>
                Based right here in the East Valley, we understand your local market.
                We know what patients are searching for, what makes them choose one
                provider over another, and how to position your practice as the
                obvious choice.
              </p>
            </div>

            <h3 className="font-semibold text-forest-900 mb-4 text-sm uppercase tracking-wider">
              Practices we specialize in
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {specialties.map((specialty, i) => (
                <motion.span
                  key={specialty}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                  className="px-4 py-2 rounded-full bg-white border border-sand-200 text-sm text-forest-600 hover:border-brand-300 hover:text-brand-500 hover:bg-brand-50/50 transition-all duration-300 cursor-default"
                >
                  {specialty}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
