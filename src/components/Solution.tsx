import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation, fadeUp, staggerContainer, slideInLeft, slideInRight } from '../hooks/useScrollAnimation';

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
    title: 'Trust-Building Design',
    description: 'Warm, professional design that mirrors the care you provide. Patients feel safe booking before they walk through your door.',
    color: 'from-brand-500 to-brand-900',
    shadowColor: 'shadow-brand-500/15',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Local SEO That Works',
    description: 'Optimized for East Valley searches. When someone Googles "therapist near me," your practice shows up first.',
    color: 'from-copper-400 to-copper-600',
    shadowColor: 'shadow-copper-500/15',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    title: 'Conversion-Focused',
    description: 'Every page is built to turn visitors into appointments. Clear calls to action, easy scheduling, and copy that converts.',
    color: 'from-brand-500 to-brand-900',
    shadowColor: 'shadow-brand-500/15',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    title: 'Mobile-First Experience',
    description: 'Over 70% of health searches happen on phones. Your site will look flawless on every device, every time.',
    color: 'from-copper-400 to-copper-600',
    shadowColor: 'shadow-copper-500/15',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Lightning-Fast Loading',
    description: 'A slow website loses patients. We build performance-optimized sites that load instantly and keep visitors engaged.',
    color: 'from-brand-500 to-brand-900',
    shadowColor: 'shadow-brand-500/15',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: 'Ongoing Support & Growth',
    description: "Your website isn't a one-and-done project. We provide ongoing updates, analytics, and strategy to keep growing.",
    color: 'from-copper-400 to-copper-600',
    shadowColor: 'shadow-copper-500/15',
  },
];

export default function Solution() {
  const { ref, isInView } = useScrollAnimation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section id="solution" ref={sectionRef} className="py-24 md:py-32 bg-sand-100/50 relative overflow-hidden grain-overlay">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-50/30 animate-blob blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-copper-50/20 animate-blob-delay blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Intro with side image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={staggerContainer}
          >
            <motion.span
              variants={slideInLeft}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50/80 text-brand-500 text-sm font-medium mb-6 backdrop-blur-sm border border-brand-100/50"
            >
              The Rooted Ridge difference
            </motion.span>
            <motion.h2
              variants={slideInLeft}
              className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-forest-900 leading-tight mb-5"
            >
              A website that works{' '}
              <span className="text-brand-500 italic">as hard as you do</span>
            </motion.h2>
            <motion.p
              variants={slideInLeft}
              className="text-lg text-forest-600 leading-relaxed"
            >
              We combine beautiful, organic design with proven conversion strategies
              and local SEO — built specifically for health and wellness practices
              that want to grow.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={slideInRight}
            className="relative"
          >
            <motion.div style={{ y: imgY }} className="relative">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl shadow-forest-900/8">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80"
                  alt="Team collaborating on web design"
                  className="w-full h-72 sm:h-80 object-cover"
                  loading="lazy"
                />
              </div>
              {/* Floating accent image */}
              <motion.div
                animate={{ y: [-6, 8, -6], rotate: [-2, 2, -2] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl overflow-hidden shadow-xl border-4 border-sand-50"
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=200&q=80"
                  alt="Working on laptop"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Benefits grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-[2rem] p-8 shadow-sm border border-sand-200/60 hover:shadow-xl hover:border-brand-100/60 transition-all duration-700 relative overflow-hidden"
            >
              {/* Hover gradient accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 transition-opacity duration-700`} />

              <div className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center text-white mb-6 shadow-lg ${benefit.shadowColor} group-hover:scale-110 transition-transform duration-500`}>
                {benefit.icon}
              </div>
              <h3 className="font-serif text-xl text-forest-900 mb-3 group-hover:text-brand-500 transition-colors duration-300">{benefit.title}</h3>
              <p className="text-forest-600 leading-relaxed text-[15px]">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
