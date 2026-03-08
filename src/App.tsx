import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import Solution from './components/Solution';
import WhoWeServe from './components/WhoWeServe';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-brand-900 text-white shadow-xl shadow-brand-500/25 flex items-center justify-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-sand-50 flex items-center justify-center"
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <motion.div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-brand-500 to-brand-900 flex items-center justify-center shadow-2xl shadow-brand-500/30"
        >
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            <path d="M12 22V8" />
            <path d="M12 8C12 8 14 5 14 3C14 3 12 4.5 12 4.5C12 4.5 10 3 10 3C10 5 12 8 12 8Z" />
            <path d="M12 14C12 14 8 11 5 12C5 12 8 14 12 14Z" />
            <path d="M12 11C12 11 16 8 19 9C19 9 16 11 12 11Z" />
            <path d="M12 17C12 17 8 15 6 16C6 16 9 17.5 12 17Z" />
          </svg>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-serif text-2xl text-forest-900 tracking-tight"
        >
          Rooted Ridge Studio
        </motion.div>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: 'easeInOut' }}
          className="mt-4 w-40 h-0.5 bg-gradient-to-r from-transparent via-brand-500 to-transparent rounded-full origin-left mx-auto"
        />
      </motion.div>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-sand-50">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <PainPoints />
            <Solution />
            <WhoWeServe />
            <Process />
            <Testimonials />
            <About />
            <FinalCTA />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </div>
  );
}
