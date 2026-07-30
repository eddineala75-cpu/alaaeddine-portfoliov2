import { SAMPLES_DATA } from '../data';
import { FileText, FileSpreadsheet, Download } from 'lucide-react';

export default function SamplesSection() {
  return (
    <section id="samples" className="relative py-24 lg:py-32 bg-white dark:bg-[#0F1C33]/40 transition-colors duration-500 overflow-hidden border-t border-[#0B1F3A]/10 dark:border-white/5">
      {/* Background Soft Frosted Ambient Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-sky-100/30 dark:bg-sky-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#B4922E]">
            Réf. SPL-01 · Portfolio documentaire
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl sm:text-4xl text-[#0B1F3A] dark:text-white tracking-tight">
            Échantillons de travail
          </h2>
          <p className="mt-3 text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 leading-relaxed text-sm sm:text-base">
            Sélection de modèles professionnels développés autour de la gouvernance, la gestion des risques, la conformité et les systèmes de management ISO.
          </p>
          <p className="mt-2 text-[#0B1F3A]/60 dark:text-[#CBD3DD]/70 text-xs sm:text-sm italic">
            Ces documents sont présentés à titre démonstratif. Les données utilisées sont fictives ou anonymisées afin de respecter les exigences de confidentialité.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAMPLES_DATA.map((sample) => {
            const isXlsx = sample.type === 'xlsx';

            return (
              <div
                key={sample.id}
                className="card-hover group rounded-2xl glass-card p-7 hover:border-[#B4922E]/40 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0B1F3A]/5 dark:bg-white/5 flex items-center justify-center text-[#0B1F3A] dark:text-[#D4B968] group-hover:bg-[#B4922E]/10 group-hover:text-[#B4922E] transition-colors">
                      {isXlsx ? (
                        <FileSpreadsheet className="w-6 h-6 stroke-[1.5]" />
                      ) : (
                        <FileText className="w-6 h-6 stroke-[1.5]" />
                      )}
                    </div>

                    <span className="font-mono text-[10px] tracking-widest uppercase text-[#B4922E] border border-[#B4922E]/30 rounded-full px-3 py-1 bg-[#B4922E]/5 font-medium">
                      {sample.badge}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-[#0B1F3A] dark:text-white">
                    {sample.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#0B1F3A]/75 dark:text-[#CBD3DD]/80 leading-relaxed">
                    {sample.desc}
                  </p>

                  {/* Document Thumbnail Preview Mock */}
                  <div className="mt-4 rounded-xl bg-[#0B1F3A]/5 dark:bg-white/5 border border-[#0B1F3A]/10 dark:border-white/10 px-4 py-3">
                    {isXlsx ? (
                      <div className="grid grid-cols-4 gap-[4px]" aria-hidden="true">
                        {Array.from({ length: 12 }).map((_, i) => (
                          <span
                            key={i}
                            className="h-2 rounded-[2px]"
                            style={{
                              backgroundColor: i % 4 === 0 ? 'rgba(180,146,46,0.35)' : 'rgba(11,31,58,0.12)'
                            }}
                          />
                        ))}
                      </div>
                    ) : (
                      <div className="space-y-1.5" aria-hidden="true">
                        <div className="h-1.5 w-full rounded-full bg-[#0B1F3A]/15 dark:bg-white/15" />
                        <div className="h-1.5 w-11/12 rounded-full bg-[#0B1F3A]/15 dark:bg-white/15" />
                        <div className="h-1.5 w-4/5 rounded-full bg-[#0B1F3A]/15 dark:bg-white/15" />
                        <div className="h-1.5 w-3/5 rounded-full bg-[#B4922E]/40" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#0B1F3A]/10 dark:border-white/10 flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] text-[#0B1F3A]/60 dark:text-[#CBD3DD]/70">
                    {sample.size}
                  </span>

                  <a
                    href={sample.file}
                    download
                    className="focus-ring inline-flex items-center gap-1.5 text-xs font-medium text-[#0B1F3A] dark:text-white border border-[#0B1F3A]/20 dark:border-white/20 rounded-full px-4 py-2 hover:bg-[#0B1F3A] hover:text-white dark:hover:bg-[#B4922E] dark:hover:text-[#070F1F] dark:hover:border-[#B4922E] transition-colors shadow-sm"
                  >
                    <span>Télécharger</span>
                    <Download className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
