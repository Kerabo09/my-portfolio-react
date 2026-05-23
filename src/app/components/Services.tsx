import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Palette, Code, Sparkles, Image, Layout, ShoppingCart } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Design',
    description: 'Creating stunning, responsive websites that engage users and drive results with modern design principles.',
  },
  {
    icon: Layout,
    title: 'UI/UX Design',
    description: 'Designing intuitive interfaces that provide seamless user experiences across all devices and platforms.',
  },
  {
    icon: Sparkles,
    title: 'Brand Identity',
    description: 'Building memorable brand identities that resonate with your audience and stand out from the competition.',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Crafting eye-catching graphics and visual content that tell your brand story effectively.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Design',
    description: 'Designing conversion-focused online stores that provide exceptional shopping experiences.',
  },
];

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section ref={ref} id="services" className="relative py-24 px-6 bg-[#08080F]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#8B7CF8] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-[#E9C547] rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E9C547]" />
            <span className="text-[#E9C547] uppercase tracking-widest text-sm">What I Do</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#E9C547]" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            My Services
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Transforming ideas into reality through creative design and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10 hover:border-[#E9C547]/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#E9C547]/0 via-[#8B7CF8]/0 to-[#F06A8A]/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />

              <div className="relative">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#E9C547]/20 to-[#8B7CF8]/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-[#E9C547]" size={32} />
                </div>

                <h3 className="text-xl text-white mb-3" style={{ fontWeight: 600 }}>
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#E9C547]/0 group-hover:border-[#E9C547]/50 transition-colors duration-300 rounded-tr-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
