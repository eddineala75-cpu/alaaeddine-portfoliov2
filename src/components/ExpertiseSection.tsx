import { ElementType } from 'react';
import { EXPERTISE_DATA } from '../data';
import {
  ShieldCheck,
  BarChart3,
  FileText,
  CheckSquare,
  Lock,
  RefreshCw,
  Scale,
  Leaf,
  FileSpreadsheet,
  UserCheck
} from 'lucide-react';

const ICON_MAP: Record<string, ElementType> = {
  ShieldCheck,
  BarChart3,
  FileText,
  CheckSquare,
  Lock,
  RefreshCw,
  Scale,
  Leaf,
  FileSpreadsheet,
  UserCheck
};

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32 bg-white dark:bg-[#070F1F] transition-colors duration-500 overflow-hidden border-t border-[#0B1F3A]/10 dark:border-white/5">
      {/* Frosted ambient background orbs */}
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-sky-100/30 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#B4922E]">
            Réf. EXP-01 · Domaines d'expertise
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-[#0B1F3A] dark:text-white tracking-tight">
            Dix domaines dans lesquels j'ai développé une pratique concrète.
          </h2>
          <p className="mt-3 text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 text-base">
            Acquis en stage, en formation et sur le terrain — pas une liste de prestations, mais des compétences réellement mises en œuvre.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXPERTISE_DATA.map((item) => {
            const IconComponent = ICON_MAP[item.icon] || ShieldCheck;

            return (
              <div
                key={item.id}
                className="card-hover group rounded-2xl glass-card p-7 hover:border-[#B4922E]/40 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 dark:bg-white/5 flex items-center justify-center text-[#0B1F3A] dark:text-[#D4B968] group-hover:bg-[#B4922E]/10 group-hover:text-[#B4922E] transition-colors">
                      <IconComponent className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#0B1F3A]/60 dark:text-white/40">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0B1F3A] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="mt-5 pt-5 border-t border-[#0B1F3A]/10 dark:border-white/10">
                    <p className="font-mono text-[10px] tracking-widest uppercase text-[#B4922E] mb-2 font-medium">
                      Mise en pratique
                    </p>
                    <ul className="space-y-1.5">
                      {item.deliverables.map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#0B1F3A] dark:text-[#CBD3DD]">
                          <span className="w-1 h-1 rounded-full bg-[#B4922E] mt-1.5 shrink-0" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-dashed border-[#0B1F3A]/10 dark:border-white/5">
                  <p className="font-mono text-[10px] tracking-widest uppercase text-[#0B1F3A]/60 dark:text-[#CBD3DD]/60 mb-1.5">
                    Compétences mobilisées
                  </p>
                  <ul className="space-y-1">
                    {item.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#0B1F3A]/70 dark:text-[#CBD3DD]/70">
                        <span className="w-1 h-1 rounded-full bg-[#0B1F3A]/40 dark:bg-[#CBD3DD]/40 mt-1.5 shrink-0" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
