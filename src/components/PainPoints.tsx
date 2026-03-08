import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';

const pains = [
  {
    icon: '😞',
    title: 'Your website feels outdated',
    description: "Potential patients judge your practice in seconds. If your site looks old or clunky, they'll move on — even if you're the better choice.",
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: '🔍',
    title: "You're invisible on Google",
    description: "When someone searches for a therapist, dentist, or chiropractor near them, they find your competitors first. Amazing services don't matter if nobody finds you.",
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: '📅',
    title: 'Empty appointment slots',
    description: "You invested in your education, space, and team. But your calendar has gaps because your website isn't converting visitors into booked appointments.",
    image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=400&q=80',
  },
  {
    icon: '⏰',
    title: "No time to figure it out",
    description: "Between running your practice, seeing patients, and managing your team, the last thing you need is to become a web designer.",
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
  },
];

export default function PainPoints() {
  const { ref, isInView } = useScrollAnimation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-sand-50 relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-copper-100/20 animate-blob blur-3xl pointer-events-none" />
      <motion.div style={{ y: bgY }} className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full bg-brand-50/20 animate-blob-delay blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-50/80 text-copper-600 text-sm font-medium mb-6 backdrop-blur-sm border border-copper-200/50"
          >
            The frustrating reality
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-forest-900 leading-tight mb-5"
          >
            You're great at what you do.{' '}
            <span className="text-copper-500 italic">Your website isn't.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-forest-600 leading-relaxed max-w-2xl mx-auto"
          >
            You didn't spend years mastering your craft to lose patients to a competitor
            with a flashier homepage. Sound familiar?
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {pains.map((pain, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-sand-200/60 hover:shadow-xl hover:border-copper-200/50 transition-all duration-700"
            >
              {/* Image strip at top */}
              <div className="relative h-40 overflow-hidden">
                <motion.img
                  src={pain.image}
                  alt={pain.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
                <div className="absolute bottom-4 left-6 text-3xl">{pain.icon}</div>
              </div>

              <div className="p-6 pt-2 sm:p-8 sm:pt-3">
                <h3 className="font-serif text-xl text-forest-900 mb-3 group-hover:text-copper-500 transition-colors duration-300">{pain.title}</h3>
                <p className="text-forest-600 leading-relaxed text-[15px]">{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
