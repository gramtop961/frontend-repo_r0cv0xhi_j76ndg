import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import FeaturedWork from './components/FeaturedWork';
import ServicesOverview from './components/ServicesOverview';
import FinalCTA from './components/FinalCTA';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white font-sans">
      {/* Sticky Header */}
      <header className={`${scrolled ? 'backdrop-blur bg-black/40 py-2' : 'bg-transparent py-4'} sticky top-0 z-50 border-b border-white/5 transition-all`}> 
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-[#00A8FF]" />
            <span className="font-bold tracking-tight">Vertex Vanguard Studios</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-200">
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="rounded-full border border-white/20 px-4 py-1.5 hover:border-[#00A8FF] hover:text-[#00A8FF] transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero with Spline */}
      <HeroSection />

      {/* Featured Work */}
      <FeaturedWork />

      {/* Services */}
      <div id="services">
        <ServicesOverview />
      </div>

      {/* Final CTA */}
      <FinalCTA />

      {/* Contact Section */}
      <section id="contact" className="bg-[#0e0e0e] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold">Let’s collaborate</h3>
            <p className="text-gray-300 mt-3 max-w-md">
              Tell us about your vision and we’ll craft a production plan tailored to your goals.
            </p>
            <div className="mt-8 space-y-3 text-gray-300">
              <p><span className="text-white">Email:</span> hello@vertexvanguard.studio</p>
              <p><span className="text-white">Phone:</span> +1 (555) 014-0022</p>
              <div className="flex items-center gap-4 mt-2">
                <a href="#" className="hover:text-[#00A8FF]">Instagram</a>
                <a href="#" className="hover:text-[#00A8FF]">Vimeo</a>
                <a href="#" className="hover:text-[#00A8FF]">ArtStation</a>
              </div>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-300 mb-1">Name</label>
                <input required type="text" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF]" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-1">Email</label>
                <input required type="email" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF]" placeholder="jane@company.com" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300 mb-1">Company (Optional)</label>
                <input type="text" className="w-full rounded-md bg.black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF]" placeholder="Acme Inc." />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300 mb-1">Service of Interest</label>
                <select className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white focus:outline-none focus:border-[#00A8FF]">
                  <option className="bg-[#111111]">3D Modeling</option>
                  <option className="bg-[#111111]">VFX & Compositing</option>
                  <option className="bg-[#111111]">Architectural Visualization</option>
                  <option className="bg-[#111111]">Rigging & Animation</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-300 mb-1">Project Details</label>
                <textarea rows="5" className="w-full rounded-md bg-black/40 border border-white/10 px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-[#00A8FF]" placeholder="Tell us about timeline, scope, and goals..." />
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full border border-[#00A8FF] bg-[#00A8FF] px-6 py-3 text-black font-semibold hover:brightness-110 transition">
                Submit
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0b0b0b] py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-[#00A8FF]" />
            <span>© {new Date().getFullYear()} Vertex Vanguard Studios</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#work" className="hover:text-white">Projects</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
