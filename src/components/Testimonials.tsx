import { motion } from 'framer-motion';
import { useScrollAnimation, fadeUp, staggerContainer } from '../hooks/useScrollAnimation';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Licensed Therapist, LCSW',
    location: 'Gilbert, AZ',
    quote: "Within two months of launching our new site, new patient inquiries doubled. Rooted Ridge understood exactly what my therapy practice needed — a site that feels warm and safe while actually getting people to reach out.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Dr. James Reyes',
    role: 'Family Dentistry',
    location: 'Mesa, AZ',
    quote: "We were spending thousands on ads but our website wasn't converting anyone. Rooted Ridge redesigned everything and now we're getting 3x more appointment requests — mostly from organic search. Best investment we've made.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    name: 'Amanda Chen',
    role: 'Med Spa Owner',
    location: 'Chandler, AZ',
    quote: "The team at Rooted Ridge genuinely cares about our success. They took time to understand our brand, our clients, and our goals. Our new website is gorgeous, fast, and — most importantly — it fills our calendar every week.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
];

const stats = [
  { value: '200%', label: 'Avg. increase in leads' },
  { value: '4.9', label: 'Client satisfaction' },
  { value: '#1', label: 'Local search rankings' },
  { value: '30+', label: 'Practices served' },
];

export default function Testimonials() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-sand-50 relative overflow-hidden grain-overlay">
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-brand-50/20 animate-blob blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-sand-200/30 animate-blob-delay blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50/80 text-brand-500 text-sm font-medium mb-6 backdrop-blur-sm border border-brand-100/50"
          >
            Real results, real practices
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-serif text-3xl sm:text-4xl lg:text-[3.25rem] text-forest-900 leading-tight mb-5"
          >
            Trusted by practices{' '}
            <span className="text-brand-500 italic">across the East Valley</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-forest-600 leading-relaxed"
          >
            Don't just take our word for it. Here's what health and wellness
            professionals say about working with us.
          </motion.p>
        </motion.div>

        {/* Stats banner */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-sand-200/60 shadow-sm"
            >
              <div className="font-serif text-3xl sm:text-4xl text-brand-500 mb-1">{stat.value}</div>
              <div className="text-sm text-forest-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group bg-white rounded-[2rem] p-8 shadow-sm border border-sand-200/60 hover:shadow-xl transition-all duration-700 flex flex-col relative overflow-hidden"
            >
              {/* Quote accent */}
              <div className="absolute top-6 right-6 text-6xl font-serif text-brand-50 leading-none select-none pointer-events-none">"</div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-rating text-rating" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-forest-800 leading-relaxed mb-8 flex-1 relative z-10 text-[15px]">
                "{t.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-sand-100">
                <div className="relative">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-13 h-13 rounded-full object-cover shadow-sm"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-gradient-to-br from-brand-500 to-teal-success border-2 border-white" />
                </div>
                <div>
                  <div className="font-semibold text-forest-900 text-sm">{t.name}</div>
                  <div className="text-forest-400 text-sm">{t.role}</div>
                  <div className="text-forest-400 text-xs">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
