import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';

const audiences = [
  {
    title: 'Mental Health Therapists',
    description: 'A safe, welcoming online presence that encourages clients to take the first step.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
    accent: 'from-brand-500 to-brand-900',
  },
  {
    title: 'Dental Offices',
    description: 'Show patients your practice is modern, clean, and trustworthy.',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=400&q=80',
    accent: 'from-copper-400 to-copper-600',
  },
  {
    title: 'Med Spas & Aesthetics',
    description: 'Elegant design that reflects the premium experience you provide.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80',
    accent: 'from-brand-500 to-brand-900',
  },
  {
    title: 'PT & Occupational Therapy',
    description: 'Help patients feel confident choosing your clinic for their recovery.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80',
    accent: 'from-copper-400 to-copper-600',
  },
  {
    title: 'Chiropractors',
    description: 'Educate patients and make it effortless to schedule their first visit.',
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=400&q=80',
    accent: 'from-brand-500 to-brand-900',
  },
  {
    title: 'Wellness & Fitness',
    description: 'Dieticians, trainers, and youth fitness — inspire action with vibrant design.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=400&q=80',
    accent: 'from-copper-400 to-copper-600',
  },
];

export default function WhoWeServe() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section className="py-24 md:py-32 bg-sand-50 relative overflow-hidden grain-overlay">
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-copper-100/15 animate-blob blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-50/80 text-copper-600 text-sm font-medium mb-6 backdrop-blur-sm border border-copper-200/50"
          >
            Specialized expertise
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-forest-900 leading-tight mb-5"
          >
            Built for the practices that keep{' '}
            <span className="text-copper-500 italic">our community healthy</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-forest-600 leading-relaxed"
          >
            We understand the unique needs of health and wellness businesses — from compliance to patient trust.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {audiences.map((a, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm border border-sand-200/60 hover:shadow-xl transition-all duration-700"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${a.accent} shadow-lg`} />
              </div>

              <div className="p-6 pt-2">
                <h3 className="font-serif text-lg text-forest-900 mb-2 group-hover:text-brand-500 transition-colors duration-300">
                  {a.title}
                </h3>
                <p className="text-forest-600 text-sm leading-relaxed">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
