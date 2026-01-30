import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';

const companies = [
  { name: 'Google', logo: 'Google' },
  { name: 'Microsoft', logo: 'Microsoft' },
  { name: 'Amazon', logo: 'Amazon' },
  { name: 'Meta', logo: 'Meta' },
  { name: 'Apple', logo: 'Apple' },
  { name: 'Netflix', logo: 'Netflix' },
];

export function LogoBar() {
  return (
    <section className="bg-[#F6F9FC] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-gray-500 text-sm font-medium mb-8">
            Trusted by students and professionals at top companies
          </p>
        </AnimatedSection>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ opacity: 1 }}
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <span className="text-xl md:text-2xl font-bold text-gray-700">
                {company.logo}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
