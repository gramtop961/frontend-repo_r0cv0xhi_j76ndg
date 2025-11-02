import { motion } from 'framer-motion';

const projects = [
  {
    id: 'vfx-aurora',
    title: 'Aurora Protocol',
    category: 'VFX',
    thumbnail: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'archviz-neon',
    title: 'Neon Habitat',
    category: 'Arch-Viz',
    thumbnail: 'https://images.unsplash.com/photo-1470274038469-958113db2384?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'character-astral',
    title: 'Astral Runner',
    category: 'Character Design',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 'product-ivory',
    title: 'Ivory Resonance',
    category: 'Product Rendering',
    thumbnail: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#111111] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
          <p className="text-gray-400 mt-2">A curated selection across film, design, and visualization.</p>
        </div>
        <a href="#" className="text-[#00A8FF] hover:underline">View All Projects</a>
      </div>
      <div className="mt-10 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700/50">
        <div className="flex gap-6 min-w-max px-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative w-[82vw] sm:w-[420px] md:w-[520px] aspect-[16/9] rounded-xl overflow-hidden bg-white/5"
            >
              <img
                src={p.thumbnail}
                alt={`${p.title} thumbnail`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div>
                  <p className="text-white/90 text-sm">{p.category}</p>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
