import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export default function Hero() {
  const roles = ['Creative Designer', 'Web Developer', 'UI/UX Designer', 'Brand Strategist'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.substring(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.substring(0, displayText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRole((currentRole + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#08080F]">
        {/* Gradient Mesh */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 50%, #8B7CF8 0%, transparent 50%), radial-gradient(circle at 80% 80%, #F06A8A 0%, transparent 50%), radial-gradient(circle at 40% 20%, #E9C547 0%, transparent 50%)',
            backgroundSize: '200% 200%',
          }}
        />

        {/* Floating Shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ['#8B7CF8', '#E9C547', '#F06A8A'][i % 3],
              opacity: 0.1,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}

        {/* Grain Texture Overlay */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#E9C547] mb-4 tracking-widest uppercase text-sm"
          >
            Welcome to my portfolio
          </motion.p>

          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Hi, I'm <span className="text-[#E9C547]">Kyle</span>
          </h1>

          <div className="h-16 md:h-20 mb-8">
            <p className="text-2xl md:text-4xl text-white/90">
              <span className="text-[#8B7CF8]">{displayText}</span>
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Crafting beautiful digital experiences with passion and precision.
            From concept to creation, I bring ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToWork}
              size="lg"
              className="bg-[#E9C547] hover:bg-[#E9C547]/90 text-[#08080F] px-8 py-6 text-lg shadow-lg shadow-[#E9C547]/20 transition-all hover:shadow-[#E9C547]/40"
            >
              View My Work
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              variant="outline"
              className="border-2 border-[#8B7CF8] text-[#8B7CF8] hover:bg-[#8B7CF8] hover:text-white px-8 py-6 text-lg transition-all"
            >
              Hire Me
            </Button>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-white/50 text-sm">Scroll Down</span>
            <ChevronDown className="text-[#E9C547]" size={24} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
