import { motion } from 'framer-motion';
import { Rocket, Film, Building2 } from 'lucide-react';

const services = [
  {
    icon: Rocket,
    title: '3D Modeling',
    desc: 'From concept to hyper-realistic asset.',
    bullets: ['High/Low-poly assets', 'PBR Texturing', 'UV Unwrapping'],
  },
  {
    icon: Film,
    title: 'Visual Effects (VFX)',
    desc: 'Seamless integration of the real and the digital.',
    bullets: ['Compositing', 'Simulation FX', 'Matchmoving'],
  },
  {
    icon: Building2,
    title: 'Architectural Visualization',
    desc: 'Visualizing the spaces of tomorrow.',
    bullets: ['Interior/Exterior Renders', 'Cinematic Walkthroughs', 'Real-time Previews'],
  },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[#0e0e0e] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Core Services</h2>
        <p className="text-gray-400 mt-2 max-w-2xl">A snapshot of our expertise across production pipelines.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm hover:bg-white/[0.06] transition"
            >
              <div className="h-12 w-12 rounded-lg bg-[#00A8FF]/10 text-[#00A8FF] flex items-center justify-center">
                <s.icon />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-gray-300">{s.desc}</p>
              <ul className="mt-4 space-y-1 text-gray-400 text-sm">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00A8FF]" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
