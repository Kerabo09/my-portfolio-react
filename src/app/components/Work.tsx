import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent } from './ui/dialog';
import Masonry from 'react-responsive-masonry';

type Category = 'All' | 'Web Design' | 'Branding';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform Redesign',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    description: 'Complete redesign of an e-commerce platform with modern UI/UX principles and improved conversion rates.',
  },
  {
    id: 2,
    title: 'Modern Portfolio Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    description: 'Clean and minimal portfolio website built with React and Tailwind CSS featuring smooth animations.',
  },
  {
    id: 3,
    title: 'Restaurant Landing Page',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    description: 'Elegant landing page design for a premium restaurant with online reservation system.',
  },
  {
    id: 4,
    title: 'Tech Startup Branding',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80',
    description: 'Complete brand identity design including logo, color palette, and brand guidelines for a tech startup.',
  },
  {
    id: 5,
    title: 'Corporate Logo Design',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    description: 'Professional logo design and brand identity for corporate business with modern aesthetic.',
  },
  {
    id: 6,
    title: 'Fitness App Interface',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    description: 'Mobile-first web application design for fitness tracking with intuitive user interface.',
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const categories: Category[] = ['All', 'Web Design', 'Branding'];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
    <section ref={ref} id="work" className="relative py-24 px-6 bg-gradient-to-b from-[#08080F] to-[#0d0d15]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#8B7CF8]" />
            <span className="text-[#8B7CF8] uppercase tracking-widest text-sm">Portfolio</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#8B7CF8]" />
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-white mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            My Recent Work
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A collection of projects showcasing creativity, precision, and passion
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#8B7CF8] text-white shadow-lg shadow-[#8B7CF8]/30'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - Masonry Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Masonry columnsCount={3} gutter="24px" className="hidden lg:block">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                  isVisible={isVisible}
                />
              ))}
            </Masonry>

            {/* Fallback Grid for smaller screens */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={() => setSelectedProject(project)}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-[#08080F] border-[#E9C547]/20">
          {selectedProject && (
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-12 right-0 text-white/60 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto rounded-lg mb-6"
              />
              <div className="text-center">
                <span className="inline-block px-4 py-1 bg-[#8B7CF8]/20 text-[#8B7CF8] rounded-full text-sm mb-3">
                  {selectedProject.category}
                </span>
                <h3
                  className="text-3xl text-white mb-4"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {selectedProject.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onClick,
  isVisible,
}: {
  project: typeof projects[0];
  index: number;
  onClick: () => void;
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#08080F] via-[#08080F]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <span className="inline-block px-3 py-1 bg-[#E9C547] text-[#08080F] rounded-full text-xs mb-3 w-fit">
          {project.category}
        </span>
        <h3 className="text-xl text-white mb-2" style={{ fontWeight: 600 }}>
          {project.title}
        </h3>
        <div className="flex items-center gap-2 text-[#E9C547]">
          <span className="text-sm">View Project</span>
          <ExternalLink size={16} />
        </div>
      </div>

      {/* Glow Border */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#E9C547]/50 transition-colors duration-300" />
    </motion.div>
  );
}
