import { SKILL_GROUPS } from '../data';

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-[#0B1F3A]/90 dark:bg-[#070F1F] text-white relative overflow-hidden transition-colors duration-500 backdrop-blur-md">
      {/* Background Soft Frosted Mesh Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#B4922E]/15 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/15 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="max-w-3xl mb-14">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#D4B968]">
            Réf. SKL-01 · Compétences
          </span>
          <h2 className="mt-3 font-display font-semibold text-3xl sm:text-4xl text-white tracking-tight">
            Des compétences concrètes et appliquées.
          </h2>
          <p className="mt-2 text-[#CBD3DD]/80 text-sm sm:text-base">
            Mises en pratique à travers les projets de formation, les audits internes et les stages chez Qualipro.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-6 border border-white/15 bg-white/10 dark:bg-slate-900/40 backdrop-blur-lg space-y-4">
              <h3 className="font-mono text-[11px] tracking-widest uppercase text-[#D4B968] border-b border-white/10 pb-2.5 font-semibold">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="badge-pop glass-pill font-mono text-xs tracking-wide px-3.5 py-1.5 rounded-full text-white/90 hover:bg-[#B4922E] hover:text-[#070F1F] hover:border-[#B4922E] cursor-default transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
