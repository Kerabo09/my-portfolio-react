import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Instagram, Briefcase, Github, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/wacko0_0', color: '#E1306C', label: 'Instagram' },
    { icon: Briefcase, url: 'https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-homepage', color: '#2164F3', label: 'Indeed' },
    { icon: Github, url: 'https://github.com/Kerabo09', color: '#ffffff', label: 'GitHub' },
    { icon: Facebook, url: 'https://www.facebook.com/share/1D21T9vvo8/?mibextid=wwXIfr', color: '#1877F2', label: 'Facebook' },
  ];

  return (
    <section ref={ref} id="contact" className="relative py-24 px-6 bg-gradient-to-b from-[#0d0d15] to-[#08080F]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#E9C547]" />
            <span className="text-[#E9C547] uppercase tracking-widest text-sm">Get In Touch</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#E9C547]" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Contact Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Let's work together to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3
                className="text-3xl text-white mb-6"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Let's talk about your project
              </h3>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                Whether you're planning a big project or just want to chat about design, my inbox
                is always open. I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#E9C547]/20 to-[#8B7CF8]/20 rounded-lg">
                  <Mail className="text-[#E9C547]" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Email
                  </h4>
                  <p className="text-white/60">kyle@portfolio.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-[#E9C547]/20 to-[#8B7CF8]/20 rounded-lg">
                  <MapPin className="text-[#E9C547]" size={24} />
                </div>
                <div>
                  <h4 className="text-white mb-1" style={{ fontWeight: 600 }}>
                    Location
                  </h4>
                  <p className="text-white/60">Calbayog City, Samar, Philippines</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white mb-4" style={{ fontWeight: 600 }}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-[#E9C547]/50 transition-all group"
                    style={{ color: social.color }}
                  >
                    <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#E9C547] h-12"
                />
              </div>

              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#E9C547] h-12"
                />
              </div>

              <div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#E9C547] h-12"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-[#E9C547] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                size="lg"
                className="w-full bg-gradient-to-r from-[#E9C547] to-[#8B7CF8] hover:opacity-90 text-white py-6 text-lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={20} />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 text-center"
      >
        <p className="text-white/40">
          © 2024 Kyle's Portfolio. Made with ❤️ in Calbayog City, Samar. All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
