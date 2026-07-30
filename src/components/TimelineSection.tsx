import { TIMELINE_DATA } from '../data';

export default function TimelineSection() {
  return (
    <section id="journey" className="relative py-24 lg:py-32 bg-white dark:bg-[#070F1F] transition-colors duration-500 overflow-hidden border-t border-[#0B1F3A]/10 dark:border-white/5">
      {/* Background Soft Ambient Orbs */}
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-sky-100/30 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative">
        
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#B4922E]">
            Réf. TML-01 · Parcours
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-[#0B1F3A] dark:text-white tracking-tight">
            Formation et expérience, en chronologie.
          </h2>
        </div>

        <div className="relative pl-8 sm:pl-10 border-l border-[#0B1F3A]/15 dark:border-white/15 space-y-10">
          {TIMELINE_DATA.map((item) => (
            <div key={item.id} className="relative group">
              {/* Gold Milestone Dot */}
              <span className="absolute -left-[39px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-[#B4922E] ring-4 ring-white dark:ring-[#070F1F] group-hover:scale-125 transition-transform z-10" />

              <div className="glass-card card-hover rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md">
                <div className="flex flex-wrap items-center gap-2.5 mb-2">
                  <span className="font-mono text-[11px] font-semibold tracking-widest uppercase text-[#B4922E]">
                    {item.date}
                  </span>
                  <span className="font-mono text-[10px] font-medium tracking-widest uppercase text-[#0B1F3A] dark:text-[#CBD3DD]/70 border border-[#0B1F3A]/12 dark:border-white/15 px-2.5 py-0.5 rounded-full bg-[#0B1F3A]/5 dark:bg-white/5">
                    {item.type}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest uppercase text-[#0B1F3A]/50 dark:text-white/30">
                    {item.rev}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg sm:text-xl text-[#0B1F3A] dark:text-white">
                  {item.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 max-w-2xl leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
