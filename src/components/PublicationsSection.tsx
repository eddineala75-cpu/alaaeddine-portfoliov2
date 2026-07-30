import { ElementType } from 'react';
import { PUBLICATIONS_DATA } from '../data';
import { Lock, BarChart3, CheckSquare, ShieldAlert, ArrowRight, Clock } from 'lucide-react';

const ICON_MAP: Record<string, ElementType> = {
  Lock,
  BarChart3,
  CheckSquare,
  ShieldAlert
};

export default function PublicationsSection() {
  return (
    <section id="insights" className="relative py-24 lg:py-32 bg-white dark:bg-[#070F1F] transition-colors duration-500 overflow-hidden border-t border-[#0B1F3A]/10 dark:border-white/5">
      {/* Background Soft Frosted Ambient Orbs */}
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-sky-100/30 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#B4922E]">
            Réf. INS-01 · Publications
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-[#0B1F3A] dark:text-white tracking-tight">
            Notes sur la gouvernance, les risques & la conformité.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PUBLICATIONS_DATA.map((article) => {
            const IconComponent = ICON_MAP[article.icon] || Lock;

            return (
              <a
                key={article.id}
                href="#insights"
                className="card-hover group block rounded-2xl glass-card p-6 hover:border-[#B4922E]/40 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#0B1F3A]/5 dark:bg-white/5 flex items-center justify-center text-[#0B1F3A] dark:text-[#D4B968] group-hover:bg-[#B4922E]/10 group-hover:text-[#B4922E] transition-colors">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>

                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#B4922E] border border-[#B4922E]/30 rounded-full px-2.5 py-0.5 bg-[#B4922E]/5 font-medium">
                      {article.tag}
                    </span>
                  </div>

                  <h3 className="mt-2 font-display font-bold text-base text-[#0B1F3A] dark:text-white leading-snug group-hover:text-[#B4922E] transition-colors">
                    {article.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B1F3A]/10 dark:border-white/10 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#0B1F3A]/60 dark:text-[#CBD3DD]/70 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#B4922E]" />
                    {article.readTime} de lecture
                  </span>

                  <ArrowRight className="w-4 h-4 text-[#B4922E] group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
