import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';

const stats = [
  { value: 50000, suffix: '+', label: 'Mock interviews conducted' },
  { value: 92, suffix: '%', label: 'Users report improved confidence' },
  { value: 4.8, suffix: '/5', label: 'Average user rating', isDecimal: true },
  { value: 500, suffix: '+', label: 'Company roles supported' },
];

function AnimatedCounter({ value, suffix, isDecimal = false }: { value: number; suffix: string; isDecimal?: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();
          
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(easeOut * value);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const formattedValue = isDecimal 
    ? displayValue.toFixed(1) 
    : Math.floor(displayValue).toLocaleString();

  return (
    <span ref={ref}>
      {formattedValue}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-navy-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#635BFF]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        
        {/* Animated lines */}
        <motion.div
          animate={{
            pathLength: [0, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-[#635BFF]/50 to-transparent"
        />
        <motion.div
          animate={{
            pathLength: [0, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute top-1/3 right-1/3 w-px h-48 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <AnimatedSection>
            <span className="text-[#00D4FF] font-semibold text-sm uppercase tracking-wider">
              Proven Results
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
              Join thousands who've landed their dream jobs
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-white/70 leading-relaxed">
              Our platform has helped students and professionals across the world improve 
              their interview skills and secure offers at top companies.
            </p>
          </AnimatedSection>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="border-l-2 border-[#635BFF] pl-6">
                <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                  <AnimatedCounter 
                    value={stat.value} 
                    suffix={stat.suffix}
                    isDecimal={stat.isDecimal}
                  />
                </div>
                <p className="text-white/60">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
