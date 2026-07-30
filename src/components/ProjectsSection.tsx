import { ElementType } from 'react';
import { PROJECTS_DATA } from '../data';
import {
  FileText,
  BarChart3,
  ShieldAlert,
  CheckSquare,
  Scale,
  Lock,
  ArrowUpRight
} from 'lucide-react';

const ICON_MAP: Record<string, ElementType> = {
  FileText,
  BarChart3,
  ShieldAlert,
  CheckSquare,
  Scale,
  Lock
};

export default function ProjectsSection() {
  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-white dark:bg-[#0F1C33]/40 transition-colors duration-500 overflow-hidden border-t border-[#0B1F3A]/10 dark:border-white/5">
      {/* Frosted ambient background orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-sky-100/30 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#B4922E]">
            Réf. PRJ-01 · Réalisations
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-[#0B1F3A] dark:text-white tracking-tight">
            Missions réalisées chez Qualipro By Imagine Human.
          </h2>
          <p className="mt-3 text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 text-base">
            Contributions sélectionnées lors des stages chez Qualipro By Imagine Human à Tunis — présentées telles qu'effectuées, dans un cadre supervisé et collaboratif.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project) => {
            const IconComponent = ICON_MAP[project.icon] || FileText;

            return (
              <div
                key={project.id}
                className="card-hover group rounded-2xl glass-card p-7 hover:border-[#B4922E]/40 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0B1F3A]/5 dark:bg-white/5 flex items-center justify-center text-[#0B1F3A] dark:text-[#D4B968] group-hover:bg-[#B4922E]/10 group-hover:text-[#B4922E] transition-colors">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#0B1F3A]/60 dark:text-white/40">
                      {project.code}
                    </span>
                  </div>

                  <div className="mb-3">
                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#B4922E] border border-[#B4922E]/30 rounded-full px-3 py-1 bg-[#B4922E]/5 inline-block font-medium">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0B1F3A] dark:text-white group-hover:text-[#B4922E] transition-colors flex items-center justify-between gap-2">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#B4922E] shrink-0" />
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 leading-relaxed">
                    {project.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B1F3A]/10 dark:border-white/10">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.frameworks.map((fw, idx) => (
                      <span
                        key={idx}
                        className="badge-pop font-mono text-[9px] font-semibold tracking-wide text-[#0B1F3A] dark:text-[#CBD3DD] bg-[#0B1F3A]/5 dark:bg-white/10 border border-[#0B1F3A]/12 dark:border-white/15 rounded-full px-2.5 py-0.5 group-hover:border-[#B4922E]/40 group-hover:text-[#B4922E]"
                      >
                        {fw}
                      </span>
                    ))}
                  </div>

                  <p className="font-mono text-[10px] text-[#0B1F3A]/60 dark:text-white/40">
                    {project.context}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
