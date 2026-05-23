import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { Download, Award, Users, Briefcase, Star } from 'lucide-react';
import { Button } from './ui/button';
import profileImage from '../../imports/image.png';
import cvPdf from '@/imports/Kyle_Caleste_CV.pdf'

const skills = [
  'React',
  'TypeScript',
  'UI/UX Design',
  'Figma',
  'Tailwind CSS',
  'Web Development',
  'Brand Design',
  'Graphic Design',
];

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: '50+' },
  { icon: Users, label: 'Happy Clients', value: '30+' },
  { icon: Award, label: 'Years Experience', value: '2' },
  { icon: Star, label: '5-Star Reviews', value: '5.0' },
];

export default function About() {
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
    <section ref={ref} id="about" className="relative py-24 px-6 bg-[#08080F]">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#F06A8A] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[#8B7CF8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#F06A8A]" />
            <span className="text-[#F06A8A] uppercase tracking-widest text-sm">Get to Know Me</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#F06A8A]" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            About Me
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/10 hover:border-[#E9C547]/50 transition-all duration-300">
              <img
                src={profileImage}
                alt="Kyle - Creative Designer & Developer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E9C547]/10 to-[#8B7CF8]/10" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-[#E9C547] rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-[#8B7CF8] rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3
              className="text-3xl text-white mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Hi, I'm <span className="text-[#E9C547]">Kyle</span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I'm a 20-year-old creative designer and web developer from Calbayog City, Samar.
              Currently pursuing my passion for design and technology as a 2nd year college student
              at Northwest Samar State University.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              I specialize in creating beautiful, functional digital experiences that combine
              aesthetic design with cutting-edge web development. My goal is to transform ideas
              into reality through innovative solutions.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4 className="text-white text-xl mb-4" style={{ fontWeight: 600 }}>
                Skills & Expertise
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="px-4 py-2 bg-gradient-to-r from-[#E9C547]/10 to-[#8B7CF8]/10 border border-[#E9C547]/30 rounded-full text-white/90 text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            <a href={cvPdf} download="Kyle_Caleste_CV.pdf">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#E9C547] to-[#8B7CF8] hover:opacity-90 text-white px-8 py-6"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </a>

          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl border border-white/10"
            >
              <div className="inline-block p-4 bg-gradient-to-br from-[#E9C547]/20 to-[#8B7CF8]/20 rounded-xl mb-4">
                <stat.icon className="text-[#E9C547]" size={32} />
              </div>
              <div
                className="text-4xl text-white mb-2"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {stat.value}
              </div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}