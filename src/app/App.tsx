import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import AIChatbox from './components/AIChatbox';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08080F] text-white overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navigation />
      <Hero />
      <Services />
      <Work />
      <About />
      <Contact />
      <AIChatbox />
    </div>
  );
}