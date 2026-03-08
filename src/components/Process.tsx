import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';

const steps = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We start with a free 30-minute consultation to understand your practice, your patients, and your goals.',
    detail: 'Free · 30 minutes · No obligation',
    icon: '☎️',
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=400&q=80',
  },
  {
    step: '02',
    title: 'Strategy & Design',
    description: 'We research your local market, audit competitors, and craft a custom design that reflects your brand.',
    detail: 'Custom mockups · Market analysis',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=400&q=80',
  },
  {
    step: '03',
    title: 'Build & Optimize',
    description: 'Clean code, local SEO baked in, fast load times, and mobile-first design. Built to convert.',
    detail: 'SEO · Performance · Conversion',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  },
  {
    step: '04',
    title: 'Launch & Grow',
    description: 'After testing, we launch and monitor performance. We continue to refine and optimize month after month.',
    detail: 'Analytics · Updates · Growth',
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=400&q=80',
  },
];

export default function Process() {
  const { ref, isInView } = useScrollAnimation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.7], ['0%', '100%']);

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 bg-sand-100/40 relative overflow-hidden grain-overlay">
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-brand-50/20 animate-blob blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-copper-50/15 animate-blob-delay blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50/80 text-brand-500 text-sm font-medium mb-6 backdrop-blur-sm border border-brand-100/50"
          >
            Simple & stress-free
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-forest-900 leading-tight mb-5"
          >
            From first call to{' '}
            <span className="text-brand-500 italic">full calendar</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-forest-600 leading-relaxed"
          >
            We handle everything so you can focus on what you do best — caring for your patients.
          </motion.p>
        </motion.div>

        {/* Process steps - alternating layout */}
        <div className="relative">
          {/* Animated vertical line - desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-forest-100 -translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-brand-500 to-brand-900 rounded-full"
            />
          </div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
            className="space-y-12 lg:space-y-20"
          >
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    !isEven ? 'lg:direction-rtl' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={`${!isEven ? 'lg:order-2 lg:text-left' : ''}`} style={{ direction: 'ltr' }}>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center font-serif text-white text-lg shadow-lg shadow-brand-500/20">
                        {step.step}
                      </div>
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-forest-900 mb-4">{step.title}</h3>
                    <p className="text-forest-600 leading-relaxed mb-4 text-[15px] sm:text-base">{step.description}</p>
                    <span className="inline-flex px-4 py-1.5 rounded-full bg-brand-50 text-brand-500 text-sm font-medium border border-brand-100">
                      {step.detail}
                    </span>
                  </div>

                  {/* Image */}
                  <div className={`${!isEven ? 'lg:order-1' : ''}`} style={{ direction: 'ltr' }}>
                    <motion.div
                      whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
                      transition={{ duration: 0.4 }}
                      className="relative rounded-[2rem] overflow-hidden shadow-xl shadow-forest-900/8 group"
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-56 sm:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-forest-900/15 via-transparent to-brand-900/5" />
                    </motion.div>
                  </div>

                  {/* Timeline dot - desktop only */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-500 to-brand-900 shadow-lg shadow-brand-500/30 ring-4 ring-sand-50" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
