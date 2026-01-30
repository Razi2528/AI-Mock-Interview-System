import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';

const companies = [
  { name: 'Google', logo: 'google.svg' },
  { name: 'Microsoft', logo: 'microsoft.svg' },
  { name: 'Amazon', logo: 'amazon.svg' },
  { name: 'Meta', logo: 'meta.svg' },
  { name: 'Netflix', logo: 'netflix.svg' },
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

        <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-12 items-center justify-items-center">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ opacity: 1 }}
              className="opacity-50 hover:opacity-100 transition-opacity flex items-center justify-center"
            >
              <img
                src={`/images/logos/${company.logo}`}
                alt={company.name}
                className="h-8 md:h-10 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
